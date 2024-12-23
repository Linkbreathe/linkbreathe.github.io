--- 
title: DAVI Visualizing Graph Data - redo
author: <weixiong_626> 
date: 2024-12-22 14:30:00 +0200
categories: [Data Visualization,Redo] 
math: true 
tags: []  
---


# Notes from the Professor’s Lecture on Graph Visualization

Below is a comprehensive set of notes capturing the key points, examples, and discussions from the professor’s lecture. Where the professor listed or explained a point in detail, it is included here.

---

## 1. Introductory Remarks and Mosaic Plots Example

- **Context**: The professor revisited an example from a previous session (Group 12’s pitch about mosaic plots).
- **Key Insight About Mosaic Plots**  
  - Mosaic plots can visually compare proportions across categories/years.  
  - **Vertical rectangle**: Indicates there were *few people* in 2022 but *many people* in 2024 → An **increase**.  
  - **Horizontal rectangle**: Many in 2022, fewer in 2024 → A **decrease**.  
  - **Square**: Roughly the same in both years → **No change**.
- **Emphasis on Explaining the Visualization (“The Pitch”)**  
  - Even if the audience is familiar with the type of chart (e.g., a mosaic plot), it does *not* guarantee they know *how to read it effectively*.  
  - Always clarify how to interpret the shapes/orientations within the mosaic plot to “bring it home.”
  - The professor relayed that *clear explanation* could have been the “selling argument” for that chart.

---

## 2. Quiz Questions on Cartography & Mapping

The professor conducted a quiz with five questions, using an online tool (a “magnetic code” or link in Brightspace).

### 2.1 Question 1: *“The Mercator projection preserves…”*
- **Choices**: Angles, Positions, or Distances.  
- **Correct Answer**: **Angles** (i.e., it is *angle-preserving*, also known as conformal).  
- **Examples/Discussion**:
  - Mercator is used in nautical navigation, as well as web mapping (Google Maps, Apple Maps).  
  - It **is not** area-preserving (Greenland looks huge, etc.).  
  - It **is not** distance-preserving, except in very specialized “equidistant” map projections (and even then, usually only from one point).  
- **How to verify angle-preserving**:  
  - By placing “Tissot’s indicatrices” (tiny circles of uniform radius on the globe). If they remain circles (rather than ellipses) after projection, it’s angle-preserving.

### 2.2 Question 2: *“Isopleth (Isoline) maps code regions defined by the …?”*
- **Choices**: Data content, Data context, Data type, Data scale.  
- **Correct Answer**: **Data content**.  
- **Explanation**:
  - **Isopleth / Isoline maps**: Regions are formed by *similar observed values* (e.g., similar temperature).  
  - **Choropleth (or “Isopleth” in some terminologies)** uses *data context* (like US states). Each predefined area is color-coded.  
  - **Isoline** or “Isopleth” focuses on *actual measured values*, generating lines (or regions) of equal value. Typically uses interpolation between measurement stations.  
  - **Data scale and data type** were distractors here.

### 2.3 Question 3: *“Cartograms prioritize the expressiveness of…?”*
- **Choices**: Data content, Data context, Data type, Data scale.  
- **Correct Answer**: **Data content**.  
- **Explanation**:
  - A **cartogram** deforms the underlying *geographical map* to reflect data values more accurately in *area* (or shape).  
  - That often sacrifices the exact *map shape* or “data context” in favor of showing how big or small the data variable is for each region (e.g., election results in area form).

### 2.4 Question 4: *“Which of these is a visualization approach for spatial-temporal data?”*
- **Choices**: Isopleth map, Spatial diagrams, Time map, Space-time cube.  
- **Correct Answer**: **Space-time cube**.  
- **Examples**:
  - **Space-time cube**: A typical approach to depict how something (like a location or trajectory) evolves over time in a 3D “cube,” with *two axes for space* and *one axis for time*.  
  - **Isopleth map** (answered in Q2) is about continuous regions of equal value.  
  - **Spatial diagrams** were from an interaction lecture on panning/zooming.  
  - **Time map** is a *scatterplot technique* used in time visualization (no direct geographic aspect).

### 2.5 Question 5: *“The simplification of maps is called…”*
- **Choices**: Map equalization, Grid mapping, Map schematicization, Thematic mapping.  
- **Correct Answer**: **Map schematicization**.  
- **Explanations**:
  - Schematicizing a map means simplifying or reducing geographic detail to *high-level shape outlines*, often to emphasize certain features.  
  - **Grid mapping** is more akin to a “unit cartogram.”  
  - **Thematic mapping** is *any* map showing thematic data (e.g., population, weather).  
  - **Map equalization** was made up.

---

## 3. Transition to Graph Visualization

After completing the quiz, the professor introduced **graph visualization**:

- Many datasets do *not* inherently have temporal or geospatial frames of reference.
- Instead, they might have a **relational** frame (e.g., social networks, citation networks).  
- Graphs can be:
  - **Social networks** (who follows/retweets whom).  
  - **Computer networks** (communication between servers).  
  - **Traffic networks** (roads and intersections).  
  - **Hierarchical structures** (managerial org charts).  
- Focus of the lecture:
  1. **Node-link diagrams**  
  2. **Matrix visualizations**  
  3. **Tree visualization** (esp. implicit trees)  
  4. **Partially ordered sets**  

---

## 4. Node-Link Diagrams

### 4.1 Aesthetics & Constraints
Common aesthetic goals for node-link diagrams:
1. **Straight edges** (or polyline edges)  
2. **Minimize edge crossings**  
3. **Minimize edge bends**  
4. **Keep uniform edge length (if possible)**  
5. **Maximize crossing angles** (so lines crossing do not create illusions of connectedness)  
6. **Minimize drawing area**, good aspect ratio, etc.

> *Example:* A planar graph can often be drawn without any crossings, but that might lead to uneven edge lengths, so trade-offs occur.

### 4.2 Force-Directed Layouts (Spring+Repulsion)
- **Basic Idea**: Borrow concepts from physics.
  - **Attractive Forces** (Hooke’s law, like springs) between **connected** nodes.  
  - **Repulsive Forces** (Coulomb’s law, electrostatic repulsion) between **all** node pairs so everything doesn’t collapse into a single point.
- **Process**:
  1. **Initialize** node positions randomly (or with a “pre-layout”).  
  2. **Iteratively** compute:
     - Repulsive forces for all pairs of nodes  
     - Attractive (spring) forces for each edge  
     - Move nodes accordingly  
  3. **Stop** when positions stabilize or after a certain number of iterations.
- **Simulated Annealing** to avoid chaotic motion:
  - Introduce a “velocity” parameter that cools (e.g., multiplied by 0.95 each iteration).  
  - Large velocity at first → nodes can move a lot.  
  - Velocity diminishes → finer local adjustments.

#### 4.2.1 Adding Extra Forces
- You can add specialized forces, for instance:
  - **Cluster Force**: Increase attraction among nodes in the *same* cluster.  
  - **Extra Repulsion** among nodes *from different clusters* to separate distinct groups further.
- **Barnes-Hut Optimization** (“point-charge approximation”):
  - Speeds up computations by grouping distant nodes into a single “placeholder” node.

### 4.3 Encoding Additional Node Attributes
- You can use glyphs *within* nodes (e.g., color, size, small charts) to convey numerical or categorical attributes.

---

## 5. Matrix Visualizations for Graphs

- An **adjacency matrix** encodes presence/absence (or strength) of edges in matrix cells.
- **When is it beneficial?**  
  1. **Dense subgraphs**: Node-link diagrams in very dense areas become cluttered. Matrices can be clearer.  
  2. **Edge-centric data**: You can embed small glyphs in each cell to show edge attributes over time, etc.

### 5.1 Reading Patterns in a Matrix
- **Star pattern**: One node connected to many → a row/column fully filled in.  
- **Bipartite**: A block from one group of rows linking to another group of columns, no internal links.  
- **Cliques**: A block fully filled with edges (no empty cells inside that sub-block).

### 5.2 Ordering Rows and Columns
- Often, the biggest challenge is *how you reorder* rows and columns.  
  - **Well-ordered** → reveals clusters (blocks on the diagonal).  
  - **Badly ordered** → looks random, no structure visible.
- **Robinson Matrix**:
  - Values do not increase when moving away from the main diagonal.  
  - Achieved by minimizing “Robinson violations” via an optimization approach.  
  - Summing or weighting deviations from a perfect monotonic decrease away from the diagonal is the basic principle.

### 5.3 Alternative Matrix Renditions
- “Node-link matrices”: stylized matrix cells with curved links. Usually less common; it’s an aesthetic alternative but can be harder to read.

---

## 6. Implicit Tree Visualizations

Sometimes, we can represent special types of graphs (especially *trees* or *hierarchies*) **without** explicit edges. Instead:

### 6.1 Interval Graphs
- Each node is an interval on a horizontal axis.  
- If intervals **overlap**, there is an edge.  
- More layers or fewer layers → more/less “vertical stacking.”  
- Widely used in **bioinformatics** (e.g., DNA fragment assembly).

### 6.2 Permutation Diagrams
- For **permutation graphs**: nodes appear on a top row and a permuted bottom row.  
- Draw lines between matching nodes top → bottom.  
- When lines cross, an edge is implied.  

---

## 7. Tree Layouts in Detail

When you have a strict hierarchy (no cycles), you can choose:
1. **Adjacency** (icicle plot, sunburst)
2. **Inclusion** (treemaps)
3. **Overlap** (less common, e.g., “cascaded treemaps”)

### 7.1 Adjacency (Icicle & Sunburst)
- **Icicle Plot**:  
  - Each node subdivided horizontally (or vertically) into child rectangles.  
  - Root at top, leaves at bottom.  
- **Sunburst**:  
  - Radial version: root in the center, children subdivided radially outward.  
  - Outer rings = deeper levels in the hierarchy.  
  - Often **circumference** at deeper levels grows, giving more space to more numerous leaf nodes.

### 7.2 Inclusion (Treemaps)
- **Slice and Dice**: Repeatedly subdivide rectangles along alternating orientations (horizontal/vertical).  
  - Tends to create *long skinny* rectangles in unbalanced data.  
- **Squarified Treemap**:  
  - Greedy approach to keep rectangles close to square to aid area comparison. Sort children by size and place them sequentially to keep aspect ratios near 1:1.  
  - **Time complexity**: typically \(O(n \log n)\) due to sorting.  
- **Ordered Treemap**:  
  - Preserves a given order (e.g., chronological).  
  - Uses a “pivot” strategy: pick a pivot node to place, stack siblings to approach square shape, and subdivide recursively.  
  - The pivot can be chosen:
    1. **By size** (largest/smallest first)  
    2. **By middle** (just pick the middle index)  
    3. **By split size** (sum of left chunk ~ sum of right chunk)

### 7.3 Overlap (Cascaded Treemaps)
- Children “overlap” or “offset” from their parent.  
- Allows more space for internal labels or interactions.  

> **Resource**: The professor mentioned [Treemaps (TreVis.net)](http://trevis.net/) as a gallery of diverse tree visualization methods.

---

## 8. Partially Ordered Sets & the Sugiyama Framework

- **Partial Orders** arise in “food webs” or “trophic diagrams,” where you have a directional hierarchy but no single root.  
- **Sugiyama framework** is *the* classical method for layered graph drawings:
  1. **Layer Assignment**:  
     - “Hanging the graph by its source nodes” so levels fall naturally.  
     - Might introduce “dummy nodes” to handle edges that skip layers.  
  2. **Crossing Reduction**:  
     - **Barycentric Method**:  
       - For each layer, compute each node’s average (mean) x-position of its connected neighbors in the previous layer.  
       - Sort nodes by these averages (moving top to bottom, then bottom to top, multiple passes).  
       - Minimizes edge crossings effectively in practice.  
  3. **Horizontal Coordinate Assignment**:  
     - Minimizes edge *bends*. Move nodes horizontally so edges can be drawn with fewer or no bends.

**Implementation** can be tricky (many corner cases). Libraries exist to do Sugiyama layering automatically.

---

## 9. Visualization Critique: Gun Deaths in the U.S.

The professor showed a final visualization critique on a stacked bar chart with divergent color usage:

- **Issues**:
  1. **Time encoded as a divergent color scale**: 
     - No meaningful “middle point” for time.  
     - Hard to read chronological progression from color hue alone.  
  2. **Categories are not mutually exclusive**: 
     - Some gun deaths might be counted in multiple “gun types” but appear as separate stacked segments.  
     - Overlaps break the fundamental principle that each segment in a bar stack should be mutually exclusive.  
  3. **Comparisons are compromised**:
     - No direct timeline axis (x or y). Users can’t easily see trends over the years.  
     - Diverging color suggests “above/below some central date,” but that is nonsense with these data.  

- **Better Alternatives**:
  - A standard time-series chart (e.g., **line chart** or **cumulative line chart** by year).  
  - A clear axis for time, separate or stacked lines for different gun types (if they truly are exclusive categories).

---

## 10. Closing Notes
- Next lecture: **Text Visualization** (shorter topic).  
- Reading: There is no core textbook chapter, but an extra reading was provided for general overview.  
- The professor encourages focusing on the approach to these techniques rather than memorizing every detail.

---

# Key Takeaways

1. **Mosaic Plots**: Effective for categorical comparisons across years. Always explain how to read the rectangles’ orientations.  
2. **Map Projections**:  
   - Mercator = angle-preserving (conformal), **not** area/distance preserving.  
   - Evaluate via Tissot’s indicatrices.  
3. **Isopleth vs. Choropleth**: Isopleth (data-driven regions) vs. Choropleth (regions from geospatial context, e.g., states).  
4. **Cartograms**: Distort geographic context to emphasize data values (“data content”).  
5. **Graph Visualization**:  
   - **Node-Link** with force-directed layout (Hooke’s + Coulomb’s laws, possible clustering forces).  
   - **Adjacency Matrix** for dense subgraphs or edge-focused data. Reordering rows/columns matters (Robinson matrix).  
6. **Tree Structures**:  
   - Icicle, Sunburst (adjacency).  
   - Treemaps (inclusion): Slice-and-dice, Squarified, Ordered.  
   - Overlap variants (cascaded treemaps).  
7. **Partially Ordered Sets**:  
   - Food webs, no single root or cycle, but a directional hierarchy.  
   - **Sugiyama Framework**: layer assignment → crossing reduction → horizontal coordinate assignment.  
8. **Visualization Critique**:  
   - Diverging color scales for time are often inappropriate unless there’s a genuine “above/below zero” midpoint.  
   - Stacked bars must have exclusive categories.  
   - Time series typically need a dedicated axis for clarity.

---

_These notes are a faithful reflection of the professor’s lecture content, including all major examples, quiz points, and critiques discussed._  
