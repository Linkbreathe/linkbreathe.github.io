---
title: DAVI Visualization Design redo
author: <weixiong_626>
date: 2024-12-10 12:55:00 +0200
categories: [Data Visualization,Redo]
math: true
tags: [DIKW Hierachy, Data Content, Data Context,Task Abstraction, Andrienko]
--- 

**Topic:** Transitioning from Interaction Techniques to Data Visualization Design Processes, Data & Task Abstractions, and the Design Activity Framework



## Introduction & Recap

- The professor starts by greeting the class and notes that today’s lecture is structured into two parts:
  1. Briefly finish the few leftover slides from the "Interaction" lecture (previous week).
  2. Dive into the design process for data visualization.

- As usual, there is a short quiz at the beginning of the lecture to “wake everyone up.”

### Public Service Announcement: Danish National Championships in AI
- The annual Danish National Championships in AI are taking place this fall.
- There is a prize of around 40,000 kroner.
- Students can participate individually or in teams.
- The professor suggests leveraging visualization plus machine learning or deep learning skills from current courses.

---

## Quiz Review

**Context:** The quiz focuses on concepts from the previous lecture related to interaction techniques.

**Questions and Answers:**

1. **Question:** How do we call the diagrams that show a zoom level on the y-axis and a simplified screen space on the x-axis?
   - **Possible Answers:** Angular plots, Two and a half (2.5D) representations, Sunburst, or Space-scale diagrams.
   - **Correct Answer:** Space-scale diagrams.
   - **Explanation:** These diagrams show different zoom levels over space. Sunburst diagrams are related to tree data, not space-scale. Angular plots was a made-up term. 2.5D representation is not correct here.

2. **Question:** Interactive lenses are an example of which principle?
   - **Possible Answers:** Overview and detail, Pan and zoom, Drag and drop, Focus and context.
   - **Correct Answer:** Focus and context.
   - **Explanation:** Interactive lenses embed a high-detail focus region within a contextual overview. Overview+detail separates the two views; focus+context integrates them into one.

3. **Question:** The combination of panning and zooming, giving both origin and destination in view, is called what?
   - **Possible Answers:** View switching, Smooth navigation, Interactive lens, Overview and detail.
   - **Correct Answer:** Smooth navigation.
   - **Explanation:** Smooth navigation (Nui & FatBike concept) provides a fluid transition between two viewpoints, ensuring both start and end points remain visible during the navigation.

4. **Question:** Which uses temporal separation for overview and detail?
   - **Possible Answers:** Interactive lenses, Zooming, Brushing and linking, Minimap.
   - **Correct Answer:** Zooming.
   - **Explanation:** Zooming requires time passing to move from an overview to a detailed view. Interactive lenses are focus+context, brushing and linking is for multiple coordinated views, and a minimap is spatial separation, not temporal.

5. **Question (Technical Issues):** Another question about lenses and parallel pipelines.
   - The professor clarifies that interactive lenses are realized using a parallel visualization pipeline, not overview+detail, not brushing and linking, etc.

**Summary of Quiz Concepts:**
- Space-scale diagrams represent zoom and space in a 2D plot.
- Interactive lenses are a focus+context technique, not overview+detail.
- Smooth navigation combines panning and zooming to keep origin and destination visible.
- Zooming is a temporal approach to overview+detail.
- Interactive lenses are realized using a parallel visualization pipeline approach for flexibility and stackability.

---

## Tangible Interaction and Pseudo-Haptics

### Tangible Interaction
- Example: A multi-touch table with physical rings (3D printed) placed on the table surface.
- The table detects each ring (via markers).
- Each ring acts as a “lens”: placing a ring over a map switches the underlying layer or view (e.g., from satellite to street map), turning it like a dial adjusts blend parameters.
- Multiple rings can be stacked to combine lens functions (smart lenses).
- Tangible props can facilitate exploration in ways a mouse cannot, lowering barriers to entry for non-technical users.

### Another Example: Paper Prop for 3D Interaction
- Using a depth-sensing camera and a coded piece of paper rolled up into a cylinder.
- Users manipulate 3D microscopy data (fibers in tissues) by moving and rotating a paper prop.
- This tangible user interface helps domain experts intuitively explore complicated 3D data.
- Although advanced, such interfaces show how tangible interaction can simplify complex navigation tasks.

### Pseudo-Haptics (Lightweight Haptics)
- Without special hardware, modify cursor speed or cursor size to “feel” data density.
- Example: Slowing cursor movement over dense data regions (like a “bump”).
- Changing cursor size for fine-grained navigation.
- Similar to “snap to grid” in PowerPoint—an existing example of pseudo-haptics.
- Useful for subtle guidance and improving data exploration without extra hardware.

---

## Transition to Data Visualization Design Process

- Brief mention of software engineering slides (postponed).
- Main focus now: The design process for data visualization.

---

## Understanding the Visualization Problem

### Data-Information-Knowledge-Wisdom (DIKW) Hierarchy
- **Data:** Raw facts, measurements, or observations.
- **Information:** Derived from data (distributions, relations, patterns).
- **Knowledge:** Understanding causal relations, building models, functional dependencies.
- **Wisdom:** Using knowledge for predictions, decision-making.

In visualization, we mostly deal with turning **data** into **information** that supports gaining **knowledge** and possibly **wisdom**.

### Data Context vs. Data Content
- **Data Context (Domain/Reference Space/Independent Variables):** Frame of reference (e.g., time, space, patient ID) that relates observations.
- **Data Content (Attribute Space/Dependent Variables):** Actual measured values (e.g., temperature, CO2 concentration).

Data often modeled via **graph topologies**:
- **Regular/Irregular grids**
- **Networks, Hierarchies**

For continuous fields from sparse points, use interpolation (e.g., **Inverse Distance Weighting**) to estimate intermediate values.

---

## Task Abstractions

- A **Task** is what the user wants to do with a visualization.
- Task lies between:
  - User's **intent** (“explore data”) and
  - Actual **interactions** (“click”, “drag”).
- Mid-level tasks: like Shneiderman’s mantra (“Overview first, zoom & filter, details on demand”) or simpler tasks like identify, locate, compare.

### Types of Tasks
- **Elementary tasks:** Identifying a value, locating items by value, comparing two points.
- **Synoptic tasks:** Observing patterns, trends, clusters over sets of data, not just single points.
- **Andre & Andrew’s Framework:** 
  - Lookup & Inverse Lookup
  - Comparison & Inverse Comparison
  - Relation Seeking (given relations, find data points)
  - Synoptic equivalents: Pattern definition, pattern search, etc.

**Why tasks matter:**  
They help ensure **expressiveness** (matching data types to visual encodings) and **effectiveness** (visualization supports intended user tasks).

---

## Design Processes for Visualization

### Design Activity Framework
1. **Understand:** Determine the visualization problem, user needs, data/task abstractions.
   - Outcomes: Visualization requirements.
2. **Ideate:** Generate visualization ideas.
   - Use sketching, low-fidelity mockups.
   - Outcomes: A set of possible solution ideas.
3. **Make:** Create prototypes (interactive hi-fi prototypes).
   - Outcome: Testable visualization prototypes.
4. **Deploy:** Implement final, robust visualization systems.

**We focus on the Understand/Ideate/Make steps.** Deploy is often a separate engineering challenge.

---

## The Five Design Sheet Method (for Ideation)

1. **Brainstorm Sheet:**
   - Generate ~15-20 rough idea sketches.
   - Filter out non-viable ones.
   - Categorize similar ideas.
   - Combine and refine to pick 3 main ideas.

2. **3 Separate Idea Sheets (2nd-4th sheets):**
   - For each chosen idea:  
     - Show big picture layout.
     - Highlight key operations, interactions.
     - Show look & feel of crucial elements.
     - Discuss pros & cons.

3. **Realization Sheet (5th sheet):**
   - Chosen final design.
   - More detailed plan: algorithms, data handling, milestones, feasibility.

**Benefits of 5 Design Sheets:**
- Structured creativity for non-artists.
- Documented design rationale (proof of work).
- Facilitates client communication and possible billing for partial work.

---

## Guiding Design Principles (Andy Kirk)
1. **Functional Design:** Function before form. Must work correctly first.
2. **Deliberate Design:** Every element must have a justified purpose.
3. **Intuitive Design:** Should not be more complex than the data demands.
4. **Ethical Design:** Do not mislead the viewer.

---

## Evaluation (Munzner's Nested Model)
- **Layers:** Domain situation → Data/task abstraction → Visual encoding → Algorithms.
- **Threats and Validation:** Each layer has potential pitfalls; validate accordingly.
   - Algorithms: Test complexity, runtime.
   - Visual encoding: Test for overplotting, clarity.
   - Tasks: User studies, feedback loops.

### Benchmarking
- Standard datasets, pixel-based metrics (e.g., overplot percentage).
- Graph metrics (edge crossing counts).
- **User Studies:** Measure task completion time, error rates, user experience.
- **Field Studies:** Demonstrate how new visualizations lead to novel discoveries.

---

## Visualization Critiques (Examples Shown by the Professor)

**Example 1: Parallel Sets Visualization**
- Data: People displaced by disasters and conflicts.
- Chart type: Sankey-like parallel sets.
- Good aspects: Color choice works in grayscale, corrected shape to reduce perceptual illusions.
- Critique:
  - The chosen chart type (parallel sets) is meant for showing cross-correlations, but this chart does not show meaningful cross-correlations.
  - The data categories and “other” grouping are inconsistent.
  - Ethical choice of showing absolute numbers vs. normalization is context-dependent; here absolute counts emphasize humanitarian impact.

**Suggested Improvement:** Use simpler stacked bar charts for clarity if no cross-correlations are needed.

**Example 2: Complex Connected Scatterplot for COVID Data**
- Data: COVID deaths over time, multiple countries.
- Chart complexity confused readers; considered too complicated.
- Issues:  
  - Negative values shown in parentheses (hard to interpret).
  - Non-colorblind-safe color encoding.
  - Overly smoothed data can be misleading.
  - Connected scatterplots are among the most complex chart types; must provide reading guides.
- Recommended approach: Simpler line charts, small multiples, or clear normalization.

---

## Conclusion

- We finalized discussion on interaction techniques and introduced tangible and pseudo-haptic interactions.
- Main focus: Understanding visualization problems via data and task abstractions.
- Learned about the design activity framework and how to ideate systematically using the Five Design Sheet method.
- Discussed guiding principles for good visualization design and evaluation strategies.
- Practiced critique on complex real-world visualizations, emphasizing the importance of clarity, appropriateness of chart types, and ethical considerations.

---

**Next Lecture:** Data Pre-processing.  
**Preparation:** Read Chapter on “Preparing Data Tables” from “Making Sense of Data, Part 1.”

**Reminders for the Next Session (Wednesday):**
- Bring your data and task abstraction for your project.
- No need to bring the dataset itself, but know your data’s attributes, types (quantitative, categorical, etc.), and tasks.
- You will sketch visualization ideas using the Five Design Sheet method.

---
