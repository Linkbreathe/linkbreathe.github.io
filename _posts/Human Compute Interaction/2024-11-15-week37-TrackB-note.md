--- 
title: HCI Track-B DOM & Events Week37
author: <weixiong_626> 
date: 2024-11-15 14:00:00 +0200
categories: [Human Computer Interaction] 
math: true 
tags: [] 
image:
  path: https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20241115201434.png
  alt: Dom Tree
---

## Query a single node

```js
document.getElementById(id)
element.querySelector(selector)
```

Examples:  
https://warp.cs.au.dk/average-cheetah-35/  
Make your own copy with:  
https://warp.cs.au.dk/average-cheetah-35/?copy  

## Query for a collection of node  

```js
nodesdocument.getElementsByClassName(class)
document.getElementsByTagName(tagName)
element.querySelectorAll(selector)
```

## Traverse the DOM
![Desktop View](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20241115203929.png){: width="972" height="589" }
```js
element.parentNode;
element.nextSibling;
element.previousSibling;
element.firstChild;
element.lastChild;
```

### Only elements but not text nodes
```js
element.nextElementSibling;
element.previousElementSibling;
element.firstElementChild;
element.lastElementChild;
```
## Access and update text
**textNode.nodeValue**
- Retrieve and set content of a text node
- NB. is property on a text node and not element node !

```html
<div id="example">Hello, World!</div>
<script>
  const div = document.getElementById('example');
  const textNode = div.firstChild; // Get the text node
  console.log(textNode.nodeValue); // Output: "Hello, World!"

  // Set new content
  textNode.nodeValue = "Hi there!";
  console.log(div.innerHTML); // Output: "Hi there!"
</script>
```

**element.textContent**
- Access all textual content of a sub tree
- NB. setting this overwrites all content of the sub tree  

```html
<div id="example">
  <span>Hello</span>, World!
</div>
<script>
  const div = document.getElementById('example');
  
  // Access textual content
  console.log(div.textContent); // Output: "Hello, World!"

  // Set new content (overwrites everything)
  div.textContent = "New content!";
  console.log(div.innerHTML); // Output: "New content!"
</script>
```

## Insert new elements
```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

```js
// Create an element:
let newEl = document.createElement('li');

// Create a text node:
let txt = document.createTextNode("Hi.");

// Put the text node as a child of the element:
newEl.appendChild(txt);

// Find a parent element to insert the new element into:
let someParent = document.getElementById('list'); // Example: an existing <ul> or <ol> with id="list"

// Insert the element into the parent:
someParent.appendChild(newEl);

// Result: A new <li> with text "Hi." will be added to the parent element.
```

**Result:**
```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Hi.</li>
</ul>
```

## Setting and accessing content as HTML
```js
// Access HTML content of a subtree:
let html = someElement.innerHTML;
// Set the HTML content of an element:
someElement.innerHTML = "<em>Hi!</em>";
```

## Remove nodes from the DOM
```html
  <div id="parent">
    <p id="child1">The first element</p>
    <p id="child2">The second element</p>
  </div>
```
```js
  const child1 = document.getElementById('child1');
  const parentElement = document.getElementById('parent');
  // Remove a child:
  someElement.removeChild(someChild);
  // Remove a given node:
  someElement.remove();
```

## Set and get attributes
```js
  // Get an attribute, e.g.:
  let url = aElem.getAttribute("href");
  // Set an attribute, e.g.:
  aElem.setAttribute("href", "http://cs.au.dk");
```

## Set a class on elements
```js
// As attribute:
// Set the class to “vigtigt”
elem.setAttribute("class", "vigtigt");
// Update the class to “vigtigt orange”. 
elem.setAttribute("class", "vigtigt orange");

// With classList:
elem.classList.add("vigtigt");
elem.classList.remove("vigtigt");
elem.classList.toggle("vigtigt");
```
## Set style on elements
```js
// As attribute:
elem.setAttribute("style", "color: hotpink;");

// With style object:
elem.style.color = "hotpink";
elem.style.backgroundColor = "black";

// Notice background-color becomes backgroundColor (camel case)!
```

## Events

• Mouse, keyboard and touch events  
**click, doubleclick, mousedown, mouseup, mousemove, mouseover,keydown, keyup, keypress,touchstart, touchmove, touchend**  
• Formular events  
**input, change, submit, reset, cut, copy, paste, select**  
• Browser events  
**load, unload, error, resize, scroll**  
• Focus events  
**focus, blur**  

Way to do that!
```js 
  // Event listeners (good)
  element.addEventListener("event", functionName);
  // Event handlers (bad)
  element.onevent = functionName;
  // HTML/attribute event handlers (ugly)
  <button onclick="doSomething()">Click me!</button>
```
## Event flow
![Desktop View](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20241115220620.png)
![Desktop View](https://linkingblog.oss-eu-central-1.aliyuncs.com/picgo/20241115220746.png)

## Event object  
- Always contains a target node event.target  
- Can also contain, e.g., the position of the the mouse or key pressed  

```js
el.addEventListener("mousemove", function(e) {
 console.log(`Position: (${e.x}, ${e.y})`);
});
```
## Change the flow
- event.preventDefault()
  - Prevents the default behaviour (e.g., of a link)
- event.stopPropagation()
  - The event won’t propagate any further

## Event delegation  
```js 
  // Install event listeners higher up in the tree
  document.addEventListener("click", function(e) {
  console.log("Clicked on", e.target);
  });

  // e.target can be used to figure out what, e.g., was clicked
  document.addEventListener("click", function(e) {
  if (e.target.tagName !== "IMG") return;
  e.target.classList.toggle("glow");
  })
```


