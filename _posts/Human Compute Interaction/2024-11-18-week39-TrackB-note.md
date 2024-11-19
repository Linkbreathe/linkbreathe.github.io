--- 
title: HCI Track-B Visual Responsive web design Week39
author: <weixiong_626> 
date: 2024-11-18 23:00:00 +0200
categories: [Human Computer Interaction,Track B] 
math: true 
tags: [Responsive web design]
image:
  path: https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20241118235351.png
  alt: Responsive
---
## Notes on Responsive Web Design

## Authors and Context

- **Authors:** Clemens Nylandsted Klokmose & Niklas Elmqvist  
- **Date:** September 25th, 2024  
- **Course:** Human-Computer Interaction, Track B  

## Learning Goals

1. Understand what responsive web design is.
2. Apply media queries.
3. Implement fluid grids using multicol, flexbox, and CSS grid.
4. Use responsive images.

## Motivation

- Devices vary in screen size and interaction modes (e.g., touch, keyboard, mouse).  
- Responsive design avoids building separate web applications for each device.

## Key Concepts

### Responsive Web Design (RWD)

- Coined by **Ethan Marcotte** in 2010.
- Involves three techniques:  
  1. **Media Queries**
  2. **Fluid Grids**
  3. **Fluid Images**

### Media Queries

- A CSS technique to adapt styles based on device properties (e.g., screen size, orientation).  

- Example:  

  ```css
  @media screen and (min-width: 800px) {
    .container {
      margin: 1em 2em;
    }
  }
  ```

### Fluid Grids

- Use relative sizes (e.g., percentages) instead of fixed sizes (e.g., pixels).  
- Include breakpoints to adjust layouts for different devices.

#### Layout Techniques

1. **Multicol:**  
   - Flows content between a fixed or dynamic set of columns.  
   - [Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol)
2. **Flexbox:**  
   - Centers content and ensures equal sizing of elements in layouts.  
   - [Documentation](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
3. **CSS Grid:**  
   - Two-dimensional layout for distributing space across rows and columns.  
   - [Documentation](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)

### Responsive Images

- Basic technique: Set `max-width: 100%`.

- Advanced usage with `srcset` and `sizes` attributes:
By utilizing the srcset and sizes attributes, you can offer multiple image versions tailored to different display scenarios:

  ```html
  <img srcset="clemens-480w.jpg 480w,
               clemens-800w.jpg 800w"
       sizes="(max-width: 600px) 480px, 800px"
       src="clemens-800w.jpg"
       alt="A photo of Clemens">
  ```

- `srcset` Attribute: This attribute lists available image files along with their inherent widths. In the example, clemens-480w.jpg is 480 pixels wide, and clemens-800w.jpg is 800 pixels wide.

- `sizes` Attribute: This attribute defines the intended display size of the image for different viewport widths. Here, it specifies that when the viewport width is 600 pixels or less, the image should be displayed at 480 pixels wide; otherwise, it should be 800 pixels wide.



### Interaction on Mobile Devices

- Primarily touch-based interactions.  

- Example JavaScript handling touch events:

  ```javascript
  let el = document.getElementById("toucharea");
  el.addEventListener("touchstart", handleStart);
  el.addEventListener("touchend", handleEnd);
  el.addEventListener("touchcancel", handleCancel);
  el.addEventListener("touchmove", handleMove);
  ```
