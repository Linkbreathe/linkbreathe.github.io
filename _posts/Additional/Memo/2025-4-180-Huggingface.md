---
title: Huggingface Cli
author: <weixiong_626>
date: 2025-4-16 1:30:00 +0200
categories: [LLM, Memo]
math: true
tags: []
---

## Install
```python

pip install -U huggingface_hub #  Python>=3.8
```

## Login

```sh
huggingface-cli login ## get the token from website
```

## Download Models
```python
huggingface-cli download --resume-download {model name from huggingface} --local-dir {current_dictory} # Download in the current directory

```


 




