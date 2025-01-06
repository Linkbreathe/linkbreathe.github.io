---
title: ML Stage_1 Conclusion
author: <weixiong_626>
date: 2024-12-28 7:00:00 +0200
categories: [Machine Learning]
math: true
tags: []
---

# Linear and Logistic Regression: Concepts and Regularization

---

## Overview

This document provides a detailed overview of:
1. **Linear Regression Models**  
2. **Multiple Linear Regression Models**  
3. **Logistic Regression Models**  
4. **Regularization** in both Linear and Logistic Regression (to address overfitting)  
5. **Additional Approaches** to reduce overfitting  

All formulas remain consistent with the original material, and supplementary knowledge on reducing overfitting is included.

---

## 1. Linear Regression Models

### 1.1 Definition

- **Linear Regression** is a supervised learning method used for predicting a numeric (continuous) output $y$ from input variable(s) $x$.  
- In its simplest form (**Simple Linear Regression**), there is one independent variable $x$ and one dependent variable $y$.  

### 1.2 Model Representation

$$
\begin{equation}
y \approx \beta_0 + \beta_1 x_1
\label{eq:eq1}
\end{equation}
$$

- $\beta_0$ is the **intercept** (the value of $y$ when $x_1 = 0$).  
- $\beta_1$ is the **slope** (coefficient) that indicates how changes in $x_1$ affect $y$.

### 1.3 Objective Function (Cost Function)

The **Mean Squared Error (MSE)** cost function is often used:

$$
\begin{equation}
\text{MSE}(\beta_0, \beta_1) = \frac{1}{m} \sum_{i=1}^m \bigl(y^{(i)} - (\beta_0 + \beta_1 x_1^{(i)})\bigr)^2
\label{eq:eq2}
\end{equation}
$$

- $m$ = number of training examples.  
- $y^{(i)}$ = actual value for the $i$-th training example.  
- $\beta_0 + \beta_1 x_1^{(i)}$ = predicted value for the $i$-th training example.

### 1.4 Gradient Descent Update

To minimize MSE, **Gradient Descent** is commonly used. For each parameter:

$$
\begin{equation}
\beta_j := \beta_j - \alpha \,\frac{\partial}{\partial \beta_j}\,\text{MSE}(\beta_0, \beta_1)
\label{eq:eq3}
\end{equation}
$$

where $\alpha$ is the learning rate.

---

## 2. Multiple Linear Regression Models

### 2.1 Definition

- **Multiple Linear Regression** extends the idea of simple linear regression to multiple features (predictors) $x_1, x_2, \dots, x_n$.  

### 2.2 Model Representation

$$
\begin{equation}
y \approx \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \dots + \beta_n x_n
\label{eq:eq4}
\end{equation}
$$

Sometimes written as:

$$
\begin{equation}
y \approx \mathbf{\beta}^T \mathbf{x} = \beta_0 + \sum_{j=1}^{n}\beta_j x_j
\label{eq:eq5}
\end{equation}
$$

where:
- $\beta_0$ is the intercept.  
- $\beta_j$ are the coefficients for feature $x_j$.  
- $\mathbf{x}$ is the feature vector $[1, x_1, x_2, \dots, x_n]^T$. (Often we prepend `1` for the intercept term.)

### 2.3 Cost Function

The cost function remains the **Mean Squared Error (MSE)**:

$$
\begin{equation}
\text{MSE}(\beta_0, \beta_1, \dots, \beta_n) 
= \frac{1}{m} \sum_{i=1}^m \Big( y^{(i)} - (\beta_0 + \beta_1 x_1^{(i)} + \dots + \beta_n x_n^{(i)}) \Big)^2.
\label{eq:eq6}
\end{equation}
$$

### 2.4 Overfitting in Multiple Linear Regression

- As the number of features $n$ grows, the model might fit the training data **too well**, capturing noise as well as the signal. This is **overfitting**.  
- **Symptoms** of overfitting: High performance on training data, poor performance on validation/test data.  

---

## 3. Logistic Regression Models

### 3.1 Definition

- **Logistic Regression** is used for **binary classification** (e.g., predicting whether an event is *Yes/No*, *0/1*, *True/False*).  
- Instead of predicting a numeric value, it predicts the **probability** that the output belongs to a certain class (usually denoted as class “1”).

### 3.2 Model Representation

Unlike linear regression, logistic regression uses the **sigmoid (logistic) function**:

$$
\begin{equation}
h_\theta(\mathbf{x}) = \sigma(\theta^T \mathbf{x}) = \frac{1}{1 + e^{-\theta^T \mathbf{x}}}
\label{eq:eq7}
\end{equation}
$$

- $\theta^T \mathbf{x} = \theta_0 + \theta_1 x_1 + \dots + \theta_n x_n$.  
- $\sigma(z) = \frac{1}{1 + e^{-z}}$.  
- Output $h_\theta(\mathbf{x})$ is between 0 and 1, interpreted as the probability that $y=1$.

### 3.3 Cost Function (Logistic/Cross-Entropy Loss)

To measure how well the model performs in classification, we use the **Binary Cross-Entropy** or **Log Loss**:

$$
\begin{equation}
J(\theta) = -\frac{1}{m}\sum_{i=1}^{m} \Bigl[y^{(i)}\log h_\theta(\mathbf{x}^{(i)}) + (1-y^{(i)})\log\bigl(1-h_\theta(\mathbf{x}^{(i)})\bigr)\Bigr]
\label{eq:eq8}
\end{equation}
$$

### 3.4 Decision Boundary

- The predicted class is often chosen as:

$$
\begin{equation}
\hat{y} = \begin{cases}
1 & \text{if }h_\theta(\mathbf{x}) \ge 0.5,\\
0 & \text{otherwise}.
\end{cases}
\label{eq:eq9}
\end{equation}
$$

---

## 4. Regularization to Address Overfitting

### 4.1 What is Overfitting?

- **Overfitting** occurs when a model fits the training data too closely, capturing noise and random fluctuations rather than the underlying data trend.  
- Leads to good training performance but poor generalization to new (unseen) data.

### 4.2 Regularization Approach

To **prevent overfitting**, **regularization** adds a penalty to the cost function that discourages overly large coefficient values.

---

## 5. Regularized Linear Regression

### 5.1 Ridge Regression (L2 Regularization)

- **Ridge Regression** adds the L2 penalty term to the MSE cost function:
  
  $$
  \begin{equation}
  \text{Cost}(\boldsymbol{\beta}) = \frac{1}{m} \sum_{i=1}^m \Big( y^{(i)} - \beta_0 - \sum_{j=1}^n \beta_j x_j^{(i)} \Big)^2 
  + \lambda \sum_{j=1}^n \beta_j^2.
  \label{eq:eq10}
  \end{equation}
  $$

- **Key Points**:
  - $\lambda$ controls the amount of regularization (penalty).  
  - When $\lambda$ is large, $\beta_j$ shrink more towards 0.  
  - L2 penalty specifically penalizes the **square** of the coefficients.

### 5.2 Lasso Regression (L1 Regularization)

- **Lasso Regression** adds the L1 penalty:
  
  $$
  \begin{equation}
  \text{Cost}(\boldsymbol{\beta}) = \frac{1}{m} \sum_{i=1}^m \Big( y^{(i)} - \beta_0 - \sum_{j=1}^n \beta_j x_j^{(i)} \Big)^2 
  + \lambda \sum_{j=1}^n |\beta_j|.
  \label{eq:eq11}
  \end{equation}
  $$

- **Key Points**:
  - L1 penalty can drive some $\beta_j$ **exactly** to zero, leading to **sparse solutions** (feature selection).
  - $\lambda$ again balances between fitting the data well and shrinking coefficients.

### 5.3 Effect of Regularization on Overfitting

- **Prevents large coefficient values** that can cause excessively complex models.  
- **Improves generalization** by keeping the learned model simpler, thereby reducing variance.

---

## 6. Regularized Logistic Regression

### 6.1 L2-Regularized Logistic Regression (Ridge)

For **logistic regression**, the cost function becomes:

$$
\begin{equation}
J(\theta) = -\frac{1}{m} \sum_{i=1}^{m} \Big[ y^{(i)} \log \big(h_\theta(\mathbf{x}^{(i)})\big) 
+ (1 - y^{(i)}) \log \big(1 - h_\theta(\mathbf{x}^{(i)})\big) \Big]
+ \frac{\lambda}{2m} \sum_{j=1}^{n} \theta_j^2.
\label{eq:eq12}
\end{equation}
$$

- Note that we usually exclude $\theta_0$ (the intercept) from the regularization sum.  
- The L2 penalty here also penalizes large values of $\theta_j$.

### 6.2 L1-Regularized Logistic Regression (Lasso)

Similarly for L1-regularized logistic regression:

$$
\begin{equation}
J(\theta) = -\frac{1}{m} \sum_{i=1}^{m} \Big[ y^{(i)} \log \big(h_\theta(\mathbf{x}^{(i)})\big) 
+ (1 - y^{(i)}) \log \big(1 - h_\theta(\mathbf{x}^{(i)})\big) \Big]
+ \lambda \sum_{j=1}^{n} |\theta_j|.
\label{eq:eq13}
\end{equation}
$$

- L1 penalizes the absolute value of $\theta_j$, promoting sparsity.

### 6.3 Impact on Overfitting

- As with linear regression, adding regularization to logistic regression **reduces variance** and **improves generalization**.  
- Helps to **avoid overly complex decision boundaries** that overfit the training set.

---

## 7. Additional Approaches to Reduce Overfitting

Regularization is one powerful method to reduce overfitting. However, there are other approaches that can further improve a model’s generalization:

1. **Cross-Validation**  
   - Use $k$-fold cross-validation to better estimate how the model will perform on new data.  
   - Helps tune hyperparameters (like $\lambda$) more robustly.

2. **Feature Selection & Dimensionality Reduction**  
   - Remove irrelevant or redundant features to simplify the model.  
   - Techniques like **Principal Component Analysis (PCA)** can reduce dimensionality, thus lowering the risk of overfitting.

3. **Data Augmentation / More Data**  
   - In some domains (e.g., images, text), you can generate or collect more data or artificially “augment” existing data.  
   - More examples help the model generalize better.

4. **Early Stopping**  
   - In iterative optimization (like gradient descent), monitor validation error and stop training when performance on validation data deteriorates.  
   - Prevents the model from fitting noise in later epochs.

5. **Simplify Model Architecture**  
   - Use simpler models or fewer parameters. Overly complex models with too many parameters are more prone to overfitting.

6. **Regularization** (Recap)  
   - **L1** (Lasso) encourages sparsity.  
   - **L2** (Ridge) spreads penalty among many coefficients.  
   - **Elastic Net** is a combination of L1 and L2, balancing both.

---

## 8. Summary of Key Points

- **Linear Regression (single & multiple)**: Predicts numeric outputs via a linear equation.  
- **Logistic Regression**: Predicts probabilities for binary classification via the logistic function.  
- **Overfitting** arises from excessive complexity or too many features, fitting noise rather than true signal.  
- **Regularization** (L1/L2) penalizes large parameters, improving generalization by **reducing variance** and preventing overfitting.  
- **Additional methods** like cross-validation, feature selection, and early stopping further help reduce overfitting.

---

## 9. Illustrative Formulas

**Linear Regression (Multiple Features)**:
$$
\begin{equation}
y \approx \beta_0 + \sum_{j=1}^{n} \beta_j x_j
\label{eq:eq14}
\end{equation}
$$

**Logistic Regression**:
$$
\begin{equation}
p = \sigma(\theta^T x) = \frac{1}{1 + e^{-\theta^T x}}
\label{eq:eq15}
\end{equation}
$$

**Regularized Cost (e.g., L2)**:
$$
\begin{equation}
J(\theta) = 
\text{Loss}(\theta) + 
\lambda \sum |\theta_j|^p, 
\quad p=2 \ (\text{Ridge}), \ p=1 \ (\text{Lasso}).
\label{eq:eq16}
\end{equation}
$$

(Where $\text{Loss}(\theta)$ is MSE for linear regression or cross-entropy for logistic regression.)

---

## Final Thoughts

- **Regularization** is a critical strategy to combat overfitting, but it’s not the only one.  
- Combine it with **cross-validation, feature selection, dimensionality reduction,** and (if applicable) **early stopping** to obtain the best model generalization.  
- Choosing the best **regularization hyperparameter** ($\lambda$) is typically done via cross-validation, balancing model bias and variance.

**With these concepts, practitioners can confidently apply linear and logistic regression models while mitigating overfitting through appropriate regularization and other complementary approaches.**
