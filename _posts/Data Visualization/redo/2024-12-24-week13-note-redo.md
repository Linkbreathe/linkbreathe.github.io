--- 
title: DAVI Visual Analytics - redo
author: <weixiong_626> 
date: 2024-12-23 14:30:00 +0200
categories: [Data Visualization,Redo] 
math: true 
tags: []  
---

## 1. **Introduction to Visual Analytics**

1. **Definition and Origin**
   - *Visual analytics* (VA) combines automated (computational) analysis techniques with interactive visualizations to support understanding, reasoning, and decision-making on large and complex data sets.
   - Jim Thomas (often credited as a founder of the field) defined VA as “detecting the expected and discovering the unexpected” by merging data mining/AI with human cognition and decision sciences.
2. **Why Visual Analytics?**
   - Human vs. Computer Capabilities
     - Computers excel at: *data storage, numerical calculation, data mining, AI*.
     - Humans excel at: *cognition, creativity, common-sense reasoning, contextual knowledge*.
   - Visualization as Communication Channel
     - Visual interfaces allow two-way communication between human and machine:
       1. **Machine** outputs partial or complete results visually.
       2. **Human** observes, interprets, applies domain knowledge, and interacts.
       3. **Machine** updates computations/outputs based on interactions.
3. **Examples of Visual Analytics**
   - Interactive Clustering
     - *K-means example:* The user drags states between clusters, thus *actively teaching* the system what “Midwestern States” means. Real-time re-clustering + updated visual layout demonstrates VA in action.
   - Document Retrieval & Exploration (Pivot Slice)
     - A system that visually explores metadata (authors, venues, keywords) in scholarly publications. Users drag-and-drop keywords, conferences, or authors to form new queries without typing raw SQL. Interactive updates show re-groupings and citation patterns—again illustrating VA’s blend of *computation + direct user interaction*.
4. **Guiding Principles (Parallels to General Visualization Principles)**
   - Appropriateness Principle
     - Provide neither more nor less information than needed for the problem. Mirrors the *effectiveness* principle (no information overload / no loss of critical info).
   - Naturalness Principle
     - Representation should “match” the data. Corresponds to *expressiveness*: use appropriate channels (size, position, color) that align with the data’s scale (quantitative, categorical, etc.).
   - Matching Principle
     - Align the visualization with the *task at hand*. Similar to *task-effectiveness* in classic visualization guidelines.
   - Apprehension Principle
     - The visualization must be accurately and easily perceived (avoid chart junk, ensure clarity).

------

## 2. **Progressive Visual Analytics**

1. **Motivation**
   - Traditional VA can stall if computations on large data or complex algorithms take too long. Users must wait for a “final result,” breaking their *analytic flow*.
   - *Progressive Visual Analytics (PVA)* addresses this by producing *meaningful intermediate results* (i.e., partial approximations) quickly—so the user can continue exploring without waiting for everything to finish.
2. **Fundamental Idea**
   - Human Time Constraints
     - Empirical studies show:
       - *<100 ms* needed for *direct interaction feedback* (e.g., moving a lens).
       - *<1 s* for *indirect interaction feedback* (slider updates, query parameters).
       - *<10 s* for *command-line or “bigger operation” style* tasks.
     - Delays beyond these thresholds harm analytic flow, reduce data coverage, and lower insight discovery rates.
   - Progressive Computation
     - Return *draft / partial* results quickly (e.g., in ~100 ms) so the user sees something.
     - Keep refining in additional *increments or iterations* (seconds, tens of seconds).
     - Potentially run all the way to a final “complete” result—unless the user *terminates early* because they’ve seen “enough.”
3. **Two Principal Modes of Progression**
   1. Incremental (“Data Chunking”)
      - Gradually include more data (e.g., 10%, 20%, … 100%). Quality is similar, but quantity of data grows with each chunk.
   2. Iterative (“Process Chunking”)
      - Use the *entire dataset* from the start, but refine the *algorithmic iterations* step by step. Early iterations produce crude partial layouts/results; further iterations refine quality.
4. **Stages of Progressive Results**
   - **tresponset_\text{response}tresponse**: First meaningful partial result (~100 ms). Basic shape, rough draft of the data so the user sees “something.”
   - **treliablet_\text{reliable}treliable**: Mature partial result. Enough data/iterations to spot patterns or stable clusters.
   - **tstablet_\text{stable}tstable**: Last significant partial result. No major changes in the visual structure; further computation only fine-tunes.
   - **tcompletet_\text{complete}tcomplete**: Final output if we let it run to the end. In practice, often not needed or is identical to stable.

------

## 3. **Usage Scenarios (“Roles”) in Progressive Visual Analytics**

1. **Observer**
   - Wants the *final* result but appreciates “watching it form” to build *trust* and *understanding* that it’s still *alive* (vs. a black-box).
   - Typical analogy: *A fancy loading bar.*
   - Key interaction: *Pause/Play*. They might pause at an intermediate stage to examine how the layout (or partial computation) has progressed, then resume.
2. **Searcher**
   - Seeks a *trustworthy intermediate result* “good enough” to solve a simpler question (e.g., “Which day should I fly to avoid delays?”).
   - Analogy: *Search engines (Google, Amazon)*. We rarely scroll to page 20 if page 1–2 already suffices.
   - They rely on quick partial results to prune or focus the search space. Can “terminate early” once they have enough info.
3. **Explorer**
   - Less about *final or partial results*, more about *understanding the process itself*—often performing *what-if* scenarios or *parameter sensitivity analyses*.
   - Analogy: *Physics or Flood Simulations*, branching multiple scenarios. E.g., “Where to place sandbags during a possible flood?” Then *interactively tweak* water flow, dam placement, etc.
   - Needs maximum flexibility to parametrize and steer the algorithm on-the-fly.
   - May “branch off” parallel progressions (“multiverse analysis”) and kill the uninteresting ones.

------

## 4. **Interaction Design in Progressive VA**

1. **Pause / Resume / Jump**
   - *Pause visualization update*, but often let computation continue behind the scenes. When resumed, the view “jumps” to the latest refined state.
   - Potential “alert overlay” (heatmap) indicating regions in the paused screen that are now out-of-date (less trustworthy).
2. **Early Termination & Progressive Guards**
   - *Early Termination*: “I have enough insight—stop refining.” Computation may still run in the background to detect if your assumptions were wrong.
   - *Progressive Guards*: “If a future chunk violates assumption X, alert me.” This is akin to *optimistic execution* in CPU pipelines.
3. **Steering**
   - **Biased Sampling**: Once the user zooms into a region, the system prioritizes sampling more data there, reducing sampling elsewhere.
   - Dynamically re-weights or re-focuses the data ingestion based on user interactions.

------

## 5. **Visualization Design in Progressive VA**

1. **Simple “One Item = One Mark”**

   - Common with *scatterplots*, *parallel coordinates*, etc. As new data arrive, new points or polylines appear. Straightforward incremental updates (add or remove marks).

2. **Aggregation-Based**

   - *Bar charts*, *heatmaps*, *bin scatterplots.* The number of visual marks is *fixed*, and new data only update the *heights, colors, or counts.*
   - Excellent for *overviews*, but individual outliers can get lost.

3. **Hybrid Approaches**

   - **Visual Sedimentation**: new data “drops in” like sediment. Maintains a sense of “live updates” while still aggregating.

4. **Layering Architecture**

   - Break down rendering into conceptual 

     layers

     , each computed in sequence or in parallel:

     1. Core background or axes
     2. Main data items (rough)
     3. More refined data items or sub-clusters
     4. Additional details like labels (often computationally expensive)

   - Each layer can be independently invalidated and re-rendered upon user interaction, avoiding re-computing everything from scratch.

5. **Multi-Threading & Event Handling**

   - Typically, one *event-handling thread* + separate *visualization (or data-processing) threads* per layer or view.
   - Ensures that *long-running computations* never block interactive responsiveness.

------

## 6. **Transient Visual Analytics (Next Frontier)**

1. **Limitation of Standard Progressive VA**
   - Progressive VA accumulates *more and more data* until complete (or until you stop).
   - But for *very large data*, we may run out of screen space or memory.
2. **Key Idea**
   - **Transient Visual Analytics** *also removes* data that is *no longer relevant* to your current focus.
   - The view *never truly completes*—it remains *always intermediate*, always dynamically adapting to the user’s *shifting interests*.
   - Think of the screen as a *cache*: newly relevant data arrive, older or “less relevant” items get evicted.
3. **Benefits**
   - Supports *exploratory workflows* where you do *not* know in advance where you’ll zoom or what patterns you’ll chase.
   - You can keep focusing (zooming/panning) on new sub-regions—while older data vanish from display.
4. **Example**
   - *Dynamic Scatterplot:* As you zoom into a cluster, data outside that cluster are dropped (freed space). Zooming back out re-fetches those points if needed.
   - The result is a *forever interactive*, *forever intermediate* visualization that stays uncluttered, focusing only on the user’s *current line of inquiry*.

------

## 7. **Closing Notes**

- **Where We Stand**
  - Visual Analytics as a domain has about two decades of research maturity.
  - *Progressive Visual Analytics* is a newer “branch” actively studied to handle *big data* and *complex algorithms* under stringent time constraints.
  - *Transient Visual Analytics* is an emerging area pushing beyond “always adding data” to “also dropping data” to better accommodate memory, screen-space, and shifting exploration paths.
- **Practical Takeaways**
  - **Designing VA Systems** requires carefully balancing *computational power* and *human cognition*: use incremental or iterative partial results, offer interactive controls (pause, early termination), and choose visualization techniques (one-mark-per-item vs. aggregated) that best fit the *task* and *user role*.
  - **Real-World Scenarios** (flood rescue, cluster definition, search and rescue tasks, large-scale text or citation analyses) benefit from progressive or transient strategies to keep analysis *fluid* and *decision-focused*.

------

### In Summary

This chapter traces the lineage from **basic VA principles** through the **motivation, core mechanisms, and usage scenarios** of *Progressive Visual Analytics*, culminating in the **emerging concept** of *Transient Visual Analytics*. The overarching goal is to allow analysts to *act, react, and steer* data exploration seamlessly—even when the underlying data or algorithms are too large or too slow to process in one shot.
