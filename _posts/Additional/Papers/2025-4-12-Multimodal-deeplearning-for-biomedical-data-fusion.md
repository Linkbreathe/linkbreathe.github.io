--- 
title: Multimodal biomedical AI
author: <weixiong_626> 
date: 2025-4-12 4:30:00 +0200
categories: [LLM, Bio-Engineering] 
math: true 
tags: []
---
## Notes: Multimodal Deep Learning for Biomedical Data Fusion: A Review

**Source:** Stahlschmidt, S. R., Ulfenborg, B., & Synnergren, J. (2022). Multimodal deep learning for biomedical data fusion: a review. *Briefings in Bioinformatics*, *23*(2), bbab569.

**Overall Goal:** To review the state-of-the-art in Deep Learning (DL) based strategies for fusing multimodal biomedical data, propose a detailed taxonomy for these strategies, analyze their pros and cons, identify trends, and suggest future research directions.

---

## Paper Link
[Paper Link](https://drive.google.com/file/d/1lGN9wg-Pz8n92loxRxGrVa5EZyYnDqZ8/view?usp=drive_link)


## 1. Background and Motivation

*   **Complexity of Biology:** Biological systems (cells, organisms) are inherently complex, involving interactions across multiple levels (genomics, transcriptomics, proteomics, imaging, clinical observations, etc.).
*   **Multimodal Data:** High-throughput technologies generate vast amounts of diverse data types (modalities) capturing different views of these complex systems.
*   **Need for Fusion:** Integrating these modalities (data fusion) promises a more holistic understanding and improved predictive power for complex diseases compared to analyzing single modalities alone.
*   **Why Deep Learning?** DL methods are well-suited due to their ability to:
    *   Model complex, non-linear relationships *within* and *between* modalities.
    *   Learn hierarchical representations of data, extracting features at different levels of abstraction.
    *   Handle high-dimensional and heterogeneous data types.

---

## 2. Advantages of Data Fusion (General)

Data fusion leverages different aspects of multimodal information:

*   **Complementary:** Modalities provide different, non-overlapping pieces of information (e.g., genomics for driver genes, WSI for morphology).
*   **Redundant:** Modalities provide overlapping information, increasing robustness to noise or missing values (e.g., mRNA and protein abundance for the same gene).
*   **Cooperative:** Combining modalities increases the overall information complexity, potentially revealing insights not present in any single modality (e.g., miRNA and mRNA interactions).

---

## 3. Proposed Taxonomy of DL Fusion Strategies

The paper categorizes DL fusion strategies based on *when* the fusion occurs relative to the input data and feature learning process (See Figure 2):

*   **Early Fusion:** Fusion at the input level.
*   **Intermediate Fusion:** Fusion at the feature representation level within the network.
*   **Late Fusion:** Fusion at the decision/prediction level.

---

## 4. Detailed Fusion Strategies

### 4.1. Early Fusion

*   **Core Idea:** Concatenate raw or minimally processed input data from different modalities *before* feeding it into a single DL model. The model treats the combined input as unimodal.
*   **Subcategories:**
    *   **Direct Modeling:** Apply standard DL architectures (FCNN, CNN, RNN) directly to the concatenated input vector/matrix. Choice depends on whether spatial/sequential structure exists in the combined input [17-24].
    *   **Autoencoder (AE)-based:** Use an AE (Regular, Denoising, Stacked, Variational - VAE) on the concatenated input to learn a joint, lower-dimensional latent representation (`z`). This `z` is then used for downstream tasks (e.g., clustering, classification) [25-42].
*   **Pros:**
    *   Conceptually simple to implement.
    *   Can capture low-level correlations between features across modalities.
    *   AEs are effective for dimensionality reduction, especially for high-dimensional omics data.
*   **Cons:**
    *   Can struggle with highly heterogeneous data types (different scales, distributions).
    *   Sensitive to different sampling rates or missing values across modalities.
    *   May fail to capture complex interactions that only emerge at higher levels of abstraction.
    *   AE-based learning is initially task-unspecific (focuses on reconstruction).
*   **Common Use:** Frequently applied to multi-omics data for tasks like cancer subtyping and survival prediction.

### 4.2. Intermediate Fusion

*   **Core Idea:** Process each modality through separate initial network branches to learn modality-specific features, then fuse these learned representations *within* the network architecture.
*   **Key Advantage:** Offers flexibility to handle heterogeneity and model complex interactions at appropriate feature levels.
*   **Subcategories (Branch Design):**
    *   **Homogeneous:** All branches use the *same type* of architecture (e.g., all FCNNs, all CNNs). Suitable for structurally similar modalities (e.g., different omics types) [43-63].
    *   **Heterogeneous:** Branches use *different* architectures tailored to each modality (e.g., CNN for images, FCNN for clinical data). Ideal for diverse biomedical data [64-81].
*   **Subcategories (Representation Goal / Fusion Strategy):**
    *   **Marginal:** Learned features from branches are concatenated and used *directly* for prediction (or after simple selection). Focuses on combining strong unimodal features. Limited learning of post-fusion interactions [43-49, 64-68].
    *   **Joint:** Learned features are fused (e.g., concatenated), then processed through *additional shared layers* before prediction. Explicitly learns cross-modal interactions and dependencies in a shared latent space. Appears to be the preferred approach in recent literature [21, 28, 38, 41, 50-63, 69-81].
*   **Fusion Mechanisms:** Concatenation (most common), element-wise operations (sum, product, max), attention mechanisms, Kronecker product, dedicated multimodal architectures (Multimodal AEs, VAEs, DBNs).
*   **Pros:**
    *   Balances modality-specific feature learning and interaction modeling.
    *   Highly flexible in architecture design (especially heterogeneous).
    *   Effectively handles diverse data types.
    *   Allows fusion at potentially optimal levels of abstraction.
    *   Can incorporate modality-specific interpretability methods [73, 79, 80].
    *   Can be designed to handle missing modalities [70] and dimensionality imbalance [66, 76, 77].
*   **Cons:**
    *   More complex to design and implement than early fusion.
    *   Requires careful choices about branch architecture, fusion point, and mechanism.
    *   Potentially higher risk of overfitting due to complexity.

### 4.3. Late Fusion

*   **Core Idea:** Train separate models independently for each modality, then combine their final outputs (predictions/decisions).
*   **Mechanism:** Each sub-model learns `p(y|xi)`. Predictions are aggregated.
*   **Subcategories (Aggregation Method):**
    *   **Averaging:** Simple averaging (equal weights) or weighted averaging (based on confidence/validation performance) of sub-model predictions [82-87].
    *   **Meta-learning:** Use the predictions from sub-models as input features to a second-level "meta-learner" model (e.g., FCNN, SAE) that learns the optimal combination rule [83, 88].
*   **Pros:**
    *   Excellent for handling highly heterogeneous data and combining different model types (DL and non-DL).
    *   Allows independent optimization of each unimodal model.
    *   Conceptually straightforward for combining existing models.
    *   Robust to dimensionality imbalance.
    *   Sub-model errors might be uncorrelated, leading to ensemble benefits.
*   **Cons:**
    *   **Cannot learn feature-level interactions between modalities** (major limitation).
    *   Potential loss of information by reducing modalities to predictions before fusion.
    *   Performance heavily depends on the quality of individual sub-models.
*   **Common Use:** Combining predictions from diverse sources where feature-level interaction is less critical or hard to model.

---

## 5. Discussion & Synthesis

*   Multimodal DL consistently shows advantages over unimodal and shallow methods.
*   Intermediate fusion, especially learning **joint representations**, is powerful for capturing biological complexity but requires careful design.
*   Early fusion is simpler but less flexible. Late fusion handles heterogeneity well but misses feature interactions.
*   The choice of strategy involves trade-offs; ease of use sometimes influences choice alongside performance.
*   Interpretability and handling missing data/imbalance are active areas within intermediate fusion.

---

## 6. Challenges & Limitations (of the Field)

*   **General DL issues:** Data scarcity (especially labeled multimodal data), quality, interpretability.
*   **Multimodal specifics:** Handling missing *entire* modalities, high dimensionality vs. small samples (overfitting), lack of standardized benchmarks for comparing fusion strategies.

---

## 7. Future Research Directions

*   **Gradual Fusion:**
    *   **Concept:** Sequentially fusing modalities based on similarity or, more novelly, *prior biological knowledge* (e.g., pathway information).
    *   **Status:** Theoretically appealing but not sufficiently explored in the biomedical literature reviewed.
*   **Automated Architecture Search (NAS):**
    *   **Concept:** Automatically discovering optimal fusion strategies and network designs.
    *   **Status:** High potential but limited application so far.
*   **Transfer Learning (TL):**
    *   **Concept:** Systematically leveraging large *unimodal* datasets to pre-train components of multimodal models.
    *   **Status:** Highly promising for mitigating small multimodal sample sizes.

---

## 8. Conclusion & Significance

*   Multimodal DL provides essential tools for building holistic models of complex biological systems from diverse data sources.
*   The proposed taxonomy offers a framework for understanding and choosing fusion strategies.
*   While challenges exist, the field is advancing rapidly, with significant potential to improve biomedical understanding, diagnosis, and prognosis.
*   Further research, particularly in gradual fusion, NAS, and TL, is crucial.
*   Experimental validation remains key for specific applications.

---
