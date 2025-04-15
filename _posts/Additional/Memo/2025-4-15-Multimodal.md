---
title: Various Model Memo
author: <weixiong_626>
date: 2025-4-15 1:30:00 +0200
categories: [LLM, Multi-modal]
math: true
tags: []
---

## Vit
- [Vit Principle](https://zhuanlan.zhihu.com/p/445122996)
- [Vit Code](https://zhuanlan.zhihu.com/p/427388113)
- [Vit Position Encoding - Video](https://www.bilibili.com/video/BV1AD421g7hs/?share_source=copy_web&vd_source=d9a5c0f38bcf8209f796b4a36b2fd3b8)

## Clip

![code](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20250415030142.png)  

![model](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20250415030119.png)  
  
![pe](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20250415030021.png)  

### 🧠 场景：CLIP处理一句话

比如我们有这句话：
 **“a cute cat”**（一只可爱的猫）

CLIP 会这样处理这句话：

#### 1. **分词 + 编码：**

这句话会变成一个词序列（token）：

```
css


CopyEdit
["<start>", "a", "cute", "cat", "<end>"]
```

然后每个词会被转换成向量（embedding），比如变成这样（假设每个向量是3维，为了简单说明）：

```
cssCopyEdit<start> → [0.1, 0.2, 0.3]  
a       → [0.2, 0.1, 0.4]  
cute    → [0.5, 0.6, 0.7]  
cat     → [0.9, 0.8, 0.1]  
<end>   → [0.3, 0.2, 0.9]
```

------

#### 2. **送入 Transformer 处理：**

Transformer 会逐层处理这些向量，考虑上下文关系，比如“a cute cat”组合在一起表达什么。

每一层都会输出新的向量，最终输出可能是这样的（假设处理完后）：

```
cssCopyEdit<start> → [0.7, 0.6, 0.5]  
a       → [0.5, 0.4, 0.3]  
cute    → [0.6, 0.7, 0.6]  
cat     → [0.9, 0.8, 0.7]  
<end>   → ✅ [1.0, 0.9, 0.8] ✅ ← 我们要用它！
```

------

#### 3. **用“最后一个 token”的输出代表整句话！**

在 CLIP 里，不会把所有词的输出拼起来。而是只用最后一个 token（通常是 `"<end>"`）的输出：
 👉 `[1.0, 0.9, 0.8]`

这个向量就被当作“整句话 a cute cat 的语义表示”。

------

#### 4. **拿这个向量和图像去比对：**

CLIP 对图片也做类似处理，得到一个图像向量，比如 `[0.9, 0.8, 0.7]`。

然后就用这两个向量计算“相似度”（通常是余弦相似度），来判断这句话和那张图片是不是匹配。

## MOCO

- 与CLip相似，Clip是语言与图像对比，MOCO是对象与图像对比
- 无监督 -> 可以通过各种方法制作大量的对比示例
- 问题：
  - Batch size 太小，难以训练(看不到上一次的训练结果，可能不相似的两张图也会离得很近)  
    - 因此没有固定的label
    - ![cmp](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20250415032038.png)
  - 不同batch，模型不同(encoder一直在更新自己)，生成特征不同，负样本没有意义
- EMA
  - 受自身的影响大，受外界的影响小
  - ![EMA](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20250415032326.png)
- 怎么做：
  - ![pic](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20250415032438.png)

### 🌟MoCo 的核心思想

MoCo 是对比学习的一种实现，其目标是：

- **拉近**相同图像的不同视图（称为 *positive pair*）的表示距离
- **拉远**不同图像的表示（称为 *negative pair*）

为了实现这个目标，它构建了一个**动态更新的负样本队列（memory bank）**，以及**两个编码器**：

------

### 🔧 关键机制详解

#### ✅ 1. 两个编码器（Query Encoder 和 Key Encoder）

MoCo 的核心结构之一是用两个编码器：

🧱 **Query Encoder（查询编码器）**  

正常训练的网络，接收一张图像的某个变换版本（比如裁剪、颜色扰动），输出它的表示，记作 `q`。

🧱 **Key Encoder（关键编码器）**  

它接受同一张图像的**另一种变换版本**，输出表示 `k`。但它**不直接训练更新参数**，而是从 Query Encoder 那里**动量更新参数**：

```
pythonCopyEdit# 每次迭代：
key_encoder = momentum * key_encoder + (1 - momentum) * query_encoder
```

#### ❓为什么用动量更新？

- 这样可以保持 `key_encoder` 的参数**平滑变化**，不会像 `query_encoder` 那样波动大。
- 所以它输出的 `k` 更**稳定、一致性更好**，有利于对比学习找到正确的匹配关系。
- 相当于一个“慢热”的教师网络。

------

#### ✅ 2. 队列机制（字典队列）

🎒**做法**：  

MoCo 会维护一个**固定长度的队列（memory bank）**，保存历史的 `key` 编码。

- 当前 batch 中，每个样本都有一个 `(q, k)` 对
- 把 `k` 放入队列
- 弹出最旧的 key，保持队列长度恒定（FIFO）

❓**作用是什么**？  

用来当作**负样本集合**（negative keys）！

- 每次我们只训练一个 batch，但可以从这个队列中抽出很多历史样本做负样本
- 不像 SimCLR 那样需要 batch size 超大才能凑够负样本

这样：

- 计算效率高
- 表达能力更强
- 学习更稳定

**具体而言**

1. 负样本数量太少（batch size 限制）  
- 比如 batch=256，那最多有 255 个负样本。

- 想提高效果只能加大 batch → 非常耗显存。

2. 负样本更新太快，不稳定
- 每次 forward 都用的是新的 batch，表示波动非常大，学习不稳定。

------

#### ✅ 3. 对比损失（InfoNCE）

用的是一个典型的对比学习损失函数：

> 让 query `q` 更接近它的正确 key `k⁺`，远离其他 key（来自队列的负样本 `k⁻`）

数学形式是一个 softmax over cosine similarity：

Loss=−log(exp(sim(q,k+)/τ)/(exp(sim(q,k+)/τ)+Σexp(sim(q,k−)/τ)))

其中：

- `sim` 表示向量间的余弦相似度
- `τ` 是温度系数（temperature），调节 sharpness

最终就是想让：

- `q` 和自己的 `k⁺` 相似度最大
- 和其它负样本 `k⁻` 相似度最小

------

### 🧠 为什么叫 Momentum Contrast？

- “Momentum” 是指 key encoder 的参数更新方式
- “Contrast” 是对比学习的核心思想
- 整体就是：**用动量更新的 encoder，构建高效的对比学习机制**

------

### ✅ MoCo 的优点

- **不需要大量标签**
- **支持小 batch size**
- **key encoder 稳定，训练容易收敛**
- 实践中效果也很好，在 ImageNet 上无监督训练，再用少量监督微调也能达到较好性能

------

## ALBEF：对齐优先而后融合

 