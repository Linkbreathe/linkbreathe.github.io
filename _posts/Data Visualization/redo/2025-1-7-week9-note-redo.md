---
title: DAVI Visualizing Time-oriented Data Redo
author: <weixiong_626>
date: 2025-1-7 01:16:00 +0200
categories: [Data Visualization,Redo]
math: true
tags: []
---
# Lecture Notes: Time Visualization and Visualization Critiques

**Course**: DAVI (Data Visualization)  
**Professor**: *(“the professor” as referred to in the transcript)*  
**Date**: *(Exact date not specified in the transcript)*

Below are detailed notes capturing **everything** the professor covered, in chronological order, along with relevant sketches, explanations, and critiques. These notes include:

- Recap questions and their answers
- Discussions on various charts (parallel coordinates, mosaic plots, marimekko charts, trellis plots, etc.)
- Detailed exploration of **time-oriented data visualization** (including tasks, data characterization, and multiple examples)
- Interactive techniques (e.g., stack zooming, ChronoLenses)
- Two **visualization critiques** (analyzing faulty graphs)

Use these notes to thoroughly understand the concepts, examples, and tips mentioned by the professor.

---

## 0:00 – 0:49: Introduction and Weekly Plan

- **Greeting**: The professor says, “All right. Good morning. Good morning everyone.”
- **Plan for the week**:
  - **Today**:
    - Time visualization (visualizing temporal data).
    - Two visualization critiques (in the third hour).
  - **Wednesday**:
    - Design exercises in preparation for an industry customer visiting next week.
  - Emphasis on “getting creativity engaged and activated” before the industry guest arrives.

- **Lecture Recap**: The professor will do a short lecture recap using Mentimeter (“mentees”).  
- The code is at the top, or students can use the Brightspace link to join.  

---

## 0:50 – 3:05: Recap Question 1

> **Question**: In a parallel coordinates (perl coordinates) plot, the shown pattern indicates:  
> - A cluster  
> - A positive correlation  
> - A negative correlation  
> - A high variance of spread  

- **Answer**: Negative correlation.
- **Explanation**:
  - In parallel coordinates, if two attributes are negatively correlated, high values on one axis align with low values on the other axis and vice versa, forming a star-shaped crossing pattern.
  - A positive correlation would look more like a “rather horizontal line” (attributes not crossing).
  - High variance of spread refers to a single variable’s variance, not the relationship between two variables.
  - It is **not** a cluster, because that pattern specifically indicates negative correlation.

---

## 3:06 – 4:07: Recap Question 2

> **Question**: “What chart is this?” (Shows a screenshot with subdivided widths and heights)  
> - Stacked Bar Chart  
> - Stacked Column Chart  
> - Mosaic Plot  
> - Marimekko Chart  

- **Answer**: **Marimekko chart** (also a “flavor” of a mosaic plot).
- **Key Points**:
  - **Mosaic plots** are for **categorical** data (splitting categories along x and y to subdivide rectangles).
  - **Marimekko charts** apply a similar principle to **quantitative** data by binning the data range into intervals (like quartiles or equal bins). Each bin acts as a category subdivision.
  - Compare to stacked bar/column charts:
    - In stacked charts, all columns have the **same width**. A Marimekko or mosaic plot adjusts widths (and possibly heights) based on proportions, so widths can vary.
  - Online, “mosaic plot” and “marimekko chart” are often used interchangeably.
  - The big clue is the variable widths and heights subdividing the space.

---

## 4:08 – 5:37: More on Marimekko vs. Mosaic

- **Why not “stacked bar chart”**?
  - Because stacked bar charts keep a uniform width (or height), while mosaic/Marimekko subdivide horizontally and vertically in proportion to the data.
- **Remember**: 
  - *Mosaic = categorical.*  
  - *Marimekko = binned quantitative data → effectively “categorical” after binning.*  

---

## 5:38 – 6:06: Recap Question 3

> **Question**: Parallel sets are used for:  
> - Text data  
> - Discrete data  
> - Continuous data  
> - Qualitative data  

- **Answer**: Qualitative (categorical) data.
- **Explanation**:
  - Parallel sets are an alternative to mosaic plots for multiple categorical variables. Example used: The Titanic dataset (male/female, survived/perished, passenger class, crew, adult/child, etc.).
  - You *can* use parallel sets for numeric data only if you **bin** the numeric values into categories/intervals (e.g., age grouped into brackets).
  - They **originally** target categorical data.

---

## 6:07 – 7:07: Recap Question 4

> **Question**: The trellis plot:
> - (A) Benefits from brushing and linking  
> - (B) Subdivides the dataset  
> - (C) Is mirrored around the main diagonal  
> - (D) Works only for categorical data  

- **Answer**: (B) It subdivides the dataset.
- **Details**:
  - Trellis plots group subsets of data into small multiples laid out in a grid (e.g., subdividing by categories or binned continuous variables).
  - They **do not** benefit from brushing and linking in the same way as scatterplot matrices do, because each small subplot has its own unique subset (no item belongs to multiple panels).
  - **Mirroring around the main diagonal** is for scatterplot matrices, **not** trellis plots.
  - Trellis plots are **not** limited to strictly categorical data; continuous data can be binned to create “trellis panels” as well.

---

## 7:08 – 8:00: Recap Question 5

> **Question**: In Fun(B)ike’s model of visualization, which aspect of the visualization pipeline is detailed?
> - The mapping step  
> - The interaction  
> - The use of the visualization  
> - The “understand” step  

- **Answer**: The **use** of the visualization.
- **Explanation**:
  - The standard visualization pipeline (raw data → transformations → mapping → rendering → view) is quite condensed about what the *user* actually does.
  - Fun(B)ike’s model expands on how users perceive the image, generate knowledge, explore, refine specifications, etc. It **blows up** the “user” part of the pipeline.

---

## 8:01 – 9:15: Examples and Clarifications

- The professor revisits the difference between the basic pipeline (data → visualization → user) and **Fun(B)ike’s** approach, which highlights knowledge generation, perception, exploration as separate steps.
- **One note**: The “understand” step is from the “design activity framework,” not from the standard pipeline or from Fun(B)ike specifically.

---

## 9:16 – 9:52: End of Recap, Transition

- **Top quiz performers**: Mentions “Eleazar” among top quiz scorers (just a casual mention).
- Moves on to the main topic: **Time Visualization**.
- Clarifies that from now on, each lecture condenses an entire research field (e.g., time-oriented data, geospatial data) into roughly 90 minutes.

---

## 9:53 – 10:40: Reference Books on Time Visualization

- Shows two books:
  1. *Visualizing Time*
  2. *Visualization of Time-Oriented Data* (by Wolfgang Aigner, Silvia Miksch, Heidrun Schumann, Christian Tominski).
- Mentions that it is from Springer, free via university network; one is completely open access.
- Recommends **Visualization of Time-Oriented Data** because two authors overlap with the main course textbook, ensuring consistent coverage.

---

## 10:41 – 11:33: Why Time Visualization?

- Many real-world data sets have a temporal dimension. 
- We see many **bad** time visualizations. Need to know how to do it properly.
- The professor references an “egregious” example from a previous lecture to underscore the importance of learning correct techniques.

---

## 11:34 – 12:00: Outline for Today’s Time Visualization

1. **Principles** of time visualization (data and task characterization).
2. **Time intervals** visualization (specific techniques).
3. **Event-based** data (briefly).
4. **Interaction** techniques for time-oriented data (briefly).

---

## 12:01 – 13:02: Principles: “What is Time?”

- Philosophical question, but from a data perspective we consider **timescales**:
  - **Ordinal**: We only know the order (before/after) but not exact intervals.
  - **Discrete**: Distinct time steps with measurable intervals (but data might only exist at those steps).
  - **Continuous**: Time flows with possible interpolation (e.g., measuring temp across the day).

- We typically do **not** have a purely categorical scale for time, because time intrinsically has an order.

---

## 13:03 – 14:09: Time Scope

- Distinguishes between **time points** vs. **time intervals**:
  - A reading or activity that’s valid for one “instant” (e.g., a measurement at midnight).
  - A reading or activity valid over a range (e.g., drilling a hole from 10:00–10:15).
- Sometimes measurements are taken discretely, but we *treat them as intervals* valid until the next measurement arrives.

---

## 14:10 – 15:00: Time Arrangement

- **Linear**: Our usual timeline, continuous from past to future.
- **Cyclic**: Time repeats in cycles (days, seasons, fiscal years, etc.).
- **Branching**: Especially in version control (Git), we have forks, merges, separate branches of time.

---

## 15:01 – 16:09: Time Granularity

- Time can be measured by days, weeks, months, years, etc.  
- A calendar is effectively multiple granularities.  
- Important because tasks might require seeing data at multiple scales (daily/weekly/yearly).

---

## 16:10 – 16:53: Data Examples

- **Example**: 
  - Left chart: *Continuous time scale, time points (scope)* → typically a line chart with dots at measurement times.  
  - Right chart: *Discrete time scale, intervals (scope)* → bar steps that remain constant until the next measurement.  

- **Question**: Can we combine a **continuous** time scale with an **interval** scope?  
  - **Yes**, e.g., a Gantt chart: intervals that start anywhere on a continuous axis and last for variable lengths (like daily runs at random times).

---

## 16:54 – 17:58: Gantt Chart Example

- A Gantt chart is a prime example of:
  - Continuous timeline.
  - Activities with intervals that can start/end at arbitrary times.
- So it’s fully possible to have continuous + intervals.

---

## 17:59 – 20:03: Tasks with Temporal Data

- **All standard tasks** apply (finding extremes, reading values, etc.), plus:
  - **Synoptic tasks**: Observing **behavior** over time (changes, trends).
- Two general approaches:
  1. **Fluctuating data** → Searching for patterns or “homogeneity” (trends, periodicities, sequences).
  2. **Homogeneous data** → Searching for “heterogeneity” or divergences (outliers, irregularities).

### Homogeneity vs. Heterogeneity

- **Homogeneous scenario**: e.g., daily temperature is very predictable. Then a sudden deviant day or deviant pattern is what stands out.  
- **Heterogeneous scenario**: data is all over the place. You look for stable repeating motifs or trends within the noise.

---

## 20:04 – 22:08: Examples of Tasks

1. **Periodicities**: Repeating cycles (seasonal, daily, etc.). 
   - *Spiral visualizations* (like Tominski’s interactive example) to visually align cycles by adjusting the spiral’s period.
2. **Sequences**: Certain sequences of events that might signal something (like predictive maintenance in industrial settings).
3. **Outliers**: Data that breaks a normal pattern (e.g., one day the temperature doesn’t follow day-night cycle).
4. **Deviation from frequency**: “Jitter” in something that’s normally periodic.

---

## 22:09 – 23:33: Spiral Visualization Example

- Showed the “Spiral Chart” for daily doctor visits:
  - When the spiral turn is set to 4 weeks, we see a strong Monday spike repeating each cycle.
  - By adjusting the spiral’s period, we can discover/verify different cyclical patterns.

---

## 23:34 – 24:39: Arc Diagrams Example (Sequences)

- **Arc Diagrams**: Another technique to find repeating sequences or patterns over time.
- **Used with**:
  - Text or music (repeated themes).
  - Precipitation data (days with similar rainfall).  
- Large arcs can show that a pattern from Day X reoccurs at Day Y. 
- Great for discovering repeated motifs in otherwise messy data.

---

## 24:40 – 25:06: Summarizing Tasks → Visualization

- The specific tasks for time data (periodicity, sequences, outliers, etc.) guide which visualization technique is best.
- **Design** depends on **data** + **task**.

---

## 25:07 – 27:30: Examples of Time-Oriented Visualizations

- Website: **timeviz.net** (associated with the “Visualization of Time-Oriented Data” book).
- Contains a large gallery of time visualization techniques:
  - Arc diagrams, spirals, timeline-based charts, etc.
- End of the first half: “After the break, we’ll look at how to map time to visual attributes.”

---

## 27:31 – 29:21: Mapping Time to Visual Attributes (Post-Break Start)

- Revisits **Mackinlay’s ranking** of visual channels:
  - **Position** (x or y) is the most common for time (like a timeline).
  - **Length** is meaningful when dealing with durations.
  - **Angle** can represent time, e.g., clocks or radial cycle charts (like Apple Watch “activity rings”).
  - **Connection**: connected scatter plots (time as an implicit order, connecting data points in their chronological sequence).
  - **Size, color**: possible, though color for time is typically less effective unless everything else is “taken.”

---

## 29:22 – 31:03: Don’t Use Shape for Time

- **Shape** is an identity channel, not an ordered magnitude channel. 
- Time is inherently sequential/ordered, so shape is ill-suited to convey before/after or more/less.

---

## 31:04 – 34:37: Time → Color Example

- **Example**: “Travel time map” to a city center. 
  - Each pixel is colored by how long it takes to travel to the nearest city (≥ 50,000 population).
  - Here, we use color because **position** is already used by geography. **Size** also is not an option for single pixels.
- Usually, we avoid color for time since it’s not as precise for showing magnitude or direct comparison—**unless** no other channel is feasible.

---

## 34:38 – 36:08: Time to Display Space (Small Multiples) vs. Time to Display Time (Animation)

- **Option 1**: Mapping time to space → **Small multiples**:
  - Each time point becomes its own chart in a grid or sequence.
  - Easy side-by-side comparisons but can become very small as the number of time points grows.
- **Option 2**: Mapping time to “display time” → **Animation**:
  - One chart that changes over time. Good at showing transitions, but **harder** to compare different frames directly.
- They are not strictly exclusive. Rare example:
  - A combined approach, morphing from one small multiple to the next in an animated sequence.

---

## 36:09 – 38:01: Gapminder Example (Animation + Connected Scatter Plot)

- Hans Rosling’s Gapminder:
  - Each bubble = a country.
  - Income (x-axis), Life expectancy (y-axis).
  - Animation from year to year. 
  - **Selected countries** show a **connected trajectory** (connected scatter plot).
  - The rest remain just animated bubbles. 
  - This approach merges “history” (the line for selected countries) with ongoing animation (all countries shifting each year).

---

## 38:02 – 40:03: Line Charts for Time Series

- **Line chart** is extremely common for continuous time + continuous measurements.
- **Problem**: If you have many time series (e.g., 50, 100, 500), a standard line chart can get cluttered.

### Horizon Graphs

- A **space-efficient** approach for many time series.  
- **How it works**:
  1. Convert your series to an **area chart** with color encoding for positive/negative ranges.
  2. “Fold” or “stack” the chart by layering intervals on top of each other, flipping negatives upward in color-coded form.
  3. Compress the vertical space drastically.  
- Often you also **sort** these horizon graphs by similarity to see groupings.

---

## 40:04 – 42:00: Calendar-Based Visualization (Multiple Granularities)

- Example: A monthly calendar, each day having a mini time series (like an **area** for each hour).
  - Additionally, a daily **average** line in red. 
  - So you see day-level aggregates + within-day trends.
  - Possibly weekly summaries, too.
  - Let’s you see patterns at daily or weekly or monthly scale.

---

## 42:01 – 46:06: Visualizing Time Intervals

- **Gantt Charts**:
  - Common when there are intervals, each with start and end times, displayed as horizontal bars.
  - Works for 12–24 intervals but can break if you have hundreds or thousands.

### Triangular Model

- A technique to show many intervals as **points** instead of bars.
- **Coordinates**:
  - x-axis = *start time*  
  - y-axis = *duration* (end time − start time)  
- So each interval is just a single point in (start, duration) space.
- You can reconstruct:
  - If intervals overlap, whether they contain each other, etc., by referencing diagonal regions in the triangular space.
- Great for large sets of intervals; you can also do binning, color coding, heatmaps for dense overlap.

#### Reading the Triangular Model

- If two intervals are the **same**, they map to the **same point**.
- Intervals that “meet exactly” (one ends where the other starts) form patterns along diagonals.
- Containing intervals = points above/below one another in this coordinate system.
- Often accompanied by *interaction* to highlight relevant sets of intervals.

---

## 46:07 – 48:08: Triangular Model for Continuous Data (Multi-Resolution)

- Example: Monitoring a soccer player’s speed second by second. 
- They aggregate smaller intervals into bigger intervals in a pyramid-like structure (1s, 2s, 4s, 8s…).
- Color indicates average speed. The top row = entire match average, bottom row = second-by-second details.
- Called “multiresolution time interval visualization,” effectively layering multiple granularities in a triangular layout.

---

## 48:09 – 49:21: Event-Based Data

- Another category is **event-based** (like Twitter posts, error logs, etc.).
- Two main examples:
  1. *(Skipped in detail by the professor)*  
  2. **Time Maps**: A scatter plot approach for events.

### Time Maps

- **Coordinates**:
  - x = time since previous event
  - y = time until next event
- If an account tweets repeatedly in quick succession, those points gather near the origin on one axis, etc.
- **Example**: Barack Obama’s Twitter feed
  - Patterns: “First tweet of the day,” “Last tweet of the day,” bursts of frequent tweeting (clusters near small intervals).
- **Finding Twitter Bots**:
  - A bot’s pattern can form a suspiciously regular shape in the time map, revealing non-human behavior. 
  - No need for text analysis or follower counts—just the time stamps can suffice to identify bots.

---

## 49:22 – 51:16: Interaction Techniques for Time Data

- **Multi-level (Stack) Zoom** (Nicholas Empringham approach):
  - A top-level timeline: user draws a region of interest.
  - Below, that region is “blown up” in a new sub-panel. 
  - You can do multiple selections, each spawns another sub-panel, etc.
  - Great for retaining a high-level overview and multiple drilled-in views simultaneously.

---

## 51:17 – 55:31: ChronoLenses Demonstration

- **ChronoLens** is a powerful interactive approach:
  - Lenses are overlaid on time series for magnification, filtering, or transformations (like cross-correlation).
  - You can chain lenses (the result of one lens becomes the input of another).
  - Each lens can be zoomed, moved, resized, or locked in place.
  - Users can build an **analysis pipeline** visually:
    - E.g., parent lens outputs a smoothed series → child lens cross-correlates with another series, and so on.
  - Very advanced for exploratory tasks (searching for hidden patterns or relationships).

---

## 55:32 – 56:22: Summary of Time Visualization

- If you already know exactly what you want (a single metric to optimize), you may not need fancy visualization. But if you need to **explore**, see trends, or discover anomalies, interactive time visualization tools like ChronoLens are extremely valuable.

---

## 56:23 – 57:10: Next Week’s Topic

- **Geospatial data** (map-based visualizations).
- The course text has a short subchapter; recommended reading before class.

---

## 57:11 – 58:07: Literature References

- The professor shows references from the slides:
  - “Multi-Dimensional Data Visualization” (book),
  - “Visualizing Time,”
  - “Visualization of Time-Oriented Data” by Aigner et al.,
  - And presumably the standard textbook by Munzner or Tamara Munzner’s “Visualization Analysis and Design” (not mentioned by name here, but often used).

---

## 58:08 – 59:04: Transition to Two Visualization Critiques

- The class takes a short break and returns at 11:20 for critiques.

---

## 59:05 – 1:00:00: Visualization Critique #1: “America’s Religious Landscape”

- The professor displays a chart that was published with the message:
  > “No religious group is larger than those who are unaffiliated from religion.”
- Students get 3 minutes to examine individually, 3 minutes to discuss with neighbors.

---

## 1:00:01 – 1:02:00: Identifying the Biggest Problem

- Professor asks, “What’s the single biggest problem with this chart that *sinks* the ship?”

### Chart Description

- It’s a **pie chart** with multiple slices, each subdivided by ethnicity and religion in a single slice (e.g., “White Catholic,” “Black Protestant,” “Hispanic Protestant,” “White Evangelical,” etc.).
- The final major slice is “Unaffiliated,” presented as one big portion.

### Observed Problems

1. **Mixing religion and ethnicity** in the same “top-level slices,” artificially inflating or splitting certain groups (Protestants or Catholics) by race, while “Unaffiliated” is not subdivided.
2. The numeric totals sum to 102% (rounding error), which they didn’t even correct by going to decimal places.
3. Color usage might be questionable in terms of colorblindness or ordering.

---

## 1:02:01 – 1:03:22: Structured Critique

- **Chart Type**: Pie Chart.
- **Data**: Grouped categories + percentages.
- **Task**: Comparison overview, specifically to see if “unaffiliated” is the largest single group.
- **Expressiveness**:
  - The biggest offense: **They combined ‘White Catholic, Hispanic Catholic, Black Protestant, etc.’** while “Unaffiliated” is not broken down by race. So it’s inconsistent.
  - If they wanted a breakdown by race, do so **for every** group (including unaffiliated). If they only want a breakdown by religion, separate them consistently.  
  - The purposeful mismatch likely artificially drives home the point that “unaffiliated” is the largest group.

- **Color Issues**:
  - Possibly not colorblind-safe. 
  - They used color “hue + brightness” in a way that might imply an ordering that doesn’t exist.

- **Rounding**:
  - They show integer percentages that sum to 102%. Easy fix: show one decimal or correct the rounding.

- **Better Alternatives**:
  - A **Sunburst** or **Multilevel Donut**: put religion in the inner circle, subdivide ethnicities in the outer ring *if* it’s truly needed.  
  - Or do separate comparisons: one chart purely for religion, another purely for race.

---

## 1:03:23 – 1:05:30: Professor Checking the Source

- The professor attempts to open the original PDF to confirm sample sizes, methodology. 
- Possibly thousands of participants, not just 102 people. “102%” is clearly a rounding artifact.  
- Concludes: The chart is from a broader study, but the figure caption does not clarify. The discrepancy is unaddressed.

---

## 1:05:31 – 1:07:00: Visualization Critique #2: Bivariate Map of Wisconsin

- **Second example**: A map of Wisconsin’s counties (choropleth for median household income) with overlaid circles for “number of residents with a high school degree or equivalent.”

---

### 1:07:01 – 1:09:02: Big Problems

1. **No normalization**: Circles show the absolute number of high school graduates. This mostly reflects population size, not the proportion of graduates.  
2. **Circle size** mapped to diameter instead of area, causing a “lie factor.”  
3. **Binning** for household income is questionable or inconsistent. Possibly not quintiles, not equal intervals—unclear logic.

---

## 1:09:03 – 1:11:20: Detailed Critique

- **Chart Type**:
  - Choropleth map + overlaid circles (one numeric variable in color, another in circle size).
- **Data**:
  - Median household income (quantitative).
  - High school graduates (quantitative).
- **Task**:
  - Possibly correlation between education level and income, or to see distributions across the state.
- **Expressiveness**:
  - Using absolute numbers misleads the viewer into reading large circles just because of big cities (Milwaukee, Madison, Green Bay).
  - The circle scaling is done by diameter (not area), which visually overemphasizes differences.
- **Effectiveness**:
  - The color binning for household income is unclear; intervals are uneven, and it doesn’t look like standard quintiles or a known method.
  - Circle placement is also questionable; some circles overlap county borders unnecessarily.
  - For clarity, should have used proportion (percentage of population with HS degrees), and scaled circles by **area**.

- The professor references how a better approach might be:
  - Use recognized binning strategies (equal intervals, quantiles, or standard breaks used by major statistical agencies).
  - Possibly partial displacement or an “expanded map” approach so circles don’t overlap boundaries, or use interactive labeling.

---

## 1:11:21 – 1:12:30: Summary and Closing

- The professor provides links:
  - The map example source.
  - Info on quintile methods.
- Encourages students to attempt to compute the “lie factor” for that second chart (due to diameter scaling) as an exercise.

- **Class ends** with: “Have a nice week. See you on Wednesday for design exercises and the life-factor discussion.”

---

# Key Takeaways

1. **Time Visualization**:
   - Carefully define **time scale** (ordinal, discrete, continuous), **time scope** (point vs. interval), **time arrangement** (linear, cyclic, branching), and **granularity**.
   - Match tasks (finding trends, periodicity, outliers, etc.) to appropriate techniques (spirals, arc diagrams, calendar visualizations, triangular model, Gantt charts, time maps).
   - Consider advanced **interaction** (stack zoom, ChronoLens) to explore complex time series or event data.

2. **Common Pitfalls**:
   - Using color for time can be tricky—do it only if position, size, etc. are unavailable or you have a strong reason.
   - Mapping time to shape is rarely effective because shape is an identity channel, not an ordered channel.
   - Normalization of data and correct channel usage (e.g., diameter vs. area for circles) is crucial to avoid misleading visuals.

3. **Visualization Critiques**:
   - **Pie Chart (Religion + Ethnicity)**:
     - Don’t blend categories inconsistently.
     - Summation/rounding errors degrade credibility.
     - Often, a multi-level or partitioned approach (sunburst) is better than a single combined slice.
   - **Bivariate Map (Wisconsin)**:
     - Always confirm if data needs normalization (absolute vs. percentage).
     - For circles, use area for magnitude (not diameter).
     - Binning approach for choropleth must be transparent (equal intervals, quantiles, etc.).

4. **Exam Strategy**:
   - The professor consistently references **Mackinlay’s ranking**. It’s essential for critique: *“Why is length better than area for that data?” “Why is color suboptimal for quantity or time?”*
   - Summaries or references to the **visualization pipeline** or **Fun(B)ike’s** model show deeper reasoning in critiques.
   - **Life factor** from misusing diameter instead of area is a recurring trap in real-world charts.

---

## Final Words

- The lecture underscores **design** and **task** alignment. Time-oriented data requires special considerations: selecting the right **temporal arrangement** and **scale**. 
- The professor’s demonstrations show the breadth of time-based techniques, from simple line charts to advanced multi-resolution or interactive approaches.
- In critiques, always check for fundamental correctness (no mixing of categories, consistent binning, appropriate scale channels). 

_These notes capture the full lecture details, each step of the recap, the time-visualization content, and the critiques. Use them for reference and deeper review._ 
