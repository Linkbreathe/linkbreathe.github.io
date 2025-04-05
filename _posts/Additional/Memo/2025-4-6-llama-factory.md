--- 
title: LLama-factory Memo
author: <weixiong_626> 
date: 2025-4-3 3:30:00 +0200
categories: [LLM, Memo] 
math: true 
tags: []
---

## DEPLOY LLama-Factory

If you use wsl, remember to save it outside the Ubuntu system, This way you can operate more easily

## DOWNLOAD THE MODEL

DONT FORGET `git lfs`  

## DATASET
Only `sharegpt` and `alpaca` style datasets are supported, but chatgpt can be used to generate code to help with conversion. Also, remember to fill in `data_info.json`  

## Parameters

After Trainning, the parameters and configs will be stored in `config` and `save`  

## EXPORT

When `exporting` the model, remember to select `Checkpoint path`, then `Export quantization bit` will automatically turn to `None`

## Transform it to GGUF model

https://blog.csdn.net/Andy_shenzl/article/details/141709811

## pip list
```text
Package                  Version      Editable project location
------------------------ ------------ -------------------------
accelerate               1.5.2
aiofiles                 23.2.1
aiohappyeyeballs         2.6.1
aiohttp                  3.11.16
aiosignal                1.3.2
annotated-types          0.7.0
anyio                    4.9.0
async-timeout            5.0.1
attrs                    25.3.0
audioread                3.0.1
auto_gptq                0.7.1
av                       14.2.0
certifi                  2025.1.31
cffi                     1.17.1
charset-normalizer       3.4.1
click                    8.1.8
contourpy                1.3.1
cycler                   0.12.1
datasets                 3.4.1
decorator                5.2.1
dill                     0.3.8
docstring_parser         0.16
einops                   0.8.1
exceptiongroup           1.2.2
fastapi                  0.115.12
ffmpy                    0.5.0
filelock                 3.13.1
fire                     0.7.0
fonttools                4.57.0
frozenlist               1.5.0
fsspec                   2024.6.1
gekko                    1.3.0
gradio                   5.21.0
gradio_client            1.7.2
groovy                   0.1.2
h11                      0.14.0
httpcore                 1.0.7
httpx                    0.28.1
huggingface-hub          0.30.1
idna                     3.10
jieba                    0.42.1
Jinja2                   3.1.4
joblib                   1.4.2
kiwisolver               1.4.8
lazy_loader              0.4
librosa                  0.11.0
llamafactory             0.9.3.dev0   /mnt/e/LLaMA-Factory
llvmlite                 0.44.0
markdown-it-py           3.0.0
MarkupSafe               2.1.5
matplotlib               3.10.1
mdurl                    0.1.2
mpmath                   1.3.0
msgpack                  1.1.0
multidict                6.3.2
multiprocess             0.70.16
networkx                 3.3
nltk                     3.9.1
numba                    0.61.0
numpy                    1.26.4
nvidia-cublas-cu12       12.1.3.1
nvidia-cuda-cupti-cu12   12.1.105
nvidia-cuda-nvrtc-cu12   12.1.105
nvidia-cuda-runtime-cu12 12.1.105
nvidia-cudnn-cu12        9.1.0.70
nvidia-cufft-cu12        11.0.2.54
nvidia-curand-cu12       10.3.2.106
nvidia-cusolver-cu12     11.4.5.107
nvidia-cusparse-cu12     12.1.0.106
nvidia-nccl-cu12         2.21.5
nvidia-nvjitlink-cu12    12.1.105
nvidia-nvtx-cu12         12.1.105
optimum                  1.24.0
orjson                   3.10.16
packaging                24.2
pandas                   2.2.3
peft                     0.15.0
pillow                   11.0.0
pip                      25.0
platformdirs             4.3.7
pooch                    1.8.2
propcache                0.3.1
protobuf                 6.30.2
psutil                   7.0.0
pyarrow                  19.0.1
pycparser                2.22
pydantic                 2.10.6
pydantic_core            2.27.2
pydub                    0.25.1
Pygments                 2.19.1
pyparsing                3.2.3
python-dateutil          2.9.0.post0
python-multipart         0.0.20
pytz                     2025.2
PyYAML                   6.0.2
regex                    2024.11.6
requests                 2.32.3
rich                     14.0.0
rouge                    1.0.1
rouge-chinese            1.0.3
ruff                     0.11.4
safehttpx                0.1.6
safetensors              0.5.3
scikit-learn             1.6.1
scipy                    1.15.2
semantic-version         2.10.0
sentencepiece            0.2.0
setuptools               75.8.0
shellingham              1.5.4
shtab                    1.7.1
six                      1.17.0
sniffio                  1.3.1
soundfile                0.13.1
soxr                     0.5.0.post1
sse-starlette            2.2.1
starlette                0.46.1
sympy                    1.13.1
termcolor                3.0.1
threadpoolctl            3.6.0
tiktoken                 0.9.0
tokenizers               0.21.0
tomlkit                  0.13.2
torch                    2.5.1+cu121
torchaudio               2.5.1+cu121
torchvision              0.20.1+cu121
tqdm                     4.67.1
transformers             4.50.0
triton                   3.1.0
trl                      0.9.6
typer                    0.15.2
typing_extensions        4.12.2
tyro                     0.8.14
tzdata                   2025.2
urllib3                  2.3.0
uvicorn                  0.34.0
websockets               15.0.1
wheel                    0.45.1
xxhash                   3.5.0
yarl                     1.18.3
```
