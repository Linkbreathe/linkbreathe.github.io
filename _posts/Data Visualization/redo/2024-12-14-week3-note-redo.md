--- 
title: DAVI Basic Charts - redo
author: <weixiong_626> 
date: 2024-12-14 13:30:00 +0200
categories: [Data Visualization,Redo] 
math: true 
tags: []
---

# Lecture Notes on Basic Chart Types and Visualization Principles

**Date:** (From the provided transcript)  
**Topic:** Basic Chart Types (Scatterplots, Line Charts, Area Charts, Bar Charts, Histograms, and Radial Variants)  
**Context:** The professor discusses fundamental design considerations for various common visualization types. The lecture also includes a quiz on color scales and data types, and emphasizes careful selection of charts, proper scaling, aspect ratios, labeling, and ensuring that the representation of data is accurate and expressive.

---


## Introduction to Basic Chart Types

**Why focus on basic charts?**
- Common and well-known: Bar charts, line charts, scatterplots, etc., form 90% of use cases.  
- Widely understood and easily created in standard tools.  
- These charts solve most visualization problems.  
- Basic charts serve as building blocks for more complex visuals.

**Charts Covered:**
- Scatterplots
- Line charts (including step and area variants)
- Bar charts
- Histograms
- Radial variants (briefly)

**Concept:** These design principles (scaling, aspect ratio, ordering) apply not just to basic charts but to any chart type you may later consider.

---

## Scatterplots

**Key Advantages:**
- Extremely versatile: show correlations, trends, outliers, clusters, nonlinear relationships.
- Position is a strong channel, making scatterplots very perceptually effective.
- Show multiple patterns at once.

**When to Use a Scatterplot:**
- For two quantitative variables.
- If discrete attributes (like number of cylinders in cars) create vertical lines, a scatterplot might not be best. Consider boxplots or alternative representations.

**Key Design Decisions:**
1. **Scaling and Zoom:**
   - Zoom level affects perceived correlation strength. Too zoomed out = stronger apparent trend; too zoomed in = less strong trend.
   
2. **Aspect Ratio:**
   - No single perfect ratio. Some research suggests using algorithms or heuristics to find an optimal aspect ratio for best pattern visibility.
   
3. **Tick Marks and Gridlines:**
   - Placing tick marks is non-trivial. Various algorithms (Heckbert, R-Pretty, Wilkinson) exist to find “nice” tick spacing.
   - Gridlines: Use only if exact reading of values is necessary. Otherwise, gridlines add clutter.
   
4. **Helpers:**
   - **Quadrants / Average Lines:** Adding reference lines (mean lines) helps chunk data, aiding interpretation.
   - **Trend Lines:** Add only if a trend is relevant. Make them distinct (dashed, lighter) from the data.
   
5. **Dot Shape/Size:**
   - Dots can be circles, squares, etc. For sensor data with uncertainty, squares indicating a confidence interval region can help communicate measurement accuracy.
   
6. **Overplotting and Overcrowding:**
   - **Overplotting:** Many points on top of each other.  
     Solutions: Transparency, jittering (small random offsets), or combining both.
   - **Overcrowding:** Too many points everywhere.  
     Solutions: Binning (hexbin or square bins), heatmaps, splitter plots (density contours plus outliers as points).
   
**Spatial (Map) Analogy:**
- Dot maps can be treated similarly: binning or heatmaps may require normalization by population density to avoid misleading patterns.

**Conclusion on Scatterplots:**
- They are a “multi-tool” of visualization.  
- Some researchers argue scatterplots could handle most tasks if designed properly.

---

## Line Charts

**Typical Use Case:**
- Often used for time series data.
- Show trends over time (or over a continuous variable like input size in benchmarking).

**Does It Make Sense?**
- Don’t use line charts for categorical data (e.g., gold, silver, bronze) that can be reordered arbitrarily.

**Design Considerations:**
1. **Scaling the Y-Axis:**
   - Show full range to avoid misleading impressions.
   
2. **Aspect Ratio:**
   - Cleveland & Cleveland (1980s research) suggest aiming for a ~45° slope for the main trend line for good readability.
   
3. **Gridlines:**
   - Same rule as scatterplots: only if exact reading is necessary.
   
4. **Trend Lines & Interpolation:**
   - Trend lines are helpful to show general direction but distinguish them from actual data.
   - Consider step lines if data represent discrete intervals.
   
5. **Multiple Lines:**
   - If many lines overlap (spaghetti plot), draw highly fluctuating lines first, smoother lines last, to reduce occlusion.

**Noisy Data:**
- Consider smoothing noisy line data. Show original data as faint points or as an envelope (min-max range) around the smoothed line.
- Decide between line or scatter: If very noisy, scatter may be better.

**Connected Scatterplots:**
- Combine two variables over time and connect points in chronological order, showing a trajectory through attribute space.

---

## Area Charts

**Definition:**
- A line chart with the area under the line filled in.
- Often used for amounts that accumulate.

**Stacked Area Charts:**
- Each layer represents a portion of the total. The top line (silhouette) shows the total sum at any point in time.
- Only stack if layers add up to something meaningful.

**Ordering Layers:**
- Order layers to be as horizontal as possible, avoiding the “sine-wave” illusion.
- Incorrect order can create optical illusions and misinterpretations.

**Examples:**
- Choosing layer order is computationally non-trivial but essential for clarity.

---

## Bar Charts (Column Charts)

**Column vs. Bar:**
- Vertical bars: column charts. Horizontal bars: bar charts.
- Bar charts are great for categorical comparisons.

**Axis Considerations:**
- Always show a zero baseline to avoid misleading.
- If data vary in orders of magnitude, consider perspective charts or other techniques instead of breaking the axis.

**Aspect Ratio:**
- A bar should be at least 10 times as tall as it is wide for clarity.
- White space between bars: ~50% of bar width is a good starting point.

**Ordering Categories:**
- Alphabetical if the task is identification (find a known category).  
- Sort by value if task is comparison or finding max/min easily.

**Bar Variants:**
- Lollipop charts (a more elegant bar variant).
- Grouped and stacked bars for comparisons and sub-categories. Only stack if it represents meaningful parts of a whole.

---

## Histograms vs. Bar Charts

**Histogram:**
- Quantitative data divided into equal-sized bins. No gaps between bins.
- Shows distribution of data across intervals.
- The average would appear as a vertical line.
  
**Bar Chart (Categorical):**
- Categories on x-axis, gaps between bars.
- The average of categories is a horizontal line.

**Bin Size and Starting Point:**
- Different bin widths or offsets drastically change how the histogram looks.
- Always use equal-sized bins, or properly normalize if bin sizes differ.

---

## Radial Variants

**When Useful:**
- If data is cyclic (e.g., time of day, direction), radial plots might be natural.
  
**Examples:**
- Radial scatterplots (polar coordinates).
- Radial line charts (e.g., plotting daily patterns in a circle).
- Radar charts (area charts on radial axes).
- Radial bar charts (like coxcombs or specialized charts that bend bars into arcs).
  
**Partial Circles:**
- You can use just a quarter circle (e.g., a radial bar chart) to emphasize certain aspects.

---

## Visualization Critiques (Examples)

**Practice in Critiquing:**
- Evaluate based on expressiveness (show the data truthfully), effectiveness (using the best perceptual channels), and efficiency (effort vs. insight).
- Examples reviewed in class:
  - Gun deaths in Florida (misused an inverted area chart that caused confusion).
  - Georgia Covid-19 data (bars sorted by value rather than time, misleading trend inference).

**Key Takeaways from Critiques:**
- Don’t reorder time data. Always keep chronological order.
- Normalize data when comparing populations with different sizes.
- Using negative mapping or metaphorical visuals can be okay if done carefully (as in New York Times “Iraq deaths” chart).

---

## Next Lecture

- Next week’s topic: **Interaction in Visualization.**
- Reading assignment: About 15 pages from Chapter 4 of the recommended book, focusing on interaction principles.

---

## Additional Resources

- The professor mentioned literature and references for algorithms (Wilkinson’s, Heckbert’s methods) for tick placement.
- Andy Kirk’s and other experts’ commentaries on specific charts were referenced.

---

**End of Lecture Notes**

## Initial Remarks and Quizzes

- **Lecture Start:**  
  - The professor welcomes everyone and commends those who made it through the rain.  
  - The main topic: **Basic Chart Types.**

- **Quick Quiz Before Lecture Topic:**  
  Students are given a code (Menti code) to join an online quiz.

### Quiz Questions Recap

1. **Color Scales:**
   - **Question:** Which one is *not* a property of a good color scale?
     - Options: Perceptual Equidistance, Increasing Luminance, Contrast Convergence, Colorblind Safety.
   - **Answer:** **Contrast convergence** is not a real property. It was made up by the professor.
   
   **Key Points about Good Color Scales:**
   - **Perceptual Equidistance:** A change in data should reflect evenly as a change in color.  
   - **Increasing Luminance:** Ensures the scale still makes sense in grayscale and avoids artificial artifacts.  
   - **Colorblind Safety:** 8% of males in Western culture are colorblind. Make sure the scale works for them.

2. **Data Types:**
   - **Question:** Gold, silver, bronze medals: What data type are they?
     - Options: Ordinal, Step Categorical, Nominal, Discrete Quantitative.
   - **Answer:** **Ordinal** (they have a natural order but you cannot do arithmetic like averaging them).
   
   **Key Points:**
   - Ordinal data supports an ordering but no arithmetic differences.  
   - Nominal is unordered categorical data.  
   - Discrete data usually refers to countable quantitative values, not mere categories.  
   - For medals (gold, silver, bronze), use a **semantic color coding** that matches their inherent categories (e.g., gold = gold color).

3. **Color Scales (Bivariate Example):**
   - **Question:** Shown color scale. Is it two-tone, bivariate, histogram-equalized, or divergent?
   - **Answer:** **Bivariate color scale** (using two hues to encode two different variables at once).
   
   **Key Points:**
   - **Bivariate Scale:** Two attributes mixed, producing combined colors.  
   - **Divergent Scale:** Has a neutral midpoint and diverges into two directions with different colors (e.g., representing temperatures around zero).  
   - **Two-tone Pseudocolor:** Uses blending of discretized colors to indicate exact values within bins.  
   - **Histogram Equalized Scale:** Adjusts bins so that colors are distributed evenly over data distribution.

4. **Marks Definition:**
   - **Question:** Marks are defined by their…?  
     Options included perceptual precedence, expressiveness, dimensionality, Gestalt principles.
   - **Answer:** **Dimensionality.**
   
   **Key Points:**
   - Marks = basic geometric elements (points, lines, areas, volumes) onto which we map data.  
   - Channels (position, color, size, etc.) are used to represent data attributes.  
   - Perceptual precedence and expressiveness refer to channels, not marks.

5. **Non-anchored Points:**
   - **Question:** Non-anchored points are… pre-attentive cues, labeling forms, optical illusions, or a problem of 3D visualizations?
   - **Answer:** A **problem of 3D visualizations** (lack of depth cues makes 3D scatterplot points “float” without reference).
   
   **Key Points:**
   - Non-anchored points cause difficulty in interpreting depth in 3D plots.
   - Pre-attentive cues are properties like color or shape that the eye processes instantly.
   - Labeling and optical illusions are different concepts.

**Quiz Conclusion:** Another quiz will come next week.

---
