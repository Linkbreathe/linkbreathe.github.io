--- 
title: HCI Week 35 - Intro + HTML & CSS
author: <weixiong_626> 
date: 2024-12-02 21:00:00 +0200
categories: [Human Computer Interaction,Overview] 
math: true 
tags: []
---
## TRACK - A

------

### **What is HCI about?**

- HCI focuses on the design, evaluation, and implementation of interactive computing systems for human use, alongside the study of related phenomena. It integrates disciplines like computer science, psychology, sociology, design, and more. The primary goal is understanding and improving the interaction between users and computer systems to enhance productivity, usability, and satisfaction.

### **What concerns did HCI originally have, and how have they evolved?**

- Initially, HCI was concerned with improving productivity and reducing errors for computer users. Over time, its focus has broadened to include user experience, interaction design, and the ethical impacts of systems on users. It now emphasizes human-centered design, understanding user needs and motivations, and engaging users in the design and evaluation processes.

### **Why does HCI matter?**

- HCI matters because it directly impacts how individuals interact with technology. Well-designed user interfaces improve usability, safety, performance, and satisfaction, making technology accessible to diverse audiences. It helps ensure technology meets user needs effectively and efficiently.

### **What makes HCI increasingly important?**

- Key trends include:
  - The ubiquity of computing in daily devices.
  - New input/output technologies.
  - The increasing diversity of user groups with varying expertise and needs.
  - The constant nature of human attention despite expanding technological possibilities.
  - Users’ reduced willingness to engage in extensive training.
  - The growing role of digital technologies in lifestyle applications.

### **What is HCI concerned about?**

- HCI is concerned with:
  - Understanding human practices and aspirations.
  - Designing technologies that complement and enhance these activities.
  - Ethical considerations in the development of interactive systems.
  - Exploring design spaces and developing innovative systems and devices.

### **What are the essential activities of HCI?** *(Based on Principles of HCI Chapter 1)*

- The essential activities include:
  - Understanding user needs and contexts.
  - Designing and implementing user interfaces.
  - Evaluating usability and user experience using empirical methods.
  - Iterative refinement based on user feedback and data.

### **How is HCI applied in practice?** *(Based on Principles of HCI Chapter 1)*

- HCI is applied through:
  - User-centered design methodologies.
  - Iterative design cycles involving prototyping and testing.
  - Engaging diverse users to ensure inclusivity.
  - Using data to inform design decisions.

### **Insights from the Solorio Interview** *(if specific content were provided in the document)*:

- The interview would likely provide practical insights or case studies illustrating the implementation of HCI principles in real-world scenarios, emphasizing iterative design, user feedback, and cross-disciplinary collaboration.

------

## TRACK - B

------

### Why the Web is a Powerful Platform for Developing User Interfaces

The web is highly accessible and platform-independent, making it a powerful medium for UI development. Its strengths include:

- **Cross-Platform Compatibility:** Web applications run on any device with a browser, without needing special installations.
- **Ease of Access:** URLs provide instant access without the need for downloads or installations.
- **Rich Multimedia Capabilities:** HTML, CSS, and JavaScript support rich visual and interactive content.
- **Rapid Deployment and Updates:** Changes can be deployed instantly without requiring users to update software.

------

### What Developing UIs is About and How It Differs From Traditional Algorithmic Programming

Developing UIs focuses on creating **interactive and visually appealing interfaces** that provide users with intuitive access to application functionalities.

Key differences:

- **UI Development:** Centered on design, user interaction, and aesthetics using tools like HTML, CSS, and JavaScript.
- **Algorithmic Programming:** Focuses on implementing logic and solving computational problems, often using abstract concepts and mathematical rigor.

------

### What HTML Is

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It structures content using elements represented by tags.

------

### How a Tag Is Written, Including Attributes

HTML tags are written with the following syntax:

```html
<tagname attribute="value">Content</tagname>
```

- **Opening Tag:** `<tagname>` begins the element.
- **Attributes:** Key-value pairs inside the opening tag, e.g., `class="example"`.
- **Content:** The element's inner text or child elements.
- **Closing Tag:** `</tagname>` ends the element (self-closing tags like `<img />` are exceptions).

------

### The Difference Between an Inline and Block Tag

- **Block Tags:** Occupy the entire width of their container and start on a new line (e.g., `<div>`, `<p>`).
- **Inline Tags:** Occupy only as much width as needed and appear on the same line as other content (e.g., `<span>`, `<a>`).

------

### What CSS Is

CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of a document written in HTML or XML.

------

### CSS Rule Structure

A CSS rule consists of:

- **Selector:** Targets HTML elements (e.g., `p`, `.class`, `#id`).

- Declarations:

   Define styling properties and values within curly braces:

  ```css
  cssCopy codeselector {
      property: value;
  }
  ```

------

### Types of CSS Selectors

1. **Type Selector:** Targets elements by tag name (e.g., `p`).
2. **Class Selector:** Targets elements with a specific class (e.g., `.example`).
3. **ID Selector:** Targets elements with a specific ID (e.g., `#unique`).
4. **Child Selector:** Targets direct children of an element (e.g., `div > p`).
5. **Ancestor Selector:** Targets descendants of an element (e.g., `div p`).

------

### How to Express Colors in CSS

Colors in CSS can be expressed using:

- **Hexadecimal:** `#RRGGBB` (e.g., `#ff0000` for red).
- **RGB:** `rgb(255, 0, 0)`.
- **HSL:** `hsl(0, 100%, 50%)`.
- **Named Colors:** Predefined names like `red`, `blue`.

------

### CSS Box Model

The box model represents how elements are displayed and includes:

1. **Content:** The inner content of the box.
2. **Padding:** Space between the content and the border.
3. **Border:** The edge surrounding the padding.
4. **Margin:** Space between the border and surrounding elements.

------

### How Rules in CSS Cascade

CSS rules are applied based on a **cascade order**:

1. **Inline Styles:** Have the highest precedence (e.g., `style="..."`).
2. **Internal Styles:** Defined in a `<style>` tag within the document.
3. **External Stylesheets:** Linked via `<link>` tags.
4. **Specificity:** More specific selectors take precedence over general ones.
5. **Source Order:** Later rules override earlier ones if they have the same specificity.

------

### How CSS Is Integrated with HTML

CSS can be integrated with HTML in three ways:

1. **Inline**: Styles applied directly to elements:

   ```html
   <p style="color: red;">Text</p>
   ```

2. **Internal:** Styles defined within a `<style>` block in the `<head>`:

   ```html
   <style>
       p { color: red; }
   </style>
   ```

3. **External**: Styles linked via a stylesheet:

   ```html
   <link rel="stylesheet" href="styles.css">
   ```

This foundational knowledge forms the core of web development, enabling the creation of dynamic and engaging web applications.
