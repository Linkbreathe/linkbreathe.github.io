--- 
title: DAVI Visual Encoding - redo
author: <weixiong_626> 
date: 2024-12-13 21:30:00 +0200
categories: [Data Visualization,Redo] 
math: true 
tags: []
---
## Lecture Notes on Data Visualization and HCI

## Overview

This lecture delves into the foundational aspects of data visualization: the visualization pipeline, visual encoding, marks and channels, color usage, and labeling. It explains key terms like expressiveness, effectiveness, and appropriateness in visualization design, discusses perceptual principles (e.g., pre-attentive cues, Gestalt principles), and introduces various approaches to color mapping. The lecture also touched upon 2D vs. 3D visualization issues, labeling algorithms, and even rendering styles. Additionally, it included a brief Menti quiz at the beginning, reviewing concepts from the previous session.

---

## The Visualization Pipeline

The standard visualization pipeline:
1. **Raw Data**  
2. **Preprocessing/Analysis** (Data cleaning, preparation)
3. **Filtering** (Focus on data subsets of interest)
4. **Mapping** (Transform prepared data into geometric objects)
5. **Rendering** (Transform geometric objects into images)
6. **View/Image**
7. **Perception and Interaction** (User perceives and may interact, feeding back into earlier stages)

**Key Points:**
- **Data Visualization** can mean both the final product (chart) and the process that leads to that product.
- Steps like *loading* are more technical and not considered part of the conceptual pipeline. Official pipeline steps: **Preprocessing**, **Filtering**, **Mapping**, **Rendering**.

**Example from quiz:**  
- Term “data visualization” is ambivalent: it can mean the process or the product (correct quiz answer: product and process).  
- The visualization pipeline does not include "loading" as a formal step (correct quiz answer: loading is not a step).

---

## Perin’s Design Space

The design space defined by *declarative vs. explorative* and *conceptual vs. data-driven*:
- **Declarative:** Showing final results.
- **Explorative:** Finding out new insights.
- **Conceptual:** Idea-based, not necessarily data-based.
- **Data-driven:** Grounded in actual data.

We mostly deal with **data-driven** and often **explorative** tasks in this course.

---

## Marks & Channels

- **Marks:** Visual objects representing data (points, lines, areas). Zero-dimensional marks = points, one-dimensional = lines, two-dimensional = areas.
- **Channels:** Properties of marks (position, color, shape, size, angle, etc.) that encode data attributes.

The idea comes from cartography and has been adapted for data visualization.

**Important Concepts:**
- **Expressiveness:** Show only the data and all the data intended. E.g., categorical data should be encoded with channels that only allow matching, not ordering or magnitude reading.
- **Effectiveness:** Choose channels based on human perceptual strengths. Some channels are easier to read and compare (e.g., position is very strong, length is stronger than angle, color hue vs. shape, etc.).
- **Appropriateness (Efficiency):** Balances the effort to create a visualization with the benefits gained. Don’t over-engineer a visualization that’s not worth it.

**McKinley’s Ranking of Channels:**  
Position is the strongest encoding channel for all data types. For quantitative data, length and position are stronger channels than angle or area. For categorical data, color hue and shape can be used, but hue is often more effective than shape.

**Example:**  
- Pie charts use angle/area. Bar charts use length. It’s easier to compare values with length (bars) than angle (pie slices). This explains why pie charts are often discouraged.

---

## Preattentive Cues & Gestalt Principles

**Preattentive Cues:**  
Certain visual properties (position, color intensity, size) are processed quickly before conscious attention. Position and brightness differences are very strong cues.

**Gestalt Principles:**  
Help with grouping:
- **Proximity:** Items close together are seen as a group.
- **Similarity:** Similar shapes/colors group items.
- **Enclosure:** Drawing a boundary around items groups them.
- **Connection:** Connect items with lines or shapes.

**Example of Gestalt usage:** Clustering scatterplots using color, shape, and enclosure simultaneously to ensure clear group boundaries.

---

## Dimensionality

- **2D vs. 3D:**
  - 3D often introduces occlusion, perspective distortion, no depth cues, difficulty in selection, and “lost in space” issues.
  - In general, avoid 3D unless the data is inherently 3D (like volumetric medical data).
  - **2.5D solution:** For complex scenarios, tilt a 2D map slightly and stack data over time or use billboarding. This reduces the complexity of full 3D.

**Example:** A 2D map of daily commutes can be “tilted” so each day’s data is a line going upwards, creating a 2.5D view that is still manageable.

---

## Color Basics

- Color = **Hue (H)**, **Saturation (S)**, **Lightness (L)**
- **Hue:** The base color (red, green, blue, etc.)
- **Saturation:** Intensity of the color (mixing with gray).
- **Lightness:** Brightness level (mixing with white or black).

**Luminance (Perceived Brightness):**  
Different colors have different perceived brightness. Yellow appears brighter than blue even at the same saturation level.

High contrast = good accessibility. Minimum recommended contrast ratio: 3:1.

**Tools:**  
- Use formulas or tools to ensure good luminance contrast.
- Luminance differs from mere desaturation.

---

## Perceptually Equidistant Color Scales

- Avoid “rainbow” color scales that distort data perception due to non-uniform luminance and hue.
- **Good color scales** have a monotonic luminance profile, are colorblind-safe, and are perceptually uniform.
- **Color Brewer (colorbrewer2.org)** provides well-tested color schemes (sequential, diverging, qualitative).

**Diverging Scales:**  
Have a neutral midpoint. Useful when showing values above/below a threshold (e.g., positive vs. negative temperatures).

**Single-Hue vs. Multi-Hue Scales:**  
- Single-hue: Good for continuous, ordinal data where subtle differences matter less.
- Multi-hue: Better for tasks that require reading precise values (greater color resolution).

---

## Histogram Equalization for Skewed Data

If data is skewed (e.g., one big outlier), most of the color scale gets “used up” by that outlier.  
**Solution:** Histogram equalization by percentiles.  
This ensures each data range segment gets its fair share of the color scale, improving discernibility.

---

## Bivariate and Tri-variate Color Scales

- **Bivariate Scales:** Encode two attributes in one color. Usually by blending two scales (one horizontal, one vertical).
  - Helpful in tasks like comparing obesity and inactivity across regions.
  - Segmenting reduces ambiguity but too many subdivisions make reading complex.
- **Tri-variate Scales:** Generally not recommended. Too complex to read.

---

## Labeling

- **Direct labeling > Legends:** Whenever possible, place labels near data items.
- Types of labels:
  - Plain labels: Simple text next to marks.
  - Circular labels: Wrap text around a shape (less common, harder to read).
  - Eccentric labels: Place label outside the cluttered area, connect with a line.
  
**Labeling Algorithms:**  
- **Particle-based labeling** tries different positions (4-position, then 8-position, then slider model) and uses particles to detect conflicts.
- If no direct placement is possible, use eccentric labeling with leader lines.

---

## Rendering Styles

- Beyond standard crisp rendering, one can use “sketchy” or painterly rendering styles.
- Sketchy styles can communicate that the visualization is a draft or conceptual, managing stakeholder expectations.
- Artistic styles have been used for maps, flow visualizations, etc.

**Example:** Rough.js for sketchy rendering in a web environment.

---

## Additional Topics on Color

- **HSL vs. HCL:**  
  - HSL is intuitive but not perceptually uniform.
  - HCL (Hue, Chroma, Luminance) aligns more with human perception.  
- **Semantic Color Coding:**  
  - If data items have inherent colors (like fruits), matching their “natural” color improves recognition speed and reduces errors.
- **Cultural Color Meanings:**  
  - Color interpretations vary by culture. Red can mean celebration (in parts of Asia) or danger/death (in parts of Africa).
  - Abstract concepts (hope, fear, action) are not universally associated with any particular hue.

**Suggested Resources:**
- **Books:**  
  - Tamara Munzner’s *Visualization Analysis & Design*  
  - Colin Ware’s *Information Visualization: Perception for Design*
  - Andy Kirk’s *Data Visualization* (for chart type inspiration)
- **Tools:**  
  - Chroma.js  
  - Color Brewer  
  - Paul Tol’s color schemes
- **Podcasts:**  
  - Data Stories (Episode #7 Greg Wyse on color, #119 on semantic color coding)

---

## Summary

To create effective data visualizations:
- **Follow the pipeline:** Understand steps from raw data to rendered image.
- **Use proper channels:** Position and length are best for quantitative comparisons; hue can convey categories.
- **Maintain expressiveness & effectiveness:** Encode the data faithfully, choose perceptually friendly color scales.
- **Consider user tasks:** Different tasks (identification vs. localization) may require different color schemes.
- **Handle cultural/contextual meaning of color:** Be cautious and test with users.
- **Consider perceptual properties and accessibility:** Good contrast, colorblind-safe palettes, and direct labeling.

This foundational understanding is crucial. Future lectures and exercises will build on these concepts to produce and critique sophisticated data visualizations.
