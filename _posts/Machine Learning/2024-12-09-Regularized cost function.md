--- 
title: ML Regularized cost function
author: <weixiong_626> 
date: 2024-12-09 7:00:00 +0200
categories: [Machine Learning] 
math: true 
tags: []
---

## Optimizing Machine Learning Cost Function with Regularization

## 1. Understanding Cost Function and Regularization

In our discussion, we explored a machine learning cost function with regularization:

### Cost Function Formula

$$
J(\vec{w}, b) = \frac{1}{2m} \sum_{i=1}^{m} \left(f_{\vec{w}, b}(\vec{x}^{(i)}) - y^{(i)}\right)^2 + \frac{\lambda}{2m} \sum_{j=1}^{n} w_j^2
$$

- **First Term (Error Term)**: Measures the average squared error between the predicted and actual values.
- **Second Term (Regularization Term)**: Prevents overfitting by penalizing large weight values.

### Key Parameters

- **$m$**: Number of training samples.
- **$n$**: Number of features or parameters in the model.
- **$\lambda$**: Regularization parameter controlling the strength of the penalty.

------

## 2. Selecting $\lambda$ and Optimizing Weights

### 2.1 Finding the Best $\lambda$

- **Small $\lambda$**: Low penalty; model may overfit.
- **Large $\lambda$**: High penalty; model may underfit.
- **Method**: Use cross-validation or grid search to determine the optimal $\lambda$.

------

### 2.2 Updating Weight Vector $\vec{w}$ with Gradient Descent

#### Gradient Computation

$$
\frac{\partial J(\vec{w}, b)}{\partial w_j} = \frac{1}{m} \sum_{i=1}^{m} \left(f_{\vec{w}, b}(x^{(i)}) - y^{(i)}\right) \cdot x_j^{(i)} + \frac{\lambda}{m} w_j
$$

$$
\frac{\partial J(\vec{w}, b)}{\partial b} = \frac{1}{m} \sum_{i=1}^{m} \left(f_{\vec{w}, b}(x^{(i)}) - y^{(i)}\right) 
$$

#### Update Rule

$$
w_j := w_j - \alpha \cdot \frac{\partial J(\vec{w}, b)}{\partial w_j}
$$

$$
b := b - \alpha \cdot \frac{\partial J(\vec{w}, b)}{\partial b}
$$

- $\alpha$: Learning rate controlling step size.

------

## 3. Visualization and Extreme Examples

### Example: Extreme Regularization Effects

We demonstrated with two cases:

1. No Regularization ($\lambda=0$):

   $$
   J(\vec{w}, b) = 2756
   $$

   - Model focuses entirely on minimizing the error term.

2. Strong Regularization ($\lambda=100$):

   $$
   J(\vec{w}, b) = 15256
   $$

   - Regularization dominates, heavily penalizing large weights.

### Observations

- Small $\lambda$: Allows more flexibility but risks overfitting.
- Large $\lambda$: Reduces overfitting but risks underfitting.

------

