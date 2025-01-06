---
title: Difference Between Multiclass and Multilabel Classification
author: <weixiong_626>
date: 2024-12-31 1:00:00 +0200
categories: [Machine Learning]
math: true
tags: []
---


### **Difference Between Multiclass and Multilabel Classification**

**Multiclass Classification** and **Multilabel Classification** are two different types of classification problems. The key difference lies in the number of labels each sample can have and the relationship between the labels. Below is a detailed comparison with examples:

------
![Desktop View](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20241231034817.png)

### **1. Multiclass Classification**

- **Definition**: Each sample can belong to **only one class**, and the classes are mutually exclusive.
- Characteristics:
  - Classes are independent, and a sample can have only one label.
  - The output is a probability distribution (achieved through the softmax function), where the sum of probabilities equals 1.
- Common Scenarios:
  - Image classification: An image is either a dog, a cat, or a bird.
  - Sentiment analysis: A text is positive, negative, or neutral.
- Loss Function:
  - Usually uses the **Cross-Entropy Loss** function.

#### **Example**

| Sample  | Label |
| ------- | ----- |
| Image 1 | Dog   |
| Image 2 | Cat   |
| Image 3 | Bird  |

------

### **2. Multilabel Classification**
![Desktop View](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20241231034936.png){: width="872" height="489" .w-50 .right}

![Desktop View](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20241231035039.png){: width="872" height="489" .w-50 .right}


- **Definition**: Each sample can belong to **multiple classes simultaneously**, and the labels are not mutually exclusive.
- Characteristics:
  - Classes can overlap, and a sample can have multiple labels.
  - The output consists of multiple probabilities (achieved through the sigmoid function), with each class having an independent probability.
  - Labels may or may not be correlated, but they are not mutually exclusive.
- Common Scenarios:
  - Image multi-label classification: An image can contain both "dog" and "cat".
  - Text multi-label classification: A document can belong to both "science" and "education".
- Loss Function:
  - Usually uses the **Binary Cross-Entropy Loss** function.

#### **Example**

| Sample  | Labels         |
| ------- | -------------- |
| Image 1 | Dog, Cat       |
| Image 2 | Cat, Bird      |
| Image 3 | Dog, Bird, Cat |

------

### **Comparison Summary**

| Feature                         | Multiclass Classification                 | Multilabel Classification           |
| ------------------------------- | ----------------------------------------- | ----------------------------------- |
| **Labels per sample**           | Only one class                            | Can belong to multiple classes      |
| **Relationship between labels** | Mutually exclusive                        | Independent, multiple possible      |
| **Output activation function**  | Softmax                                   | Sigmoid                             |
| **Loss function**               | Cross-Entropy Loss                        | Binary Cross-Entropy Loss           |
| **Output format**               | Single probability distribution (sum = 1) | Independent probabilities per class |
