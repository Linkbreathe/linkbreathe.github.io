--- 
title: HCI Week 37 - GUIs & DOM & Events
author: <weixiong_626> 
date: 2024-12-02 21:33:00 +0200
categories: [Human Computer Interaction,Overview] 
math: true 
tags: []
---

## TRACK - A

------

### What’s a Command-Line Interface (CLI) and its Tradeoffs?

**Definition:**
A Command-Line Interface (CLI) is a text-based interface where users input commands to interact with the system. It is commonly used by developers and power users for tasks requiring precision or automation.

**Tradeoffs:**

- **Strengths:**
  - Simplicity in design and implementation.
  - High power and flexibility for complex tasks.
  - Suitable for scripting and automation.
  - Efficient for experienced users with command history and shortcuts.
- **Weaknesses:**
  - Not intuitive or beginner-friendly; requires memorization.
  - Limited feedback on actions.
  - Prone to errors due to syntax sensitivity.

------

### What’s Direct Manipulation and its Tradeoffs?

**Definition:**
Direct Manipulation involves interacting with digital objects directly, resembling physical interactions. Actions are performed directly on objects with immediate feedback, as if manipulating real-world objects.

**Tradeoffs:**

- **Strengths:**
  - Continuous representation of objects and actions.
  - Intuitive and reduces the learning curve.
  - Incremental and reversible actions encourage exploration.
  - Immediate visual feedback enhances user understanding.
- **Weaknesses:**
  - Can be resource-intensive to implement.
  - May become cumbersome for complex tasks.
  - Limited scalability for systems with many elements or functionalities.

------

### What Does Translational Distance Mean(Degrees of Directness)?

- Weak Direct Manipulation: Requires intermediary steps, such as using menus or dialog boxes.
- Strong Direct Manipulation: Users interact with objects directly using handles or gestures.
- Immersive Manipulation: Involves virtual or augmented reality, where physical actions correspond closely to digital effects.

**Definition:**
Translational distance refers to the metaphorical or physical gap between the user's actions and the system's responses in an interaction. It represents the effort required by the user to translate their intentions into actions that the system can understand and execute.

In user interface design, minimizing translational distance is desirable because it:

1. Reduces Cognitive Load: Less mental effort is needed when users can interact with the system in a way that closely matches their intentions.

2. Enhances Efficiency: Direct interactions lead to quicker task completion as users don't have to navigate through intermediary steps or abstract commands.

3. Improves User Satisfaction: Users feel more in control when their actions directly affect the system without unnecessary complexity.


------

### The Difference Between Interaction Tasks and Interaction Techniques

- **Interaction Tasks:**
  These are actions performed by the user to achieve specific goals within a system (e.g., selecting an item, typing text, navigating a menu).
- **Interaction Techniques:**
  Methods or computations that translate user input into system responses to support these tasks (e.g., drag-and-drop for selection or using sliders for value input).

**Difference:**
Interaction tasks describe "what" the user aims to achieve, while interaction techniques describe "how" the system facilitates achieving that goal.

------

### What Are Basic Interaction Tasks?

Basic interaction tasks include:

1. **Input Tasks:** Text input, value input, position input, path input.
2. **Selection Tasks:** Single or multiple selection, menu navigation.
3. **Trigger Tasks:** Buttons, gestures, drag-and-drop.
4. **Navigation Tasks:** Scrolling, panning, and zooming.
5. **Property Specification Tasks:** Using dialog boxes or inspectors.
6. **Transformation Tasks:** Resizing, rotating, moving objects.

------

### What’s the Consideration When Designing Interaction Techniques?

Key considerations include:

1. **Usability:** Techniques should be intuitive and easy to learn.
2. **Efficiency:** They should minimize user effort and time.
3. **Feedback:** Provide clear and immediate feedback to user actions.
4. **Compatibility:** Align with user needs and system capabilities.
5. **Learnability:** Support progressive learning for novice users.
6. **Adaptability:** Handle diverse user requirements and contexts.

------

### What’s the Consideration When Evaluating Interaction Techniques?

Evaluation considerations include:

1. **Empirical Testing:** Conduct controlled experiments to compare techniques.
2. **Real-World Performance:** Assess how techniques perform under practical conditions.
3. **Progress Demonstration:** Show measurable improvement over previous solutions.
4. **User-Centered Metrics:** Evaluate usability, efficiency, and satisfaction.
5. **Isolation of Effects:** Separate the impact of the technique from other factors in the system.


------

## TRACK - B

------

### 1. **What the DOM Is**

**DOM** stands for **Document Object Model**. It is a programming interface for web documents. The DOM represents the page so that programs can change the document structure, style, and content. Essentially, the DOM provides a structured, hierarchical representation of the HTML (or XML) elements of a webpage, allowing scripts (like JavaScript) to interact with and manipulate the content dynamically.

------

### 2. **How the DOM Is Structured**

The DOM is structured as a **tree of nodes**, often referred to as a **DOM tree**. Each element, attribute, and piece of text in the HTML document is represented as a node within this tree. The hierarchy starts with the **root node** (`document`), which branches out into **child nodes**, forming parent-child relationships. For example:

- Document
  - html
    - head
      - **title**
    - body
      - div
        - **p**
        - ul
          - **li**
          - **li**

------

### 3. **The Terminology of the DOM (Types of Nodes, Their Family Relationships)**

- **Node**: The basic unit of the DOM tree. Types include:
  - **Element Nodes**: Represent HTML elements (e.g., `<div>`, `<p>`).
  - **Text Nodes**: Contain the text within elements.
  - **Attribute Nodes**: Represent attributes of elements (e.g., `class`, `id`).
  - **Comment Nodes**: Represent comments in the HTML.
- **Family Relationships**:
  - **Parent Node**: A node that has one or more child nodes.
  - **Child Node**: A node directly under a parent node.
  - **Sibling Nodes**: Nodes that share the same parent.
  - **Ancestor Nodes**: All nodes above a given node in the hierarchy.
  - **Descendant Nodes**: All nodes below a given node.

------

### 4. **How to Work with the DOM from JavaScript**

JavaScript interacts with the DOM using various methods and properties provided by the `document` object. Common operations include:

- **Selecting Elements**: Using selectors like `getElementById`, `getElementsByClassName`, `querySelector`, etc.
- **Manipulating Content**: Changing text or HTML content via `textContent` or `innerHTML`.
- **Modifying Styles**: Altering CSS styles through the `style` property.
- **Handling Attributes**: Adding, removing, or modifying attributes using `setAttribute`, `getAttribute`, etc.
- **Creating and Removing Elements**: Dynamically adding or removing elements using methods like `createElement`, `appendChild`, `removeChild`, etc.

------

### 5. **How to Query Nodes**

You can query DOM nodes using several methods:

- **By ID**:

  ```javascript
  const element = document.getElementById('myId');
  ```

- **By Class Name**:

  ```javascript
  const elements = document.getElementsByClassName('myClass');
  ```

- **By Tag Name**:

  ```javascript
  const elements = document.getElementsByTagName('div');
  ```

- **Using CSS Selectors**:

  - Single Element:

    ```javascript
    const element = document.querySelector('.myClass');
    ```

  - Multiple Elements:

    ```javascript
    const elements = document.querySelectorAll('div.note');
    ```

- **querySelector**

```javascript
//1. Select by ID
let element = document.querySelector("#myId");

//2. Select by Class Use . to select an element with a specific class
let element = document.querySelector(".myClass");

//3. Select by Tag Name 
let element = document.querySelector("div");

//4. Combination Selectors
// Select the first <p> inside a <div>
let element = document.querySelector("div p");
// Select an element with both the class .item and ID #unique
let element = document.querySelector(".item#unique");

//5. Attribute Selectors

// Select an element with a data-id attribute
let element = document.querySelector("[data-id]");
// Select an element where data-id equals '123'
let element = document.querySelector("[data-id='123']");
```



------

### 6. **How to Traverse the DOM**

Traversing the DOM involves navigating through the nodes relative to a specific node:

- **Parent Node**:

  ```javascript
  const parent = element.parentNode;
  ```

- **Child Nodes**:

  ```javascript
  const children = element.childNodes; // Includes all child nodes
  const firstChild = element.firstChild;
  const lastChild = element.lastChild;
  ```

- **Sibling Nodes**:

  ```javascript
  const nextSibling = element.nextSibling;
  const previousSibling = element.previousSibling;
  ```

- **Element-specific Traversal**:

  ```javascript
  const parentElement = element.parentElement;
  const childrenElements = element.children;
  const nextElementSibling = element.nextElementSibling;
  const previousElementSibling = element.previousElementSibling;
  ```

------

### 7. **How to Insert, Modify, and Delete Elements in the DOM**

- **Inserting Elements**:

  ```javascript
  // Create a new element
  const newDiv = document.createElement('div');
  newDiv.textContent = 'Hello World';
  
  // Append to a parent
  const parent = document.getElementById('parentId');
  parent.appendChild(newDiv);
  
  // Insert before a specific child
  parent.insertBefore(newDiv, referenceChild);
  ```

- **Modifying Elements**:

  ```javascript
  // Change text
  element.textContent = 'New Text';
  
  // Change HTML
  element.innerHTML = '<span>New HTML</span>';
  
  // Modify attributes
  element.setAttribute('data-info', '123');
  ```

- **Deleting Elements**:

  ```javascript
  const parent = element.parentNode;
  parent.removeChild(element);
  
  // Alternatively, using remove()
  element.remove();
  ```

------

### 8. **How to Set Attributes on Elements Including Classes with `classList` and Styles with `style`**

- **Setting Attributes**:

  ```javascript
  element.setAttribute('src', 'image.png');
  element.setAttribute('alt', 'An image');
  ```

- **Using `classList` for Classes**:

  ```javascript
  // Add a class
  element.classList.add('active');
  
  // Remove a class
  element.classList.remove('inactive');
  
  // Toggle a class
  element.classList.toggle('hidden');
  
  // Check if a class exists
  if (element.classList.contains('active')) { /* ... */ }
  ```

- **Setting Styles with `style`**:

  ```javascript
  element.style.color = 'blue';
  element.style.backgroundColor = 'yellow';
  element.style.display = 'none';
  ```

  **Note**: For multiple or complex styles, consider adding/removing CSS classes instead of inline styles for better maintainability.

------

### 9. **What Types of Events You Can React to in the Browser**

Browsers support a wide variety of events, including but not limited to:

- **Mouse Events**: `click`, `dblclick`, `mousedown`, `mouseup`, `mouseover`, `mouseout`, `mousemove`.
- **Keyboard Events**: `keydown`, `keyup`, `keypress`.
- **Form Events**: `submit`, `change`, `input`, `focus`, `blur`.
- **Window Events**: `load`, `resize`, `scroll`, `unload`.
- **Touch Events**: `touchstart`, `touchmove`, `touchend`, `touchcancel`.
- **Clipboard Events**: `copy`, `cut`, `paste`.
- **Drag Events**: `drag`, `dragstart`, `dragend`, `drop`.
- **Media Events**: `play`, `pause`, `ended`, `volumechange`.
- **Others**: `error`, `contextmenu`, `wheel`, etc.

------

### 10. **The Three Steps Involved in Handling an Event**

Handling an event typically involves the following steps:

1. **Select the Element**: Identify and reference the DOM element you want to attach the event to.

   ```javascript
   const button = document.getElementById('myButton');
   ```

2. **Choose the Event Type**: Decide which event you want to listen for (e.g., `click`, `mouseover`).

3. **Attach an Event Handler**: Define a function that will execute when the event occurs and attach it to the element.

   ```javascript
   button.addEventListener('click', function(event) {
     // Handler code
     console.log('Button clicked!');
   });
   ```

------

### 11. **How the Event Flow in JS Works and the Difference Between the Capturing and Bubbling Phase**

**Event Flow** in JavaScript follows a three-phase model:

1. **Capturing Phase**: The event starts from the root (`window` or `document`) and traverses down to the target element. Event listeners set to capture will handle the event during this phase.
2. **Target Phase**: The event has reached the target element where the event occurred.
3. **Bubbling Phase**: After the target phase, the event bubbles up from the target element back to the root. Event listeners set to bubble will handle the event during this phase.

**Capturing vs. Bubbling**:

- **Capturing Phase**:

  - Events are captured from the top (window) down to the target.

  - Less commonly used.

  - To attach a listener for capturing, set the third parameter to `true`:

    ```javascript
    element.addEventListener('click', handler, true);
    ```

- **Bubbling Phase**:

  - Events bubble up from the target to the top.

  - More commonly used.

  - Default behavior (third parameter is `false` or omitted):

    ```javascript
    element.addEventListener('click', handler); // Bubbling by default
    ```

**Example**: If you click on a `<button>` inside a `<div>`, the event flow is:

- **Capturing**: `window` → `document` → `<div>` → `<button>`
- **Target**: `<button>`
- **Bubbling**: `<button>` → `<div>` → `document` → `window`

------

### 12. **How to Use Event Listeners**

Event listeners are functions that respond to specific events on DOM elements. They are added using methods like `addEventListener` and removed using `removeEventListener`.

**Adding an Event Listener**:

```javascript
const button = document.getElementById('myButton');

function handleClick(event) {
  console.log('Button was clicked!', event);
}

button.addEventListener('click', handleClick);
```

**Removing an Event Listener**:

```javascript
button.removeEventListener('click', handleClick);
```

**Options Parameter**: The third parameter in `addEventListener` can be a boolean or an object to specify options like `capture`, `once`, and `passive`.

```javascript
// Using capture
button.addEventListener('click', handleClick, true);

// Using options
button.addEventListener('click', handleClick, { capture: false, once: true });
```

------

### 13. **What the Event Object Is and What It Is Used For**

The **Event Object** is an object automatically passed to event handler functions. It contains information about the event and provides methods to control event behavior.

**Common Properties and Methods**:

- **Properties**:
  - `type`: The type of event (e.g., `click`, `keydown`).
  - `target`: The element that triggered the event.
  - `currentTarget`: The element handling the event.
  - `bubbles`: Boolean indicating if the event bubbles.
  - `cancelable`: Boolean indicating if the event is cancelable.
  - `defaultPrevented`: Indicates if `preventDefault()` was called.
- **Methods**:
  - `preventDefault()`: Prevents the default action associated with the event (e.g., following a link).
  - `stopPropagation()`: Stops the event from bubbling up or capturing down further.
  - `stopImmediatePropagation()`: Stops other listeners of the same event from being called.

**Example Usage**:

```javascript
button.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default action
  console.log('Clicked:', event.target);
});
```

------

### 14. **How to Change the Event Flow (Preventing Default Behaviour and Stopping Propagation)**

**Preventing Default Behavior**: Some events have default actions (e.g., submitting a form, following a link). To prevent these:

```javascript
const link = document.querySelector('a');

link.addEventListener('click', function(event) {
  event.preventDefault(); // Stops the browser from following the link
  console.log('Link click prevented.');
});
```

**Stopping Propagation**: To prevent the event from bubbling up or capturing down further:

- **Stop Bubbling/Capturing**:

  ```javascript
  element.addEventListener('click', function(event) {
    event.stopPropagation(); // Stops the event from reaching parent elements
    console.log('Propagation stopped.');
  });
  ```

- **Stop Immediate Propagation**:

  ```javascript
  element.addEventListener('click', function(event) {
    event.stopImmediatePropagation(); // Prevents other listeners on the same element
    console.log('Immediate propagation stopped.');
  });
  ```

**Use Cases**:

- Preventing form submissions for validation.
- Controlling how events affect nested elements.
- Managing complex UI interactions.

------

### 15. **What Event Delegation Is and How to Implement It**

**Event Delegation** is a technique where a single event listener is added to a parent element to manage events for multiple child elements. Instead of attaching individual listeners to each child, the parent leverages event bubbling to handle events efficiently.

**Benefits**:

- Improves performance by reducing the number of event listeners.
- Simplifies dynamic content management as new child elements automatically inherit the event handler.

**Implementation Steps**:

1. **Attach Event Listener to Parent**:

   ```javascript
   const list = document.getElementById('myList');
   
   list.addEventListener('click', function(event) {
     // Event handling logic
   });
   ```

2. **Identify the Actual Target**: Inside the event handler, determine which child element triggered the event using properties like `event.target` or `event.currentTarget`.

3. **Execute Conditional Logic**: Perform actions based on the identified target.

**Example**: Handling clicks on list items (`<li>`) within an unordered list (`<ul>`).

```html 
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
```javascript 
const list = document.getElementById('myList');
list.addEventListener('click', function(event) {
  // Check if the clicked element is a list item
  if (event.target && event.target.nodeName === 'LI') {
    console.log('List item clicked:', event.target.textContent);
  }
});
```

**Handling Dynamically Added Elements**: Since the listener is on the parent, any new `<li>` added later will automatically be managed without needing to add new listeners.

### 16. **Conclusion**

| **Method / Property**              | **Usage**                                                                                               |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `document.getElementById`          | Selects a single DOM element by its unique ID.                                                          |
| `document.getElementsByClassName`  | Selects all DOM elements that have a specific class name.                                               |
| `document.getElementsByTagName`    | Selects all DOM elements with a specified tag name (e.g., `div`, `p`).                                  |
| `document.querySelector`           | Selects the first DOM element that matches a specified CSS selector.                                    |
| `document.querySelectorAll`        | Selects all DOM elements that match a specified CSS selector.                                           |
| `element.textContent`              | Gets or sets the text content of a DOM element.                                                         |
| `element.innerHTML`                | Gets or sets the HTML content of a DOM element, allowing for dynamic modification of the DOM structure. |
| `element.style`                    | Accesses and modifies the inline styles of a DOM element.                                               |
| `element.setAttribute`             | Adds or updates an attribute on a DOM element (e.g., `src`, `alt`).                                     |
| `element.getAttribute`             | Retrieves the value of a specified attribute from a DOM element.                                        |
| `document.createElement`           | Creates a new DOM element of a specified type (e.g., `div`, `span`).                                    |
| `element.appendChild`              | Appends a new child node to the end of a parent element's list of children.                             |
| `element.insertBefore`             | Inserts a new child node before a specified existing child node within a parent element.                |
| `element.removeChild`              | Removes a specified child node from a parent element.                                                   |
| `element.remove`                   | Removes the element itself from the DOM without needing to reference its parent.                        |
| `element.classList.add`            | Adds one or more classes to a DOM element's class list.                                                 |
| `element.classList.remove`         | Removes one or more classes from a DOM element's class list.                                            |
| `element.classList.toggle`         | Toggles a class on a DOM element; adds the class if it doesn't exist, removes it if it does.            |
| `element.classList.contains`       | Checks if a DOM element contains a specific class.                                                      |
| `element.addEventListener`         | Attaches an event handler function to a specified event on a DOM element (e.g., `click`, `mouseover`).  |
| `element.removeEventListener`      | Removes a previously attached event handler function from a specified event on a DOM element.           |
| `event.preventDefault()`           | Prevents the default action associated with an event (e.g., preventing a form from submitting).         |
| `event.stopPropagation()`          | Stops the event from bubbling up to parent elements or capturing down to child elements.                |
| `event.stopImmediatePropagation()` | Prevents other listeners of the same event from being called.                                           |

##### Additional Properties for DOM Traversal

  While not methods, the following properties are essential for navigating the DOM:

  | **Property**                     | **Usage**                                                                                  |
  | -------------------------------- | ------------------------------------------------------------------------------------------ |
  | `element.parentNode`             | References the parent node of a DOM element.                                               |
  | `element.childNodes`             | Returns a live NodeList of child nodes of a DOM element, including text and comment nodes. |
  | `element.firstChild`             | References the first child node of a DOM element.                                          |
  | `element.lastChild`              | References the last child node of a DOM element.                                           |
  | `element.nextSibling`            | References the next sibling node of a DOM element.                                         |
  | `element.previousSibling`        | References the previous sibling node of a DOM element.                                     |
  | `element.parentElement`          | References the parent element of a DOM element (ignores non-element nodes).                |
  | `element.children`               | Returns a live HTMLCollection of child elements of a DOM element (excludes text nodes).    |
  | `element.nextElementSibling`     | References the next sibling element of a DOM element.                                      |
  | `element.previousElementSibling` | References the previous sibling element of a DOM element.                                  |

##### Event Handling Methods

  | **Method**                         | **Usage**                                                                                                 |
  | ---------------------------------- | --------------------------------------------------------------------------------------------------------- |
  | `addEventListener`                 | Attaches an event handler to a specified event on a DOM element with optional parameters (e.g., capture). |
  | `removeEventListener`              | Detaches an event handler from a specified event on a DOM element.                                        |
  | `event.preventDefault()`           | Prevents the default action associated with the event.                                                    |
  | `event.stopPropagation()`          | Stops the event from bubbling up or capturing down further in the DOM tree.                               |
  | `event.stopImmediatePropagation()` | Prevents other listeners of the same event from being called.                                             |
