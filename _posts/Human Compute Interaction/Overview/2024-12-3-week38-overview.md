--- 
title: HCI Overview Week 38 - GUI Design Principles
author: <weixiong_626> 
date: 2024-12-03 1:00:00 +0200
categories: [Human Computer Interaction,Overview] 
math: true 
tags: []
---

## TRACK - A

------

### **1. What are guidelines and how can they help us design user interfaces?**

**Guidelines** are **low-level, specific, and concrete rules of thumb** that assist designers in building user interfaces and avoiding common pitfalls. They are:

- **Specific and Concrete**: Offer direct instructions for particular situations.
- **Based on Best Practices**: Derived from methods that have been proven effective.
- **Shared Language**: Provide common terms for designers to discuss and implement interface elements.

**Benefits of Guidelines in UI Design:**

- **Consistency**: Ensure uniformity across different parts of the interface.
- **Efficiency**: Streamline the design process by providing clear directives.
- **Usability**: Enhance the user experience by following established best practices.
- **Communication**: Facilitate better collaboration among design teams through a common set of standards.

**Examples:**

- Usability.gov Guidelines:
  - Place primary navigation in the left panel.
  - Avoid horizontal scrolling as it can be awkward and slow down users.
  - Use bold text sparingly to prevent distraction.
- Modern Guidelines:
  - **Google's Material Design**: A comprehensive set of design rules ensuring consistency across applications.
  - **Apple Watch Digital Crown**: Ensures consistent interaction styles across different apps.

------

### **2. Shneiderman’s Three High-Level Design Principles**

Shneiderman outlines **three high-level design principles** that guide the creation of effective user interfaces:

1. **Determine User Skill Levels**
   - **Novice Users**: First-time or infrequent users. Design should restrict actions to prevent overwhelm and provide guidance.
   - **Intermittent Users**: Users who use the system occasionally. Design should include consistent terminology and support recognition over recall.
   - **Expert Users**: Frequent users. Design should streamline interfaces, offer shortcuts, and embed instructions.
2. **Identify the Tasks**
   - **Task Analysis**: Break down high-level tasks into smaller, manageable subtasks.
   - Frequency Consideration:
     - **Frequent Tasks**: Provide shortcuts, dedicated keys, and buttons.
     - **Infrequent Tasks**: Utilize menus or context menus for access.
3. **Choose an Interaction Style**
   - Options Include:
     - Direct Manipulation (e.g., graphical objects in drawing programs)
     - Command Languages (typing commands)
     - Menus and Toolbars
     - Forms and Data Entry
     - Natural Language (typing or speaking)
     - Gestures (using movements)
   - **Considerations**: Depends on user expertise and task requirements; often a combination of styles is most effective.

------

### **3. The Eight Golden Rules of Interface Design**

Shneiderman’s **Eight Golden Rules** serve as foundational principles for creating user-friendly interfaces:

1. **Strive for Consistency**
   - Maintain uniform design elements and behaviors to help users transfer knowledge across the interface.
   - *Example*: All MacOS applications use `Command + ,` for "Preferences".
2. **Seek Universal Usability**
   - Design interfaces adaptable to a wide range of users, considering physical abilities, age, and experience.
   - *Example*: Responsive web design adapts to different screen sizes; accessibility features like bold text and reduced transparency in iOS.
3. **Offer Informative Feedback**
   - Provide immediate and clear feedback for user actions, varying the response based on the action's significance.
   - *Example*: Visual progress indicators during file downloads; highlighting selected items.
4. **Design Dialogs to Yield Closure**
   - Clearly indicate the completion of tasks to help users understand progress and finality.
   - *Example*: E-commerce checkout processes with progress indicators like Shopping Cart → Delivery → Payment → Confirmation.
5. **Prevent Errors**
   - Minimize the chance of user errors through design strategies like gray out inactive options and input validation.
   - *Example*: Email clients warning when an attachment is mentioned but not included; numeric fields restricting input to numbers only.
6. **Permit Easy Reversal of Actions**
   - Allow users to undo actions to reduce anxiety and encourage exploration.
   - *Example*: "Undo Send" in emails; version history in document editors.
7. **Support Internal Locus of Control**
   - Ensure users feel in charge of the interface by avoiding unexpected actions and over-automation.
   - *Example*: Auto-correct features that are easily reversible or optional; avoiding intrusive assistants like Microsoft's Clippy.
8. **Reduce Short-Term Memory Load**
   - Minimize cognitive burden by designing interfaces that favor recognition over recall.
   - *Example*: Auto-fill verification codes; contact lists where users select names instead of recalling numbers.

------

### **4. What an Error is, and What Different Types of Errors There Are**

**An Error** in HCI refers to any incorrect action or decision made by the user while interacting with the system. Errors can be categorized into several types:

1. **Slips**
   - **Definition**: Physical actions gone wrong, such as pressing the wrong key.
   - **Example**: Accidentally clicking the wrong button in a UI.
2. **Lapses**
   - **Definition**: Memory failures, like forgetting to save a document.
   - **Example**: Forgetting to attach a file after selecting "Attach" in an email.
3. **Rule-Based Mistakes**
   - **Definition**: Misapplication of good rules or application of bad rules.
   - **Example**: Using a wrong formula in a spreadsheet due to misunderstanding the rules.
4. **Knowledge-Based Mistakes**
   - **Definition**: Errors due to incorrect or incomplete knowledge.
   - **Example**: Entering incorrect data because the user lacks proper understanding of the required format.

**Most Common Errors**: **Slips** and **Lapses** are the most frequent as they arise from human nature and routine actions.

**Error Management Strategies**:

- **Preventing Errors**:
  - Use constraints to limit incorrect actions.
  - Provide clear instructions and feedback.
  - *Examples*: Input validation to prevent non-numeric entries in numeric fields; contextual warnings for missing attachments.
- **Handling Errors**:
  - Implement recovery options like undo functionality and clear error messages.
  - *Examples*: "Undo Send" in emails; version histories in documents to revert to previous states.

------

### **5. What Don Norman’s Principles Are**

**Don Norman’s Design Principles** focus on making interfaces intuitive and user-friendly. His six principles are:

1. **Visibility**
   - **Definition**: Important functions should be visible and easily discoverable.
   - **Example**: GUI elements that clearly indicate their functionality, like buttons that look clickable.
2. **Feedback**
   - **Definition**: Provide immediate and clear responses to user actions.
   - *Already covered under Shneiderman’s rules.*
3. **Consistency**
   - **Definition**: Maintain uniform design elements and behaviors across the interface.
   - *Already covered under Shneiderman’s rules.*
4. **Affordances**
   - **Definition**: Design elements should suggest how they are to be used.
   - **Example**: Buttons that look pressable; sliders that indicate they can be moved.
5. **Natural Mapping**
   - **Definition**: Align controls with their effects in an intuitive manner.
   - **Example**: Stove burner controls arranged in the same layout as the burners themselves.
6. **Constraints**
   - **Definition**: Limit possible actions to prevent errors and simplify use.
   - **Example**: Graying out unavailable menu options; USB cables designed to fit only one way.

------

### **6. What’s the Relationship Between Guidelines, Principles, and Theories in HCI?**

In **Human-Computer Interaction (HCI)**, **guidelines**, **principles**, and **theories** are interconnected elements that collectively inform and enhance the design process:

- **Guidelines**:
  - **Nature**: Low-level, specific, and concrete rules.
  - **Purpose**: Provide actionable instructions for designing interfaces.
  - **Relationship**: Derived from principles and theories; they implement higher-level concepts into practical steps.
- **Principles**:
  - **Nature**: Higher-level, more abstract concepts.
  - **Purpose**: Offer a theoretical foundation to approach design problems.
  - **Relationship**: Serve as a bridge between broad theories and specific guidelines; inform the creation of guidelines.
- **Theories**:
  - **Nature**: Broad, research-based frameworks that explain user behavior and interactions.
  - **Purpose**: Provide a deep understanding of how users interact with interfaces.
  - **Relationship**: Underpin principles and guidelines by offering explanations and predictions about user behavior.

**Summary**:

- **Theories** provide the foundational understanding.
- **Principles** translate theories into actionable concepts.
- **Guidelines** implement principles into specific design practices.

------

### **7. What Different Types of Theories Are There?**

Theories in HCI can be categorized based on their purpose and application:

1. **Predictive Theories**
   - **Purpose**: Forecast outcomes based on current data.
   - **Example**: **Fitts' Law** predicts the time required to move to a target area.
2. **Explanatory Theories**
   - **Purpose**: Explain why certain phenomena occur.
   - **Example**: **Don Norman's Stages of Action** explain how users form goals, execute actions, and evaluate results.
3. **Descriptive Theories**
   - **Purpose**: Model current situations and behaviors.
   - **Example**: **Keystroke-Level Model** predicts the time to perform routine tasks based on keystrokes and mouse actions.
4. **Prescriptive Theories**
   - **Purpose**: Offer guidelines on how things should be designed or operated.
   - **Example**: **Gestalt Principles** guide the organization of visual elements for better user perception.

------

### **8. The Difference Between Micro- and Macro-HCI Theories**

**Micro-HCI Theories** and **Macro-HCI Theories** differ in their scope and focus:

- **Micro-HCI Theories**:
  - **Focus**: Individual interactions between users and interfaces.
  - **Scope**: Detailed aspects of user behavior, cognitive processes, and specific interface elements.
  - **Examples**: **Fitts' Law**, **Keystroke-Level Model**, **Don Norman's Stages of Action**.
  - **Application**: Optimizing specific tasks, improving efficiency, and enhancing usability at the interaction level.
- **Macro-HCI Theories**:
  - **Focus**: Broader social, cultural, and organizational contexts of human-computer interactions.
  - **Scope**: How interfaces fit into larger systems, user activities over time, and the impact of technology on society.
  - **Examples**: **Activity Theory**, **Suchman’s Plans and Situated Action**, **Three Waves of HCI Research**.
  - **Application**: Designing interfaces that adapt to evolving user needs, understanding user behavior in complex environments, and addressing societal implications of technology.

**Summary**:

- **Micro-HCI** deals with the **individual** level interactions and specific design elements.
- **Macro-HCI** addresses the **collective** level, considering broader contexts and long-term implications.
