---
title: Deployment and Principles of LLaVa
author: <weixiong_626>
date: 2025-4-18 2:30:00 +0200
categories: [LLM, Multi-modal]
math: true
tags: []
---

## Reference 

[Principle and Deployment](https://zhuanlan.zhihu.com/p/696112028)  
[A video concerning the principles of LLaVa](https://www.youtube.com/watch?v=e4r8VhFqZ_4&t=748s&ab_channel=Ph.D.Vlog)  

## Good to know

Project structure and `config.json` settings  

![pc](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/8b4adf5c111abd1c5c6d16f9478830c.png)  
 
![pc](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/b91b96232bf404eefddd7ff7e83786e.png)  

Download the llava framework, download the `weight` and `vision encoder` respectively  

```sh
## Test command
python -m llava.serve.cli   --model-path liuhaotian/llava-v1.5-7b   --image-file "https://llava-vl.github.io/static/images/view.jpg"   --load-4bit               

# safe on < 8 GB VRA
# Using 4060(8G), so using --load-4bit to save VRAM is needed
```

![hello_llava](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20250418124258.png)


## Graphic Interface  

```sh

## Controller
python -m llava.serve.controller --host 0.0.0.0 --port 10000

## Worker
python -m llava.serve.model_worker \
  --host 0.0.0.0 \
  --controller http://localhost:10000 \
  --port 40000 \
  --worker http://localhost:40000 \
  --model-path liuhaotian/llava-v1.5-7b \
  --load-4bit

## Gradio web server
python -m llava.serve.gradio_web_server   --controller http://localhost:10000   --model-list-mode reload
```

## Outcome

![pc](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20250418145933.png)
