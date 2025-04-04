--- 
title: Unsloth Template
author: <weixiong_626> 
date: 2025-4-3 3:30:00 +0200
categories: [LLM, Memo] 
math: true 
tags: []
---

## Code

### **Initial Setup**  

```python
from unsloth import FastLanguageModel
import torch
max_seq_length = 2048 # Choose any! We auto support RoPE Scaling internally!
dtype = None # None for auto detection. Float16 for Tesla T4, V100, Bfloat16 for Ampere+ 自动选择
load_in_4bit = True # Use 4bit quantization to reduce memory usage. Can be False. 优化内存

# 4bit pre quantized models we support for 4x faster downloading + no OOMs.
fourbit_models = [
    "unsloth/Meta-Llama-3.1-8B-bnb-4bit",      # Llama-3.1 15 trillion tokens model 2x faster!
    "unsloth/Meta-Llama-3.1-8B-Instruct-bnb-4bit",
    "unsloth/Meta-Llama-3.1-70B-bnb-4bit",
    "unsloth/Meta-Llama-3.1-405B-bnb-4bit",    # We also uploaded 4bit for 405b!
    "unsloth/Mistral-Nemo-Base-2407-bnb-4bit", # New Mistral 12b 2x faster!
    "unsloth/Mistral-Nemo-Instruct-2407-bnb-4bit",
    "unsloth/mistral-7b-v0.3-bnb-4bit",        # Mistral v3 2x faster!
    "unsloth/mistral-7b-instruct-v0.3-bnb-4bit",
    "unsloth/Phi-3-mini-4k-instruct",          # Phi-3 2x faster!d
    "unsloth/Phi-3-medium-4k-instruct",
    "unsloth/gemma-2-9b-bnb-4bit",
    "unsloth/gemma-2-27b-bnb-4bit",            # Gemma 2x faster!
] # More models at https://huggingface.co/unsloth

model, tokenizer = FastLanguageModel.from_pretrained(
    # 本地没有，会自动下载
    model_name = "unsloth/Meta-Llama-3.1-8B",
    max_seq_length = max_seq_length,
    dtype = dtype,
    load_in_4bit = load_in_4bit,
    # token = "hf_...", # use one if using gated models like meta-llama/Llama-2-7b-hf
)
```
### **LORA**
**As long as r > 0, this model enables the LoRA fine-tuning mechanism.**  
- **use_rslora=False**: Whether to enable Rank-Stabilized LoRA (RsLoRA) - When fine-tunning small model(3b/7b)
- **loftq_config = None**: The original model is quantized during training to improve inference efficiency; Setting is difficult.  

```python
model = FastLanguageModel.get_peft_model(
    model,
    r = 16, # Choose any number > 0 ! Suggested 8, 16, 32, 64, 128
    target_modules = ["q_proj", "k_proj", "v_proj", "o_proj",
                      "gate_proj", "up_proj", "down_proj",],
    lora_alpha = 16,
    lora_dropout = 0, # Supports any, but = 0 is optimized
    bias = "none",    # Supports any, but = "none" is optimized
    # [NEW] "unsloth" uses 30% less VRAM, fits 2x larger batch sizes!
    use_gradient_checkpointing = "unsloth", # True or "unsloth" for very long context
    random_state = 3407,
    use_rslora = False,  # We support rank stabilized LoRA
    loftq_config = None, # And LoftQ
)
```

### **Template and loading training set from huggingface**
- **Non-Alpaca formats**: Just construct the prompt manually and format it as a text field
- Must add EOS_TOKEN, otherwise your generation will go on forever!  

```python
from datasets import load_dataset
# 定义训练数据格式化字符串模板
train_prompt_style="""请遵循指令回答用户问题。
在回答之前，请仔细思考问题，并创建一个逻辑连贯的思考过程，以确保回答准确无误。
### 指令:
你是一位精通八字算命、紫微斗数、风水、易经卦象、塔罗牌占卜、星象、面相手相和运势预测等方面的算命大师。
请回答以下算命问题。
### 问题:
{}
### 回答:
<think>{}</think>
{}
"""
# 加载数据集
dataset = load_dataset("Conard/fortune-telling", split="train")
def formatting_data(examples):
    questions = examples["Question"]
    cots = examples["Complex_CoT"]
    responses = examples["Response"]
    texts = []
    for q, c, r in zip(questions, cots, responses):
        # 必须要加上EOS标识符
        text = train_prompt_style.format(q, c, r) + tokenizer.eos_token
        texts.append(text)
    return {"text": texts}
# 加载数据集并进行映射处理操作
dataset = dataset.map(formatting_data, batched=True)
print(dataset)
```

### **Training hyperparameter configuration**  
```python
from trl import SFTTrainer
from transformers import TrainingArguments
from unsloth import is_bfloat16_supported

trainer = SFTTrainer(
    model = model,
    tokenizer = tokenizer,
    train_dataset = dataset,
    dataset_text_field = "text",
    max_seq_length = max_seq_length,
    dataset_num_proc = 2,
    packing = False, # Can make training 5x faster for short sequences.
    args = TrainingArguments(
        per_device_train_batch_size = 2,
        gradient_accumulation_steps = 4,
        warmup_steps = 5,
        # num_train_epochs= 5, # 训练轮数
        # 最大训练步数，测试时设置
        max_steps = 60,
        learning_rate = 2e-4, # 学习率
        fp16 = not is_bfloat16_supported(),
        bf16 = is_bfloat16_supported(),
        logging_steps = 1,
        optim = "adamw_8bit", # 优化器
        weight_decay = 0.01,
        lr_scheduler_type = "linear",
        seed = 3407,
        output_dir = "outputs",
    ),
)

print(trainer)
```

### **Training start**
```python
trainer_stats = trainer.train()
```

### **Test Output**
```python
# alpaca_prompt = Copied from above
FastLanguageModel.for_inference(model) # Enable native 2x faster inference
inputs = tokenizer(
[
    # alpaca_prompt.format(
    #     "", # instruction
    #     "新房装修,大门对着电梯好不好?要如何化解?", # input
    #     "", # output - leave this blank for generation!
    # )
    train_prompt_style.format(
        "", # instruction
        "新房装修,大门对着电梯好不好?要如何化解?", # input
        "", # output - leave this blank for generation!
    )
], return_tensors = "pt").to("cuda")

from transformers import TextStreamer
text_streamer = TextStreamer(tokenizer)
_ = model.generate(**inputs, streamer = text_streamer, max_new_tokens = 128)
```

### **Store the Model's Parameters**
```python
lora_model="Learning/models/fortune-telling-Meta-Llama-3.1-8B"

# lora_model="/Learning/models/fortune-telling-Meta-Llama-3.1-8B" # under /

model.save_pretrained(lora_model)
tokenizer.save_pretrained(lora_model)
```

### **Combine the Model**
- **The difference is the precision of model weight storage (float16 vs 4bit)**  
- If the size is not appropriate, an error will be reported  

```python
# 合并到16bit 保存到本地 OR huggingface
# 直接在这步保存吧。。
model.save_pretrained_merged("models/Llama3", tokenizer, save_method = "merged_16bit",)
# model.push_to_hub_merged("hf/model", tokenizer, save_method = "merged_16bit", token = "")

# 合并到4bit 保存到本地 OR huggingface
# model.save_pretrained_merged("models/Llama3", tokenizer, save_method = "merged_4bit",)
# model.push_to_hub_merged("hf/model", tokenizer, save_method = "me`rged_4bit", token = "")
```

### **Save as GGUF**(BUG)
```python
# 保存到 16bit GGUF 体积大
model.save_pretrained_gguf("model", tokenizer, quantization_method = "f16")
# model.push_to_hub_gguf("hf/model", tokenizer, quantization_method = "f16", token = "")

# # 保存到 8bit Q8_0 体积适中
# model.save_pretrained_gguf("model", tokenizer,)
# model.push_to_hub_gguf("hf/model", tokenizer, token = "")

# # 保存到 q4_k_m GGUF 体积小
# model.save_pretrained_gguf("model", tokenizer, quantization_method = "q4_k_m")
# model.push_to_hub_gguf("hf/model", tokenizer, quantization_method = "q4_k_m", token = "")
```

#### **INSTALL CMAKE FIRST**  

```bash
sudo apt update
sudo apt install cmake -y
```
