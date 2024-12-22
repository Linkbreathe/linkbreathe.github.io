--- 
title: DAVI Visualizing Geospatial Data - redo
author: <weixiong_626> 
date: 2024-12-21 14:30:00 +0200
categories: [Data Visualization,Redo] 
math: true 
tags: []  
---

# Lecture Notes

Below is a comprehensive set of notes based on the professor’s lecture.  
All key points, examples, and explanations have been included in detail.

---

## 1. Announcements

1. **Project Presentations Sign-up**  
   - The sign-up for project presentations is now open.  
   - Students are invited to present their project in the upcoming TA sessions (either next week or the week after).  
   - Purpose:
     - Showcase progress
     - Receive feedback from the professor and peers

2. **Exam Sign-up (Phase 2)**  
   - Announcement on Brightspace will follow.  
   - If you have any scheduling conflicts or other obligations during the exam period, send an email to the professor.
     - You will receive the sign-up link earlier to secure a suitable time slot.

3. **Office Hour Cancellation**  
   - No office hour today because the professor has another lecture to give (the “Pre-Talent Trek” for bachelor students).  
   - This is a one-time event; next week’s office hours will return to normal.

4. **Today’s Short Breaks**  
   - The professor needs to lecture for 5 hours today and must travel to another campus building after class.  
   - He requests 10-minute breaks so the class can finish 10 minutes earlier, allowing him travel time.

5. **Plan for Today**  
   - Organizational matters are settled.
   - Before moving into the main topic—Geo Visualization—there will be a quick recap quiz on temporal data visualization (as is done most Mondays).

---

## 2. Recap Quiz (Time-Oriented Data)

The professor used **Menti** (shown on the screen) to pose several multiple-choice questions. Below are the questions, answers, and the professor’s elaborations.

### Q1. Horizon graphs are used to show:
- **Options:**
  1. Multiple events
  2. Multiple time intervals
  3. Multiple time granularity
  4. Multiple time series
- **Correct Answer:** Multiple time series
- **Explanation & Examples:**
  - Horizon graphs are particularly good when you have many time series—like stock prices over time or weather data (e.g., temperature for multiple cities).
  - For multiple time granularity, a **calendar visualization** is more suitable.
  - For multiple time intervals, you’d typically use **triangular models** or **Gantt charts**.
  - For multiple events, the professor showed an example called the **time map** (e.g., analyzing distances between consecutive Twitter events).

---

### Q2. Which one is **not** a time arrangement?
- **Options:**
  1. Logarithmic time
  2. Cyclic time
  3. Linear time
  4. Branching time
- **Correct Answer:** Logarithmic time
- **Explanation & Examples:**
  - **Linear time**: The standard timeline concept, e.g., from the earliest to the latest date.
  - **Cyclic time**: Illustrated by a clock face or repeated seasonal patterns.  
  - **Branching time**: Familiar to computer scientists from version control (e.g., Git branching).  
  - “Logarithmic time” was simply made up; it’s not a standard conceptual arrangement for time in data visualization.

---

### Q3. Identification of the chart (showing intervals as points in a triangular shape):
- **Options:**
  1. Ternary plot
  2. Triangular model
  3. Population pyramid
  4. Tri-linear plot
- **Correct Answer:** Triangular model
- **Explanation & Examples:**
  - **Triangular model** (or triangle chart for time intervals) represents intervals as points instead of lines (like the Gantt chart does).  
  - A **ternary plot** is a three-variable scatterplot (often summing to 1 or 100%).  
  - A **population pyramid** is used to display population by age brackets (often split by gender, with symmetrical bars around a central axis).  
  - A **tri-linear plot** is another term related to **Piper diagrams** but not what was shown here.

---

### Q4. Which is **not** a principal way of mapping time in visualization?
- **Options:**
  1. Mapping time to space
  2. Mapping time to pixel
  3. Mapping time to time
  4. Using small multiples
- **Correct Answer:** Mapping time to pixel
- **Explanation & Examples:**
  - There are two main principles for temporal data in visualization:
    1. **Mapping time to display space**: e.g., **small multiples** (a small chart for each time slice).
    2. **Mapping time to display time**: e.g., **animation** (the data changes as time progresses).  
  - “Time to pixel” is not a standard principal approach.

---

### Q5. Spiral plots are used to identify:
- **Options:**
  1. Sequences
  2. Trends
  3. Periodicities
  4. Intervals
- **Correct Answer:** Periodicities
- **Explanation & Examples:**
  - **Spiral plots** allow you to see repeating or cyclic behavior, e.g., monthly or seasonal patterns.  
  - By adjusting the rotation so that one turn of the spiral equals a specific period (e.g., 4 weeks), repetitive cycles in the data become visible.
  - **Sequences** are often spotted by **arc diagrams**, which connect repeated patterns or events in the timeline.
  - **Intervals** might use Gantt charts or triangular models.

---

## 3. Transition to Geo Visualization

### 3.1 Why Geo Visualization?

- **Historic Origins**: Cartography is considered one of the earliest forms of data visualization.  
  - The concept of marks (points, lines, areas) originates from cartography:
    - 0D = Points (e.g., cities)
    - 1D = Lines (e.g., streets, rivers)
    - 2D = Areas (e.g., countries, oceans)
- Many fundamental **visualization theory concepts** (marks, aesthetic channels, etc.) were inherited from thematic cartography.
- **Misrepresentations** can occur if maps are generated without understanding projections or the underlying geospatial context.
  - E.g., the classic distortions from the **Mercator projection** (Greenland or Russia appearing huge compared to Africa).

#### Example: Election Maps
- **U.S. Presidential Elections** often show large red areas vs. small blue areas, misleading because area ≠ population.
- The **modifiable areal unit problem**: When you color large low-population counties the same as small high-population counties, it can create a skewed visual impression.
- **Cartograms** can distort areas proportionally to data (e.g., population), providing a more “truthful” representation of certain data aspects, but sacrificing strict geospatial fidelity.

---

## 4. Spatial Statistics (Brief Overview)

When dealing with **latitude/longitude** or any **(x,y)** coordinates, certain descriptive statistics change:

1. **Spatial Mean**  
   - Compute the mean of x-coordinates and the mean of y-coordinates separately.  
   - Weighted means also possible if points have varying importance.

2. **Spatial Median**  
   - An optimization problem: find the point (among existing points) that minimizes sum of pairwise distances to all other points.

3. **Distances**  
   - Euclidean distance (“as the bird flies”) vs. Manhattan distance (city grid constraints).

4. **Standard Distance**  
   - Analogous to standard deviation in 2D. Produces a **standard distance circle** around the mean location.

5. **Standard Deviation Ellipses**  
   - More nuanced than a circle. Shows directional spread (points might be more spread in one direction vs. another).

---

## 5. Map Projections

### 5.1 Overview

- A globe is 3D, but maps are 2D → **Projections** inevitably cause distortion.
- **Mercator Projection**:
  - Uses a cylindrical “toilet paper roll” concept around the Earth.  
  - Preserves **angles** (useful for navigation), but **grossly distorts area** (Greenland, Russia, etc.).
  - Web Mercator is used by many web-based mapping services (e.g., Google Maps) precisely because it preserves angles (straight roads stay visually straight).

- **Lambert Projection**:
  - Preserves **area** (called an “equal-area” projection).
  - Distorts shapes/angles (circles in the Tissot’s indicatrix become ellipses).

- **Azimuthal (e.g., Equidistant) Projection**:
  - Preserves distance from a central point, but not other distances or areas.

- **Compromise Projections** (e.g., **Robinson Projection**):
  - Try to minimize all distortions (area, angle, distance) but cannot completely preserve any single property perfectly.

### 5.2 Tissot’s Indicatrix

- Placing identical circles on the globe’s surface and seeing how they become distorted in the 2D projection.  
  - If circles remain circles (same shape), angle is preserved.  
  - If areas change size, area is not preserved.

---

## 6. Putting Data **into** the Map

Different ways to superimpose data on an existing map:

1. **Dot Maps**  
   - Each data point (event or location) is plotted as a dot at its (latitude, longitude).  
   - If points overlap heavily, can convert to a **Heatmap** (showing density).

2. **Flow Maps**  
   - Lines or arrows to represent movement (e.g., flights between cities).  
   - **Bundling** can reduce clutter by merging similar paths into “highways.”

3. **Choropleth Maps**  
   - Data is aggregated by predefined areas (e.g., states, counties).  
   - Common for showing election results per state (because the data is inherently “per state”).

4. **Isopleth (Isoline) Maps**  
   - Areas (and boundary lines) are determined by the data itself (e.g., temperature or rainfall contours).  
   - Political borders are only background references.

5. **Corrochromatic Maps** (for categorical data)  
   - Similar concept to isopleth but for categories (e.g., soil types, land cover types).  
   - Uses distinct color hues or semantic color mappings (forest = green, desert = yellow, etc.).

### Multivariate Data on Maps

- **Glyphs**: e.g., star glyphs or radial glyphs placed at each region.  
- **Small Multiples**: e.g., multiple maps side by side, each focusing on one variable or dimension.  
- **Embedding the Map in a Chart**: e.g., a scatter plot that uses each state’s shape in place of a standard point/dot.

---

## 7. Adjusting the Map **to** the Data

### 7.1 Cartograms

- **Distort the actual map areas** so that each region’s area becomes proportional to a data variable (e.g., population).  
- **Contiguous Cartograms**: Attempt to retain adjacency and shape, though often heavily distorted.  
- **Dorling Cartograms**: Replace each region with a circle, sized by the data.  
- **Demers Cartograms**: Replace each region with a square, sized by the data.

#### Example
- The 2012 US Presidential Election map was misleading if viewed in standard geography (lots of red but fewer people).  
- A population-proportional cartogram is more “truthful” about how many people are in each region.

### 7.2 Grid or Unit Cartograms (Mosaic Maps)

- Each region is given **one or more cells** in a grid, typically representing a fixed quantity (e.g., each cell = one electoral vote).  
- Also used in climate reports so small countries are as visually prominent as large ones.

### 7.3 Metro Maps

- **Schematic** versions of real subway lines.  
- True geographic distance is sacrificed for clarity:
  - Straight or smoothly curved lines
  - Uniform or near-uniform spacing between stations  
- **Task**: Understand route transfers and count number of stops more easily, not literal geographic distances.  
- Popular layouts:
  - **Hexalinear** (lines restricted to 6 directions)
  - **Octolinear** (8 directions)
  - **Curvilinear** or “circle” design

### 7.4 Map Simplifications (Map Schematic Layouts)

- Simplify outlines of regions (e.g., coastline details) to reduce visual complexity.  
- **Polygon point-removal** and smooth arcs yield puzzle-like schematic boundaries.  
- Good for broad overviews or when precise boundary shape is unimportant.

---

## 8. Combining Space and Time

### 8.1 Space-Time Cube

- **3D representation**:
  - Horizontal plane = space (the map)
  - Vertical axis = time  
- A moving path becomes a “trajectory” that rises over time.  
- Often accompanied by a **2D projection** of that trajectory onto the map for direct spatial reference.

### 8.2 Travel-Time (Isochrone) Maps

- Show how long it takes to travel from a specific point to all other locations.  
- **Isochrones**: Contours of equal travel time.  
- Example: from central London, color-coded rings reveal equal-travel-time zones.

---

## 9. Beyond Geo-Space

- **Any 2D “field”** can be treated like a map (e.g., basketball courts, indoor spaces, game boards):
  - Dot maps, flow maps, heatmaps, etc., all apply if you have (x, y) coordinates.
- Examples:
  - **Chessboard** analysis
  - **Counter-Strike** maps for player positions
  - **Building evacuation** simulations

---

## 10. Visualization Critiques

In the second half of the lecture, the professor presented two critique examples.

### 10.1 Critique Example 1 (A Unit Cartogram with Beer Consumption)

**Chart Description**  
- A **unit cartogram** (grid-based) combining US states and EU countries as squares of equal size.  
- Color-coded by average beer consumption per person per week.  
- Some squares labeled with consumption in liters and population.

**Major Observations & Critiques**  
1. **Color Scale Mismatch**  
   - Data is **ordinal** or numeric (liters/week), but the color scheme used looks more like a **categorical** or diverging set.  
   - A sequential scale would be more intuitive (lowest consumption = light color, highest = dark color).

2. **Placement of Regions**  
   - Sweden’s square is oddly placed, and large gaps (e.g., Switzerland, Norway) are unmarked.  
   - This makes it difficult to identify some countries quickly and disrupts the overall topology.

3. **Comparing Different Drinking Ages / Populations**  
   - US vs. EU countries can be questionable because:
     - Different population age structures
     - Different legal drinking ages
   - Might be misleading if one lumps total population in the denominator.

4. **Trade-Off**  
   - By giving each region an equal-size grid cell (for clarity in labeling), the **actual geographic or population size** is not represented.  
   - This is acceptable if the design intention is to give every region an equal visual “voice,” but the map is no longer geographically “accurate.”

5. **Legend & Labels**  
   - The breakpoints (e.g., <1 liter, 1–1.5 liters, 1.5–2 liters, >2 liters) are somewhat arbitrarily chosen and might skip nuance.
   - Not colorblind safe (reds, greens, etc. are used).

**Positives**  
- Easy to fit text labels in each region (no tiny, unreadable states).  
- Straightforward “by region” comparison once you decipher the color legend.

---

### 10.2 Critique Example 2 (Spaghetti Line Chart of 2012 Republican Nomination Polls)

**Chart Description**  
- Multiple polling lines (Romney, Gingrich, Santorum, Paul, Perry, Bachmann, Huntsman, Cain, etc.) from June 2011 to January 2012.  
- Each poll is plotted as a point in time, connected by lines for each candidate.  
- Some lines end abruptly (candidates dropped out of the race).

**Major Observations & Critiques**  
1. **Distorted Time Axis**  
   - The x-axis spacing corresponds to poll frequency, not calendar dates.  
   - Months with many polls look stretched; months with few polls look compressed.  
   - Better approach:
     - Plot points on actual calendar intervals and interpolate if necessary.

2. **Color Issues**  
   - Too many lines, too many colors. The color scheme is **not** colorblind safe.  
   - One line is not labeled at all (yellow line for a dropped-out candidate).
   - Possible fix: use a **colorblind-safe** palette (e.g., ColorBrewer’s “Set2” or “Dark2”).

3. **Spaghetti Plot Complexity**  
   - Hard to follow many lines at once.  
   - Alternative: small multiples or highlight only the *still-running* candidates in bright colors, others in gray.

4. **Labeling**  
   - Inconsistent naming or repeated naming. Some lines end with no direct explanation (besides candidate dropout).  
   - Could add text boxes noting “Candidate X dropped out on date Y.”

5. **Possible Alternative**  
   - A **stacked area chart** showing share of total 100%.  
   - This reveals how each candidate’s fraction changed over time (highlighting shifts more obviously).

**Positives**  
- Shows immediate trends over time (who’s rising, who’s falling).  
- Lets you see mirrored movements: one candidate’s decline can visually match another’s rise.

---

## 11. Closing

- The professor thanked everyone for adjusting to shorter breaks.  
- Next lecture: **Graph Visualization** (an important and more specialized topic).  
- The professor recommended reviewing map-based references, specialized cartography tools, and color guidelines (e.g., from ColorBrewer).

**Additional References**  
- **ColorBrewer** for colorblind-safe palettes: <https://colorbrewer2.org>  
- **Grid/Unit Cartograms** explanation: [Cartograms – Introduction and Examples](https://www.doi.org/some-cartogram-resource) (the professor showed a sample link in slides).  
- **Michael Gleicher**: Paper on **juxtaposition vs. superimposition** for data comparison.  
- **“Avoiding Spaghetti Plots”** articles and blog posts for better multi-line charts.

---

### End of Lecture

- **Date:** Same day as the lecture (no office hour due to scheduling conflict).  
- **Note:** Next session includes an industry guest speaker and a chance to do further visualization critiques (with chocolate prizes).

