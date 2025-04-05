--- 
title: Unsloth Template
author: <weixiong_626> 
date: 2025-4-3 3:30:00 +0200
categories: [LLM, Memo] 
math: true 
tags: []
---

## Setting
```txt
Package                   Version
------------------------- --------------
accelerate                1.6.0
aiohappyeyeballs          2.6.1
aiohttp                   3.11.16
aiosignal                 1.3.2
anyio                     4.9.0
argon2-cffi               23.1.0
argon2-cffi-bindings      21.2.0
arrow                     1.3.0
asttokens                 3.0.0
async-lru                 2.0.5
attrs                     25.3.0
babel                     2.17.0
beautifulsoup4            4.13.3
bitsandbytes              0.45.4
bleach                    6.2.0
certifi                   2025.1.31
cffi                      1.17.1
charset-normalizer        3.4.1
comm                      0.2.2
cut-cross-entropy         25.1.1
datasets                  3.5.0
debugpy                   1.8.13
decorator                 5.2.1
defusedxml                0.7.1
diffusers                 0.32.2
dill                      0.3.8
docstring_parser          0.16
executing                 2.2.0
fastjsonschema            2.21.1
filelock                  3.13.1
fqdn                      1.5.1
frozenlist                1.5.0
fsspec                    2024.12.0
gmpy2                     2.2.1
h11                       0.14.0
hf_transfer               0.1.9
httpcore                  1.0.7
httpx                     0.28.1
huggingface-hub           0.30.1
idna                      3.10
importlib_metadata        8.6.1
ipykernel                 6.29.5
ipython                   9.0.2
ipython_pygments_lexers   1.1.1
ipywidgets                8.1.5
isoduration               20.11.0
jedi                      0.19.2
Jinja2                    3.1.6
json5                     0.12.0
jsonpointer               3.0.0
jsonschema                4.23.0
jsonschema-specifications 2024.10.1
jupyter_client            8.6.3
jupyter_core              5.7.2
jupyter-events            0.12.0
jupyter-lsp               2.2.5
jupyter_server            2.15.0
jupyter_server_terminals  0.5.3
jupyterlab                4.3.6
jupyterlab_pygments       0.3.0
jupyterlab_server         2.27.3
jupyterlab_widgets        3.0.13
markdown-it-py            3.0.0
MarkupSafe                3.0.2
matplotlib-inline         0.1.7
mdurl                     0.1.2
mistune                   3.1.3
mpmath                    1.3.0
multidict                 6.3.2
multiprocess              0.70.16
nbclient                  0.10.2
nbconvert                 7.16.6
nbformat                  5.10.4
nest-asyncio              1.6.0
networkx                  3.4.2
notebook                  7.3.3
notebook_shim             0.2.4
numpy                     2.2.4
nvidia-cublas-cu12        12.4.5.8
nvidia-cuda-cupti-cu12    12.4.127
nvidia-cuda-nvrtc-cu12    12.4.127
nvidia-cuda-runtime-cu12  12.4.127
nvidia-cudnn-cu12         9.1.0.70
nvidia-cufft-cu12         11.2.1.3
nvidia-curand-cu12        10.3.5.147
nvidia-cusolver-cu12      11.6.1.9
nvidia-cusparse-cu12      12.3.1.170
nvidia-cusparselt-cu12    0.6.2
nvidia-nccl-cu12          2.21.5
nvidia-nvjitlink-cu12     12.4.127
nvidia-nvtx-cu12          12.4.127
overrides                 7.7.0
packaging                 24.2
pandas                    2.2.3
pandocfilters             1.5.1
parso                     0.8.4
peft                      0.15.1
pexpect                   4.9.0
pillow                    11.1.0
pip                       25.0
platformdirs              4.3.7
prometheus_client         0.21.1
prompt_toolkit            3.0.50
propcache                 0.3.1
protobuf                  3.20.3
psutil                    7.0.0
ptyprocess                0.7.0
pure_eval                 0.2.3
pyarrow                   19.0.1
pycparser                 2.22
Pygments                  2.19.1
python-dateutil           2.9.0.post0
python-json-logger        3.3.0
pytz                      2025.2
PyYAML                    6.0.2
pyzmq                     26.4.0
referencing               0.36.2
regex                     2024.11.6
requests                  2.32.3
rfc3339-validator         0.1.4
rfc3986-validator         0.1.1
rich                      14.0.0
rpds-py                   0.24.0
safetensors               0.5.3
Send2Trash                1.8.3
sentencepiece             0.2.0
setuptools                75.8.0
shtab                     1.7.1
six                       1.17.0
sniffio                   1.3.1
soupsieve                 2.6
stack-data                0.6.3
sympy                     1.13.1
terminado                 0.18.1
tinycss2                  1.4.0
tokenizers                0.21.1
torch                     2.6.0
torchvision               0.21.0
tornado                   6.4.2
tqdm                      4.67.1
traitlets                 5.14.3
transformers              4.50.3
triton                    3.2.0
trl                       0.15.2
typeguard                 4.4.2
types-python-dateutil     2.9.0.20241206
typing_extensions         4.13.1
tyro                      0.9.18
tzdata                    2025.2
unsloth                   2025.3.19
unsloth_zoo               2025.3.17
uri-template              1.3.0
urllib3                   2.3.0
wcwidth                   0.2.13
webcolors                 24.11.1
webencodings              0.5.1
websocket-client          1.8.0
wheel                     0.45.1
widgetsnbextension        4.0.13
xformers                  0.0.29.post3
xxhash                    3.5.0
yarl                      1.18.3
zipp                      3.21.0
```  

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
