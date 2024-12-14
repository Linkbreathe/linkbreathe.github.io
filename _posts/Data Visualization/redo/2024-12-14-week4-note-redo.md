--- 
title: DAVI Interaction - redo
author: <weixiong_626> 
date: 2024-12-14 13:30:00 +0200
categories: [DAVI,Lecture] 
math: true 
tags: []  
---


---

## Interaction in Visualization


### Why Interaction?

- Interaction transforms static diagrams into tools for **data exploration**.
- Allows users to:
  - **Adjust the visualization:** Zoom, pan, filter, and query the data.
  - **Issue visual queries:** Select interesting clusters, see linked data across multiple views.
  - **Enhance the visualization:** Tooltips, brushing and linking, and interactivity for better data understanding.
  - **Support diverse users and tasks:** Interaction helps cater to different goals and user skill levels.

### Visual Information Seeking Mantra (Shneiderman)

- **Mantra:** “Overview first, zoom and filter, then details on demand.”
  - Start with a broad overview of the entire dataset.
  - Zoom in or filter to focus on interesting subsets.
  - Retrieve detailed information (e.g., tooltips, labels) as needed.

### Overview & Detail vs. Focus & Context

- **Overview and Detail (Separated):**
  - Two basic ways:
    1. **Spatial Separation:** Example: A main view plus a smaller “minimap.”  
       - The overview might be a small thumbnail, the detail a large main panel.
    2. **Temporal Separation (Zooming):** The user zooms into a region. You only see one level at a time.  
       - Panning moves your view at the same scale.  
       - Zooming changes scale, showing more or less detail.

- **Focus and Context (Combined):**
  - Integrate both detailed focus and the broader context in a single continuous view.
  - Often achieved through “fisheye” or “lenses” that enlarge a focus region while compressing context around it.
  - **Examples:**
    - **Fisheye Tree Views:** Large font for the selected node, diminishing sizes for nodes farther away.
    - **Table Lens:** Compresses rows/columns not in focus into 1-pixel lines showing only color-encoded values.
    - **Interactive Lenses:** Over a map or graph, a lens that shows detail or computes something (like density or sampling) in the lens region.

### Navigation & Space-Scale Diagrams

- **Zooming & Panning:**  
  - Represented by “space-scale diagrams,” which show how a “viewing window” moves and changes scale.
  - **Smooth Navigation:**  
    - Combines zooming and panning so the user never loses context (origin or destination remain visible).
    - Example: Navigating large graphs by zooming out, showing origin and destination, then zooming back in at the target.

### Navigational Cues

- **For Panning:** Radar views that show off-screen elements at the edges, guiding where to pan.
- **For Zooming:**  
  - Computed “heterogeneity” or “differences” at coarser scale to highlight where something interesting might appear if you zoom in.
  - Example: Using color bands (heterogeneity bands) to show potential hidden patterns in a line chart.

### Multiple Coordinated Views (MCV)

- **When to use MCV:**
  - **Rule of Diversity:** Many attributes, tasks, or user groups.
  - **Rule of Complementarity:** Different views show different aspects, providing a richer understanding.
  - **Rule of Decomposition:** Break complex data into simpler sub-views.
  - **Rule of Parsimony:** Don’t add views if one suffices.
  - **Rule of Space-Time Resource Optimization:** Save effort and adapt to multiple tasks/users in one environment.
  - **Rule of Self-Evidence:** Make relationships between views clear (e.g., highlight linked items in all views).
  - **Rule of Consistency:** Keep interaction and encoding consistent across views.
  - **Rule of Attention Management:** Use highlighting, filtering, etc. to guide user’s focus.

- **Brushing and Linking:**  
  - Selecting (brushing) data items in one view highlights the same items in other views.
  - Supports comparisons across multiple dimensions or attributes.

### Tangible Interaction and Software Architecture

- (This part was mentioned to be handled next Monday, so only a brief note)
- **Tangible Interaction:**  
  - Physical interaction devices or tokens that directly manipulate the visualization.
- **Software Architecture:**  
  - Interaction often implemented by layering additional pipelines (e.g., lens pipelines parallel to main visualization pipelines).

---

## Visualization Critiques and Examples Given

**General Steps in Critiques:**
1. Identify chart type and data being represented.
2. Consider if the visual encoding matches the data’s nature (expressiveness).
3. Check perceptual aspects: Is it easy to read? Are encodings effective? Is it colorblind safe?
4. Consider efficiency: Are there simpler ways to convey the same information? Is it overly complicated?

**Critique Example 1: A Poor Chart of Republican Primaries (2016)**

- Shown as a weird column chart with days of the month encoded as bars, and states vs. primaries over time.
- **Problems:**
  - Day of the month is treated like a quantitative variable (bars) while it’s actually an ID-like attribute. Inappropriate chart choice.
  - Months encoded with different hues, even though months are ordinal (should use ordered channel).
  - Hard to interpret tasks: The chart lacks a sensible purpose or meaningful comparison.
  - **Better Approaches:**
    - Use a calendar-based layout, a timeline, or well-structured bar/line charts where time is on a continuous axis.
    - Example from Washington Post: Stacked bars or timelines more clearly showing when certain states hold their primaries.

**Critique Example 2: History of Pandemics Visualization**

- Complex bubble timeline with 3D perspective.
- Each pandemic is a 3D fuzzy ball placed along a timeline, sized by death toll.
- **Problems:**
  - Perspective distortion introduces a huge lie factor. Bubbles farther away look smaller than they should.
  - Comparing past pandemics to modern ones is distorted by both scale and population changes over time.
  - Color usage is unclear. Uncertain what color encodes.
  - Some dates not aligned properly (some events placed incorrectly in time).
- **Better Approaches:**
  - Normalizing death toll by world population.
  - Using simple 2D charts: line graphs, bars, or properly scaled bubbles on a single plane.
  - Annotated timelines or interactive visualizations allowing scaling and filtering.

---

## Closing Notes

- This lecture wraps up basic static visualization concepts and transitions into interactive visualization techniques.
- Next sessions will look at tangible interaction and software architecture, and then delve into design exercises.
- Students are encouraged to review examples, practice critiques, and be prepared for the upcoming hands-on design activities.

## Interactive Quiz on Chart Types and Principles

After the project discussion, the professor gave a quiz to reinforce visualization concepts:

1. **Chart Identification & Variables:**
   - Example Question: Given a certain chart, identify whether it is a **bar chart, column chart, grouped column chart, or histogram**.
   - **Key Point:** A **histogram** visualizes the distribution of a **quantitative variable** divided into bins.  
     - The bins represent continuous ranges of values, not categories.  
     - Histograms ideally have no gaps between bars.
   - **Common Mistake to Note:** If the x-axis represents categories (like "Age Groups") but the axis values are actually continuous numeric ranges, that indicates a histogram. If there are gaps or the bins are not equal, it’s a flawed histogram but still conceptually a histogram.

2. **Banking to 45 Degrees (Line Charts):**  
   - **Key Point:** Line charts are best interpreted when slopes are around 45°. This principle, known as **“banking to 45°”**, comes from Cleveland & McGill’s perceptual studies.  
   - Other listed “principles” like tilting to 35°, sloping to 25°, or binning to 55° are not real. The correct principle is “banking to 45°.”

3. **Stacked Area Charts vs. Other Charts:**
   - **Key Point:** **Stacked area charts** require data that sum up to a meaningful whole.  
   - For example, if each layer represents a department’s sales, stacking them gives the company’s total sales over time.
   - Histograms, grouped bar charts, or grouped area charts (the latter doesn’t really exist as a standard term) do not require data that sum to a whole.

4. **Connected Scatter Plot:**
   - A **connected scatter plot** takes regular scatter plot points (each with x and y values) and connects them in the order of observation (often time).
   - Distinguishing features:
     - Shows a trajectory or path through time or another sequence.
     - Different from a line chart because both x and y can represent different quantitative attributes (not necessarily time on the x-axis).

5. **Overcrowding and Overplotting in Scatterplots:**
   - **Key Point:** For overplotting (points placed exactly on top of each other), use transparency or jittering.
   - For overcrowding (too many points making a “cloud”), use binning (hexbin plots, 2D histograms) or density maps (heatmaps) to show data distribution more clearly.

**Quiz Summary:**  
- Histograms = continuous numeric bins.  
- Banking line charts to 45° = optimal readability.  
- Stacked area charts = data summation must be meaningful.  
- Connected scatter plot = connect points in observed order.  
- Overplotting vs. overcrowding = different techniques to handle them.
