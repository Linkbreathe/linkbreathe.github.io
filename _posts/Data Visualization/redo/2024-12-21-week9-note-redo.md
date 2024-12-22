--- 
title: DAVI Visualizing Time-oriented Data - redo
author: <weixiong_626> 
date: 2024-12-21 13:30:00 +0200
categories: [Data Visualization,Redo] 
math: true 
tags: []  
---

## Lecture Notes from the Professor (HCI Class)

Below is a structured summary of the professor’s lecture, capturing key points, examples, and important details from start to finish. **When the professor gives an example, or lists a key point, they are written down thoroughly** for easy review and studying.

---

6
## Recap of Past Lectures

### Negative Correlation in Parallel Coordinates
- **Question posed:** In parallel coordinates, if you see a star-shaped pattern (with high values on one axis connected to low values on another, and vice versa), is it:
  - A cluster
  - A positive correlation
  - A negative correlation
  - A high variance of spread  
- **Answer:** It indicates a **negative correlation**.  
  - **Reasoning**: In parallel coordinates, lines fan out in a star-like shape when one variable’s high values consistently link to another variable’s low values, and vice versa.

### Marimekko Chart vs. Mosaic Plot
- **Question posed:** What kind of chart is shown that subdivides numeric (binned) ranges in both horizontal and vertical directions?
  - Stacked bar chart?
  - Stacked column chart?
  - Mosaic plot?
  - Marimekko chart?
- **Answer:** **Marimekko chart** (although a mosaic plot is a “cousin”).
  - **Key Points**:
    - **Mosaic plot** is typically for **categorical** (qualitative) data.
    - **Marimekko chart** uses **binned quantitative** data along both axes, subdividing it like a mosaic.
    - Stacked bar/column charts **do not** vary width from column to column; all bars have the same width, which is not the case in a Marimekko or mosaic plot.

### Parallel Sets for Qualitative Data
- **Question posed:** Parallel sets are used for:
  - Text data
  - Discrete data
  - Continuous data
  - **Qualitative (categorical) data**  
- **Answer:** **Qualitative data** (categorical or possibly ordinal).  
  - **Context**: Parallel sets visualize multiple categorical dimensions (e.g., male/female, survived/perished, passenger class) to see how categories interrelate.  
  - **Note**: You can “bin” quantitative data to turn it into categories (like 0–10, 10–20, etc.) and then apply parallel sets.

### Trellis Plot Characteristics
- **Question posed:** A trellis plot:
  1. Benefits from brushing and linking
  2. Subdivides the dataset
  3. Is mirrored around the main diagonal
  4. Works only for categorical data
- **Answer:** A trellis plot **subdivides the dataset** (option 2).  
  - **Rationale**: 
    - **Does NOT** benefit from brushing and linking in the same way a scatterplot matrix does, because each trellis cell is *already* only a subset.  
    - **Is NOT** mirrored around the main diagonal (that’s a scatterplot matrix).  
    - **Does NOT** only work for categorical data. You can bin continuous variables to produce trellis subsets.

### One Vis/CIS Model of Visualization
*(Referred to as “Munzner’s Model,” “Van Wijk’s Model,” or “Fun Bike’s Model” in the lecture; professor uses the term “Front Bikes,” “Fand Bikes,” or “Van Wijk.”)*

- **Key idea**: This model (Van Wijk’s or Munzner’s extended approach) details **how visualization is used**, versus just how data is mapped.
- In a standard **visualization pipeline**, we see:
  1. Data
  2. Transformation/filtering
  3. Visual mapping
  4. Rendering
  5. User  
- **Van Wijk’s model** focuses heavily on the **user side**: how the user perceives images, forms knowledge, triggers new explorations, modifies the specification, etc.  
- **Question posed**: One Vis/CIS (Van Wijk’s) model focuses on:
  - The mapping step
  - The interaction
  - **The use of the visualization (the user side)**
  - The “understand” step  
- **Answer**: **The use of the visualization** is the main emphasis.

---

## Time Visualization: Principles and Techniques

### What is Time? (Timescales and Arrangements)

1. **Timescales** can be:
   - **Ordinal**: You only know the order of events (e.g., Event A happens before Event B), but not how far apart they are in actual time.
   - **Discrete**: You have specific discrete points (e.g., daily measurements, each night at midnight).
   - **Continuous**: Time flows continuously; you can measure at any moment in between.

2. **Time Scope**:
   - **Instantaneous**: A measurement is valid only at one point in time.
   - **Interval**: A measurement or activity spans a *range* of time (valid from a start time to an end time).

3. **Time Arrangement**:
   - **Linear**: The most common representation (like a timeline).
   - **Cyclic**: Useful for showing seasonal/day–night or repeating patterns (e.g., daily, yearly cycles).
   - **Branching**: Version control or “forks” in a timeline (common in Git or possible in scenario planning).

4. **Time Granularity**:
   - E.g., hours, days, weeks, months, years, or combinations (like a *calendar*).  
   - Different levels of time granularity support different tasks (e.g., hourly details vs. yearly overview).

#### Example: Gantt Chart for Intervals on a Continuous Timeline
- If you record runs across different times of the day (morning, noon, evening), each run is an interval with *variable* start times and durations on a continuous timeline.  
- Gantt charts visually show intervals as horizontal bars.

### Data Characterization: Time Scale, Scope, and Arrangement

- **Combination** is possible. For instance:
  - **Continuous timescale + Interval scope** → Gantt charts
  - **Discrete timescale + Point scope** → Bar chart with discrete time steps  
- Each combination suggests different chart options or specialized visualizations.

### Tasks in Time-Oriented Data

1. **Finding homogeneous regularities in noisy data**  
   - Look for *trends*, *periodicities*, *sequences*.

2. **Finding anomalies in otherwise regular data**  
   - Look for *outliers*, *fluctuations*, *irregularities*.

- **Examples**:
  - **Trends**: Is the data trending up/down over time?
  - **Periodicity**: Seasonal cycles, repeating patterns (e.g., wave-like temperature changes).
  - **Sequences**: Recurrent patterns (like certain sensor readings before a machine fails).
  - **Outliers**: An unexpected spike or slump at a certain time that breaks the usual pattern.

### Mapping Time to Visual Attributes

- **Position (x-axis)**: Most common (e.g., line charts).
- **Length**: If dealing with durations.
- **Angle**: Clock face or radial layout (e.g., circular timeline, daily schedule on a clock).
- **Connected Scatter Plot**: *Connect* data points in chronological order.
- **Color**: Typically avoided for time unless other channels are unavailable (e.g., travel-time map using color scale for time to next city).

**Avoid** using shape for time ordering (shape is an identity channel, not a magnitude channel).

### Small Multiples vs. Animation

- **Small multiples** (faceting by time):
  - Each time slice is a separate small chart (e.g., month-by-month heatmap).
  - Advantages: Easy to compare across time slices *simultaneously*.
  - Drawback: Each small chart can get *very small* if you have many slices.

- **Animation** (time mapped to *display* time):
  - Can show large, detailed visuals but you have to *remember* or *scrub back and forth* to compare different times.
  - **Gapminder example**:
    - Bubbles are animated over time, but selected countries produce **connected scatter plots** behind them, letting you see the *trajectory* over time while the rest remain a dynamic backdrop.

### Line Charts and Horizon Graphs

- **Line Chart**: Very common for continuous data vs. time on x-axis.
- **Horizon Graphs**:
  - Pack multiple time series with minimal vertical space by “folding” the graph.  
  - Steps to create a horizon graph:
    1. Start with an area chart for each time series.
    2. Bin or break the y-axis range into bands (color-coded).
    3. Flip negative parts (if any) so they share the same baseline, using color to distinguish negative vs. positive.
    4. Compress (fold) the chart layers vertically.
  - **Benefit**: Very space-efficient for large sets of time series.

### Calendar Visualizations

- **Usage**: If analyzing data on a daily basis while also caring about monthly or weekly patterns.  
- **Example**: Each day in a grid. Inside each day’s box, show a mini-plot (like an area chart for intraday patterns). Summaries for each row (week) or a month total can be appended on the right or bottom.

### Time Intervals (Gantt Charts and Triangular Model)

1. **Gantt Charts**:
   - Bars represent intervals [start, end] on a horizontal time axis.
   - Great if you have ~a few dozen intervals.  
   - Can become huge or unwieldy with hundreds or thousands of intervals.

2. **Triangular Model**:
   - **Key trick**: Convert each interval into a *point* instead of a line segment. Saves space.
   - **Axes**:
     - x-axis = interval start  
     - y-axis = interval *duration* (end – start)
   - The interval’s end can be read if you look at `(start + duration)`.
   - **Benefits**:
     - If two intervals start at the same time, they lie on the same vertical line.
     - If they end at the same time, they lie on a diagonal line.
     - If an interval is contained within another, you can see that by relative positions in the 2D space.
   - Extensible to *continuous data* by grouping into intervals at different levels (e.g., 1s, 2s, 4s, etc.), then color-coding.

### Event-Based Data (TimeMaps, Arc Diagrams, etc.)

- **Arc Diagrams**:
  - Used for finding repeated *patterns* in sequences (like repeated motif in music, or repeated precipitation patterns).
  - Arcs connect repeated segments across a timeline.

- **TimeMaps**:
  - **Plot each event as one dot**, where x = time since last event, y = time until next event.
  - Reveals bursts of activity vs. idle gaps, *purely from timing* (no text analysis needed).
  - **Example**: Tweets from Barack Obama.  
    - By measuring intervals before & after each tweet, “first tweet of the day” or “last tweet before a big gap” stand out in certain corners of the scatterplot.
    - Also used to detect *Twitter bots* (robotic, unnatural intervals).

### Interaction Techniques: Stack Zooming and ChronoLens

1. **Multi-level / Stack Zooming**:
   - You create multiple zoom levels stacked vertically.
   - Each selection at a higher (overview) level expands into a new sub-panel below, maintaining context.
   - The user sees the entire hierarchical zoom “stack” at once.

2. **ChronoLens**:
   - A more advanced interactive approach:
   - Lenses can be placed on top of the timeline or another lens, performing operators like magnify, cross-correlation, histograms, etc.
   - **Hierarchical**: You can feed the result of one lens as input to another lens (“child lens”).
   - Great for *exploratory time-series analysis*.
   - You can group lenses, move them together in time, re-scale them, and always see an updated pipeline of transformations.

---

## Visualization Critiques

### Critique 1: America’s Religious Landscape Pie Chart

**Original Chart**  
> Claim by the chart’s caption: “No religious group is larger than the unaffiliated,” with a pie chart mixing both religion and ethnicity.

#### Chart Type & Data
- **Type**: Pie chart (subdivided by color/lightness).
- **Data**: Grouped categories of religion + ethnicity with percentages.

#### Main Problems
1. **Mixing Religion and Ethnicity**  
   - The chart lumps denominational groups (Catholic, Protestant, etc.) *split by ethnicity* (Black, White, Hispanic) *but* the “unaffiliated” group is **not** subdivided by ethnicity.  
   - This artificially inflates the “unaffiliated” slice visually, because no further breakdown is given.
2. **Rounding Errors**  
   - The percentages add up to 102% (or don’t sum neatly to 100%).
   - Could have easily given one decimal or displayed more precise numbers to sum correctly.
3. **Color Encoding**  
   - Color hue and brightness used in ways that can imply an order, but the data is nominal.  
   - Also not colorblind-safe. Green/orange fade into each other.
4. **Effectiveness**  
   - A typical pie chart problem: *comparing slices across multiple subdivisions is cumbersome*.  
   - They want you to see “unaffiliated is biggest,” but the data grouping is misleading.  
   - They do not re-split the unaffiliated by ethnicity, so you can’t do an apples-to-apples comparison.

#### Suggested Improvements
- **Sunburst / Multi-level Pie (Icicle)**:
  - Inner layer: main religions + “unaffiliated.”  
  - Outer layer: subdivide each religion **by** ethnicity (including unaffiliated).
- **Simple Single-Level Pie**:
  - If the main message is religion share, **don’t** mix ethnicity. Show purely religious groups in the pie.
- Or:
  - If the main message is about how each religion subdivides by ethnicity, keep the chart consistent for *all* slices (including unaffiliated).

### Critique 2: Bivariate Map of Wisconsin

**Original Chart**  
> A choropleth map showing *median household income* by county (encoded in color), overlaid with circles sized by the *absolute* number of high school (HS) degree holders.

#### Chart Type & Data
- **Map**: Choropleth for one attribute (household income).  
- **Overlay**: Circles for HS graduates (second attribute).

#### Main Problems
1. **Not Normalized**  
   - The circle size shows the *absolute* number of HS graduates, effectively showing *population* distribution.  
   - A county with more total people will yield a bigger circle, regardless of the *rate* of high school graduates.
2. **Circle Size by Diameter Instead of Area**  
   - The legend lumps radius/diameter steps to represent the data, which is visually misleading.  
   - If using circles to represent magnitude, the *area* (πr²) must scale with the data, not the diameter.
3. **Choropleth Binning**  
   - The income bins are inconsistent or unclear (not equal intervals, apparently not quintiles either).
   - Hard to interpret or compare counties due to questionable bin definitions.
4. **Placement Overlaps**  
   - Circles are somewhat misplaced, overlapping county boundaries, making the map harder to read.

#### Suggested Improvements
- **Normalize HS data** (e.g., “% of population with HS degree”).  
- **Scale circle *area*** to reflect the quantity.  
- **Use consistent binning** for the median income:
  - Could use standard breaks (e.g., $10k increments) or actual distribution-based breaks (like quintiles) but do so transparently.  
- **Improve bubble placement** or use centroid labeling or a dynamic approach (or smaller glyphs, or separate data views).

---

## References & Links Mentioned

1. **Parallel Coordinates and Negative Correlation**  
   - General concept used in many InfoVis textbooks (e.g., *The Visual Display of Quantitative Information*).
2. **Marimekko Charts / Mosaic Plots**  
   - *Meeks & Harrison*, *Heer et al.* “Marimekko: Uses and differences from mosaic plots.”  
3. **Parallel Sets**  
   - Example: Titanic dataset.
4. **Trellis Plots**  
   - “Subdividing data into small subsets” – [Lattice/Trellis Graphics in R, Cleveland 1993].
5. **Van Wijk’s Model**  
   - “Van Wijk, J. J.: The Value of Visualization,” *IEEE Visualization 2005*.
6. **Time Visualization**  
   - *TimeViz Browser* at [timeviz.net](http://timeviz.net/) (companion for the *Visualizing Time-Oriented Data* book).
   - **Spiral Visualization** (Christian Tominski)  
   - **Arc Diagrams** (often for text/music repeating patterns).
   - **Gapminder** (Hans Rosling).
7. **ChronoLens** Video**  
   - Interactive lens-based tool for time series analysis.
8. **America’s Religious Landscape Chart**  
   - Source: [Pew Research Center Report](https://www.pewresearch.org/religion/) (originally has partial or unclear methodology).
9. **Bivariate Map of Wisconsin**  
   - No direct link given for the original, but concept example for *choropleth + symbol overlay*.

---

