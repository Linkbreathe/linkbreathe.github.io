---
title: HCI Week 43 - Understanding People 1 Perception, Cognition and Motor Skills
author: <weixiong_626> 
date: 2024-12-03 7:00:00 +0200
categories: [Human Computer Interaction,Overview] 
math: true 
tags: []
---

## TRACK - A

------
### **1. What does it mean to be human-centered?**

Being human-centered means designing software and systems with a focus on the users' needs, abilities, and limitations. It involves making design choices justified by how people actually feel, think, behave, and function. The goal is to create interfaces that are intuitive, efficient, and satisfying for users by understanding and prioritizing their experiences.

------
### **2. What is perception and why is it relevant for HCI?**

Perception is the process by which individuals receive, interpret, and make sense of sensory information from the environment. In HCI, perception is crucial because it affects how users interact with interfaces. Understanding perception helps designers create user interfaces that align with human sensory capabilities, making information easier to understand and actions more intuitive.

------
### **3. What does the human sensor system consist of?**

The human sensor system comprises several senses:

- **Vision**: Detecting light and color through the eyes.
- **Hearing**: Detecting sound waves through the ears.
- **Touch (Tactile perception)**: Sensing pressure, temperature, and texture through the skin.
- **Smell and Taste**: Detecting chemical stimuli through the nose and tongue (less commonly used in HCI).

In HCI, the primary focus is on vision, hearing, and touch, as they are the main senses engaged when interacting with digital systems.

------
### **4. What are key perceptual tasks and their mechanisms?**

Key perceptual tasks include:

- **Discrimination**: Noticing that a change or difference has occurred in sensory input.
- **Identification**: Recognizing and labeling what has changed or what stimulus is present.
- **Estimation**: Assessing properties of stimuli, such as size, speed, or quantity.
- **Search**: Actively looking for specific stimuli within the environment.

These tasks rely on mechanisms like attention, pattern recognition, and memory to process sensory information effectively.

------
### **5. What’s involved in visual perception?**

Visual perception involves:

- **Reception of Light**: Light enters the eyes and is focused onto the retina.
- **Photoreceptor Activation**: Cones and rods in the retina detect color and light intensity.
- **Signal Processing**: Neural signals are sent via the optic nerve to the brain.
- **Interpretation**: The brain processes these signals to construct images, recognize patterns, and assign meaning.

Visual perception is influenced by factors like attention, context, and prior knowledge, allowing us to interpret complex visual information.

------
### **6. How do the basics of the eye work?**

The eye functions as follows:

- **Light Entry**: Light passes through the cornea and enters the eye via the pupil, whose size is regulated by the iris.

- **Focusing**: The lens adjusts shape to focus light onto the retina at the back of the eye.

- Photoreception

  : The retina contains photoreceptors:

  - **Cones**: Concentrated in the fovea, responsible for color vision and fine detail.
  - **Rods**: Located in the peripheral areas, sensitive to low light levels, but do not detect color.

- **Signal Transmission**: Photoreceptors convert light into electrical signals sent to the brain through the optic nerve.

------
### **7. What are Gestalt principles and how are they relevant for HCI?**

Gestalt principles are psychological theories explaining how humans naturally organize visual elements into groups or unified wholes when certain principles are applied. Key principles include:

- **Proximity**: Elements close to each other are perceived as related.
- **Similarity**: Similar items are grouped together.
- **Continuity**: The eye follows continuous lines and patterns.
- **Closure**: Incomplete figures are perceived as complete.
- **Enclosure**: Objects enclosed together are seen as a group.
- **Connection**: Connected elements are viewed as part of the same group.

In HCI, applying Gestalt principles helps designers create intuitive and organized interfaces, making it easier for users to process and understand visual information.

------
### **8. What are the three central motor tasks?**

The three central motor tasks are:

1. **Target Acquisition**: Moving a control (e.g., cursor, finger) to a spatially defined target.
   - *Discrete Aimed Movements*: Reaching for a static target (e.g., clicking a button).
   - *Continuous Aimed Movements*: Maintaining movement within boundaries (e.g., dragging along a path).
   - *Temporally Constrained Movements*: Interacting with moving targets within time constraints.
2. **Simple Reaction**: Responding quickly to a single stimulus with a predetermined action.
3. **Choice Reaction**: Selecting an appropriate response when presented with multiple stimuli and possible actions.

------
### **9. What is Fitts’ Law and what can it be used for?**

Fitts' Law predicts the time required to move to and select a target area, based on the distance to the target and the size of the target. The formula is:

$$
\begin{equation}
  \text{Movement Time} = a + b \times \log_2\left(\frac{2D}{W}\right)
  \label{eq:fitts}
\end{equation}
$$

Where:

- D = Distance to the target
- W = Width of the target
- a, b = Empirical constants

In HCI, Fitts' Law is used to design user interfaces by optimizing the size and placement of interactive elements to reduce selection time and improve usability.

------
### **10. What are the different reaction types?**

The different reaction types are:

- **Simple Reaction**: A single stimulus requiring a single response (e.g., pressing a button when a light appears).
- **Choice Reaction**: Multiple stimuli, each requiring a different response (e.g., pressing different keys based on different signals).

------
### **11. What does the Ratcliff model explain?**

The Ratcliff Diffusion Model explains how decisions are made over time by accumulating sensory evidence until a threshold is reached. It models reaction times and accuracy in simple and choice reaction tasks by considering factors like decision boundary, drift rate, and non-decision time.

------
### **12. What does the Hick-Hyman Law express?**

The Hick-Hyman Law states that the time it takes for a person to make a decision increases logarithmically with the number of choices available. The formula is:

$$
\begin{equation}
  \text{Reaction Time} = a + b \times \log_2(N + 1)
  \label{eq:hick}
\end{equation}
$$

Where:

- N = Number of choices
- a, b = Empirical constants

This law helps predict decision-making time in interface design, emphasizing the impact of menu length and choice complexity.

------
### **13. What are the elementary cognitive abilities?**

Elementary cognitive abilities include:

- **Perception**: Interpreting sensory information.
- **Attention**: Focusing on specific stimuli.
- **Memory**: Storing and recalling information.
- **Reasoning**: Processing information to make decisions.
- **Decision Making**: Choosing between alternatives.
- **Motor Control**: Coordinating physical actions.

------
### **14. What is cognitive control?**

Cognitive control is the ability to direct thought and action in accordance with internal goals. It involves:

- **Goal Setting**: Defining objectives.
- **Planning**: Outlining steps to achieve goals.
- **Attention Management**: Focusing on relevant tasks and filtering out distractions.
- **Inhibition**: Suppressing irrelevant or interfering impulses.
- **Task Switching**: Shifting focus between tasks when necessary.

------
### **15. How to measure cognitive workload?**

Cognitive workload can be measured using tools like the **NASA Task Load Index (NASA-TLX)**, which assesses workload based on six dimensions:

1. **Mental Demand**
2. **Physical Demand**
3. **Temporal Demand**
4. **Performance**
5. **Effort**
6. **Frustration Level**

Users rate each dimension after task completion, providing insight into the cognitive demands of a task or interface.

------
### **16. What types of memory do we have and how do they differ?**

We have two main types of memory:

1. **Short-Term Memory (Working Memory)**:

   - Capacity: Limited (about 7±2 items).
   - Duration: Brief (seconds to minutes).
   - Function: Holds information temporarily for processing.

2. **Long-Term Memory**:

   - Capacity: Potentially unlimited.

   - Duration: Long-lasting (days to years).

   - Subtypes:

     - Declarative Memory (Explicit):

       - *Semantic Memory*: Facts and general knowledge.
       - *Episodic Memory*: Personal experiences and events.

     - Non-Declarative Memory (Implicit):

       - *Procedural Memory*: Skills and habits (e.g., riding a bike).
       - *Conditioning*: Learned associations and responses.

------
### **17. What governs learning over time?**

Learning over time is governed by:

- **Repetition**: Repeated exposure strengthens memory traces.
- **Reinforcement**: Positive outcomes encourage repetition of behaviors.
- **Consolidation**: The process by which short-term memories become long-term.
- **Forgetting**: Lack of use leads to memory decay.
- **Feedback**: Information about performance that guides future actions.

------
### **18. What are the two systems of decision making?**

The two systems of decision making are:

1. **System 1 (Intuitive)**:
   - Fast, automatic, and unconscious.
   - Relies on heuristics and past experiences.
   - Used for quick judgments and routine decisions.
2. **System 2 (Analytical)**:
   - Slow, deliberate, and conscious.
   - Involves reasoning and critical thinking.
   - Used for complex decisions requiring attention.

------
### **19. What’s a mental model?**

A mental model is an internal representation of how a system or process works. It helps individuals understand, predict, and interact with the system by providing a framework of expectations. In HCI, users' mental models guide how they use interfaces, influencing their actions and interpretations.

------
### **20. How can insights about cognition be applied to HCI?**

Insights about cognition can be applied to HCI by:

- **Reducing Cognitive Load**: Simplifying interfaces to align with memory limitations.
- **Designing for Attention**: Highlighting important elements and minimizing distractions.
- **Supporting Mental Models**: Creating interfaces that match users' expectations.
- **Enhancing Learnability**: Using consistent design patterns to facilitate learning.
- **Improving Decision Making**: Limiting choices to reduce decision fatigue.

------
### **21. What does it mean to view the human as an information processor?**

Viewing the human as an information processor means treating human cognition similar to a computer system that:

- **Receives Input**: Sensory information from the environment.
- **Processes Information**: Interprets and manipulates data using cognitive functions.
- **Produces Output**: Responses or actions based on processing.

This perspective helps in modeling human interaction with systems, allowing for predictions about performance and behavior.

------
### **22. What is the Model Human Processor (MHP), what does it consist of, and what can it be used for?**

The Model Human Processor is a theoretical model that describes human cognitive processing in terms of three interacting subsystems:

1. **Perceptual Processor**:
   - Handles sensory input (visual, auditory).
   - Cycle time: ~100 milliseconds.
2. **Cognitive Processor**:
   - Manages memory and decision-making.
   - Cycle time: ~70 milliseconds.
3. **Motor Processor**:
   - Controls physical actions and responses.
   - Cycle time: ~70 milliseconds.

The MHP is used to predict human performance in HCI tasks, such as estimating how long a user will take to respond to a stimulus or complete an action.

------
### **23. What is the performance of our perceptual, cognitive, and motor systems according to the MHP?**

According to the MHP:

- **Perceptual Processor**:
  - Cycle Time: Approximately 100 milliseconds.
  - Function: Processes sensory inputs.
- **Cognitive Processor**:
  - Cycle Time: Approximately 70 milliseconds.
  - Function: Handles memory retrieval, decision-making.
- **Motor Processor**:
  - Cycle Time: Approximately 70 milliseconds.
  - Function: Initiates and controls physical movements.

These cycle times help estimate the total time required for a user to perceive, process, and respond to stimuli.

------
### **24. What are the limitations of the MHP?**

Limitations of the MHP include:

- **Simplification**: It oversimplifies complex human behaviors and cognitive processes.
- **Variability**: Doesn't account for individual differences in processing speeds.
- **Context Ignorance**: Lacks consideration of environmental and emotional factors.
- **Dynamic Changes**: Doesn't account for learning effects or changes over time.

------
### **25. How are needs and motivations relevant to HCI?**

Needs and motivations influence how users interact with systems. By understanding these factors, designers can:

- **Enhance User Engagement**: Aligning interfaces with users' intrinsic motivations.
- **Improve Satisfaction**: Meeting users' psychological needs leads to positive experiences.
- **Increase Usability**: Designing features that fulfill users' goals efficiently.

------
### **26. What is Self-Determination Theory, its assumptions, and basic ideas?**

Self-Determination Theory (SDT) is a framework for understanding human motivation, positing that people are driven by innate psychological needs:

- **Autonomy**: Desire for self-direction and control over actions.
- **Competence**: Need to feel effective and master skills.
- **Relatedness**: Aspiration to connect with others and belong.

