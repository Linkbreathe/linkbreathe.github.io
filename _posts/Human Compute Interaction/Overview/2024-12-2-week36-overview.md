--- 
title: HCI Overview Week 36 - Devices & JavaScript
author: <weixiong_626> 
date: 2024-12-02 21:33:00 +0200
categories: [Human Computer Interaction,Overview] 
math: true 
tags: []
---
## TRACK - A

------

### **1. Difference Between Input Devices (Direct vs. Indirect Control)**

- **Direct Control:**
  - Interaction occurs directly on the display or output area.
  - **Examples**: Touchscreens, light pens.
  - **Advantages**: Intuitive and straightforward for users as input corresponds directly to the output position.
  - **Disadvantages**: Limited precision due to finger size or occlusion (blocking the display with the hand).
- **Indirect Control:**
  - Input occurs away from the display area, and the device maps movement to the output.
  - **Examples**: Mouse, touchpads.
  - **Advantages**: Greater precision and does not occlude the display.
  - **Disadvantages**: Requires learning the mapping between input and output.

------

### **2. Degrees of Freedom, Controller Resistance, and Order of Control**

- **Degrees of Freedom (DoF):**
  - Refers to the number of independent movements an input device can detect.
    - **1 DoF**: Movement along one axis (e.g., volume slider).
    - **2 DoF**: Movement along two axes (e.g., mouse, joystick).
    - **6 DoF**: Movement and rotation in three-dimensional space (e.g., VR controllers).
- **Controller Resistance:**
  - Defines how a controller behaves when external force is applied.
    - **Isometric Controllers**: Fixed, only measure force (e.g., ThinkPad pointing stick).
    - **Isotonic Controllers**: Move freely, position maps to input (e.g., joystick).
    - **Elastic Controllers**: Return to a neutral position when released (e.g., game controllers).
- **Order of Control:**
  - Describes how input affects the output.
    - **Zero-Order Control**: Directly controls position (e.g., mouse cursor position).
    - **First-Order Control**: Controls velocity (e.g., controlling the speed of a vehicle).
    - **Second-Order Control**: Controls acceleration (e.g., advanced simulations).

------

### **3. Comparing Input Devices Using the Design Space**

- Use the following criteria:

  - **Physical Properties**: Linear (e.g., sliders) or rotary (e.g., knobs).

  - Control Type:

    - **Position Control**: Absolute (e.g., touchscreens) or relative (e.g., mouse).
    - **Force Control**: Isometric, isotonic, or elastic.

  - **Precision and Accuracy**: E.g., mouse offers high precision, while touchscreens may lack it.

  - **Speed**: Direct input (e.g., touchscreen) is faster than indirect input (e.g., mouse) for selection tasks.

  - **User Context**: Suitability based on task complexity and user expertise.

------

### **4. What is Control-Display Gain?**

- **Definition**: The ratio of the cursor movement on the display to the physical movement of the input device.
  - **Example**: Moving a mouse 1 cm causes the cursor to move 10 cm on the screen → control-display gain = 10.
- **Adaptive Gain:**
  - Higher gain for fast movements (quick navigation).
  - Lower gain for slow movements (precise tasks).
  - **Example**: Mouse acceleration adjusts the gain dynamically based on the speed of movement.

------

### **5. What is a Transfer Function and How Is It Used?**

- **Definition**: A mathematical function that maps input device movements to output on the display.
  - **Example**: For a mouse, the transfer function determines how far the cursor moves based on the mouse's movement.
- **Usage:**
  - **Precision Tasks**: Low sensitivity for small movements (e.g., graphic design).
  - **Speed Tasks**: High sensitivity for large movements (e.g., navigating large screens).
  - Used to balance speed and precision by dynamically adjusting control-display gain.

------

### **6. Differences Between Display Types**

- **CRTs (Cathode Ray Tubes):**

  - **Advantages**: Rich color, fast refresh rates.
  - **Disadvantages**: Bulky and energy-intensive.
  - **Use Case**: Legacy systems.

- **LCDs (Liquid Crystal Displays):**

  - **Advantages**: Slim profile, energy-efficient.
  - **Disadvantages**: Limited viewing angles, slower refresh rates.
  - **Use Case**: Standard computer monitors and TVs.

- **OLEDs (Organic Light-Emitting Diodes):**

  - **Advantages**: True blacks, high contrast, flexible displays.
  - **Disadvantages**: Expensive, potential burn-in.
  - **Use Case**: Smartphones, premium TVs.

- **Touchscreens:**

  - Resistive:

    - **Advantages**: Low cost, works with any object.
    - **Disadvantages**: No multitouch, limited durability.

  - Capacitive:

    - **Advantages**: Multitouch support, more durable.
    - **Disadvantages**: Requires conductive input (e.g., finger).

  - Optical:

    - **Advantages**: Large displays, supports gesture recognition.
    - **Disadvantages**: Sensitive to environmental lighting.

- **VR and AR Displays:**

  - VR:

    - Immersive head-mounted displays with high refresh rates to prevent motion sickness.
    - **Examples**: Oculus Rift, HTC Vive.

  - AR:

    - Augments real-world views with digital overlays.
    - **Examples**: HoloLens, Apple Vision Pro.

------



## TRACK - B


### 1. Statements vs. Expressions

#### **Expression**

An expression is any valid unit of code that resolves to a value. Expressions can be as simple as literals or variables, or they can involve operations and function calls.

**Examples:**

```javascript
5 + 3          // Arithmetic expression, evaluates to 8
"Hello"        // String literal expression
a * b          // Multiplicative expression
myFunction()   // Function call expression
```

#### **Statement**

A statement performs an action. It’s a complete instruction that tells the JavaScript engine to do something. Statements can contain expressions.

**Examples:**

```javascript
let x = 5;                     // Variable declaration statement
if (x > 3) { console.log(x); } // If statement
for (let i = 0; i < 10; i++) { } // For loop statement
```

**Key Difference:** Every expression can be part of a statement, but not every statement is an expression.

------

### 2. Conditional Statements (`if`) in JavaScript

Conditional statements allow your code to make decisions based on conditions.

#### **Basic `if` Statement**

```javascript
if (condition) {
  // Code to execute if condition is true
}
```

#### **`if...else` Statement**

```javascript 
if (condition) {
  // Code if condition is true
} else {
  // Code if condition is false
}
```

#### **`if...else if...else` Statement**

```javascript 
if (condition1) {
  // Code if condition1 is true
} else if (condition2) {
  // Code if condition2 is true
} else {
  // Code if none of the above conditions are true
}
```

#### **Example:**

```javascript 
let score = 85;

if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else {
  console.log('Grade: C');
}
// Output: Grade: B
```

------

### 3. Loops (`while`, `for`, and `for...of`) in JavaScript

Loops allow you to execute a block of code multiple times.

#### **`while` Loop**

Executes as long as a specified condition is true.

```javascript 
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Outputs: 0, 1, 2, 3, 4
```

#### **`for` Loop**

Consists of initialization, condition, and increment/decrement.

```javascript 
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Outputs: 0, 1, 2, 3, 4
```

#### **`for...of` Loop**

Iterates over iterable objects like arrays, strings, etc.

```javascript 
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit);
}
// Outputs: apple, banana, cherry
```

------

### 4. Defining Arrays and Their Basic Properties and Methods

#### **Defining Arrays**

Arrays are used to store multiple values in a single variable.

**Using Array Literals:**

```javascript
const numbers = [1, 2, 3, 4, 5];
```

**Using the `Array` Constructor:**

```javascript
const fruits = new Array('apple', 'banana', 'cherry');
```

#### **Basic Properties**

- `length`

  : Returns the number of elements in the array.

  ```javascript
  console.log(numbers.length); // Output: 5
  ```

#### **Basic Methods**

- `push()`

  : Adds one or more elements to the end.

  ``` javascript
  numbers.push(6); // numbers = [1, 2, 3, 4, 5, 6]
  ```

- `pop()`

  : Removes the last element.

  ```javascript
  numbers.pop(); // numbers = [1, 2, 3, 4, 5]
  ```

- `shift()`

  : Removes the first element.

  ```javascript
  numbers.shift(); // numbers = [2, 3, 4, 5]
  ```

- `unshift()`

  : Adds one or more elements to the beginning.

  ```javascript
  numbers.unshift(1); // numbers = [1, 2, 3, 4, 5]
  ```

- `splice()`

  : Adds/removes elements at a specified index.

  ```javascript
  numbers.splice(2, 1, 99); // numbers = [1, 2, 99, 4, 5]
  ```

- `slice()`

  : Returns a shallow copy of a portion of the array.

  ```javascript
  const newNumbers = numbers.slice(1, 3); // newNumbers = [2, 99]
  ```

------

### 5. Iterating Over Arrays

Iterating allows you to access each element in an array sequentially.

#### **Using `for` Loop**

```javascript 
const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

#### **Using `for...of` Loop**

```javascript 
for (const fruit of fruits) {
  console.log(fruit);
}
```

#### **Using `forEach` Method**

```javascript 
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Using Arrow Function
fruits.forEach(fruit => console.log(fruit));
```

#### **Using `map` Method**

While `map` is typically used to create a new array by applying a function to each element, it can also be used for iteration.

```javascript
fruits.map(fruit => console.log(fruit));
```

------

### 6. Functions and Different Ways to Define Them

Functions are reusable blocks of code designed to perform a particular task.

#### **Function Declaration**

```javascript 
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5
```

#### **Function Expression**

```javascript 
const subtract = function(a, b) {
  return a - b;
};

console.log(subtract(5, 2)); // Output: 3
```

#### **Arrow Function**

Introduced in ES6, arrow functions provide a concise syntax.

```javascript 
const multiply = (a, b) => {
  return a * b;
};

// If the function has a single expression, you can omit the braces and `return` keyword
const divide = (a, b) => a / b;

console.log(multiply(3, 4)); // Output: 12
console.log(divide(10, 2));   // Output: 5
```

#### **Anonymous Function**

Functions without a name, often used as arguments.

```javascript 
setTimeout(function() {
  console.log('This runs after 1 second');
}, 1000);
```

#### **Immediately Invoked Function Expression (IIFE)**

A function that runs as soon as it is defined.

```javascript 
(function() {
  console.log('IIFE executed');
})();
```

------

### 7. Scoping in JavaScript

Scoping determines the accessibility of variables and functions in different parts of the code.

#### **Global Scope**

Variables declared outside any function or block are globally scoped and accessible anywhere in the code.

```javascript 
let globalVar = 'I am global';

function checkScope() {
  console.log(globalVar); // Accessible
}

checkScope(); // Output: I am global
```

#### **Function Scope**

Variables declared within a function are only accessible inside that function.

```javascript 
function myFunction() {
  let functionVar = 'I am inside a function';
  console.log(functionVar); // Accessible
}

myFunction();
console.log(functionVar); // Error: functionVar is not defined
```

#### **Block Scope**

Introduced with `let` and `const` in ES6, variables declared within a block `{}` are only accessible inside that block.

```javascript 
{
  let blockVar = 'I am inside a block';
  console.log(blockVar); // Accessible
}
console.log(blockVar); // Error: blockVar is not defined
```

#### **Hoisting**  

javascript hoists declarations to the top of their scope. However, `let` and `const` are hoisted differently compared to `var`.

```javascript 
console.log(a); // Undefined (due to hoisting)
var a = 5;

console.log(b); // Error: Cannot access 'b' before initialization
let b = 10;
```

#### **Lexical Scope**
javascript uses lexical scoping, meaning the accessibility of variables is determined by their physical placement in the code.

```javascript 
function outer() {
  let outerVar = 'Outer';

  function inner() {
    let innerVar = 'Inner';
    console.log(outerVar); // Accessible
  }

  inner();
  console.log(innerVar); // Error: innerVar is not defined
}

outer();
```

------

### 8. Creating and Manipulating Objects in JavaScript

Objects are collections of key-value pairs and are fundamental to JavaScript.

#### **Creating Objects**

```javascript 
const person = {
  name: 'Alice',
  age: 30,
  greet: function() {
    console.log('Hello!');
  }
};
```

#### **Accessing Properties**

- Dot Notation:

  ```javascript
  console.log(person.name); // Output: Alice
  ```

- Bracket Notation:

  ```javascript
  console.log(person['age']); // Output: 30
  ```

#### **Adding/Modifying Properties**

```javascript 
person.email = 'alice@example.com'; // Adding
person.age = 31;                    // Modifying
```

#### **Deleting Properties**

```javascript
delete person.email;
```

#### **Methods**

Functions stored as object properties.

```javascript
person.greet(); // Output: Hello!
```

#### **Using `this` Keyword**

Refers to the current object within its methods.

```javascript 
const person = {
  name: 'Bob',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Output: Hello, my name is Bob
```

#### **Dynamic Properties**

You can add or remove properties at runtime.

```javascript 
person['hobby'] = 'painting';
delete person.age;
```

------

### 9. Defining Objects: Object Literal Notation vs. Constructor Function

#### **Object Literal Notation**

A concise way to create objects using curly braces `{}`.

```javascript 
const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020,
  getInfo: function() {
    return `${this.make} ${this.model} (${this.year})`;
  }
};

console.log(car.getInfo()); // Output: Toyota Corolla (2020)
```

**Pros:**

- Simple and straightforward.
- Ideal for single objects.

**Cons:**

- Not suitable for creating multiple similar objects.

#### **Constructor Function**

A function used with the `new` keyword to create multiple similar objects.

```javascript 
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getInfo = function() {
    return `${this.make} ${this.model} (${this.year})`;
  };
}

const car1 = new Car('Honda', 'Civic', 2019);
const car2 = new Car('Ford', 'Mustang', 2021);

console.log(car1.getInfo()); // Output: Honda Civic (2019)
console.log(car2.getInfo()); // Output: Ford Mustang (2021)
```

**Pros:**

- Efficient for creating multiple objects with similar structure.
- Encourages reusability.

**Cons:**

- Less intuitive compared to object literals for single objects.
- Can lead to duplication if methods are not properly managed (methods are recreated for each instance).

------

### 10. Using the `class` Syntax

Introduced in ES6, the `class` syntax provides a clearer and more familiar way to create objects and handle inheritance.

#### **Defining a Class**

```javascript 
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const animal1 = new Animal('Leo', 'Lion');
animal1.speak(); // Output: Leo makes a noise.
```

#### **Inheritance**

Classes can inherit from other classes using the `extends` keyword.

```javascript 
class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'Dog'); // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog('Rex', 'German Shepherd');
dog1.speak(); // Output: Rex barks.
```

#### **Getters and Setters**

Classes can have getter and setter methods to access and modify properties.

```javascript 
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter for area
  get area() {
    return this.width * this.height;
  }

  // Setter for area
  set area(value) {
    this.width = value / this.height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // Output: 50
rect.area = 100;
console.log(rect.width); // Output: 20
```

#### **Static Methods**

Methods that belong to the class itself, not to instances.

```javascript 
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3)); // Output: 8
```

#### **Private Fields and Methods (ES2022+)**

Private fields and methods are accessible only within the class.

```javascript 
class Person {
  #ssn; // Private field

  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn;
  }

  getSSN() {
    return this.#ssn;
  }
}

const person = new Person('Alice', '123-45-6789');
console.log(person.getSSN()); // Output: 123-45-6789
console.log(person.#ssn); // Syntax Error: Private field '#ssn' must be declared in an enclosing class
```

**Note:** Private fields are a recent addition and may not be supported in all environments.

------

### Summary

Understanding these fundamental JavaScript concepts is crucial for effective programming. Here's a quick recap:

- **Statements vs. Expressions:** Statements perform actions; expressions resolve to values.
- **Conditional Statements:** Use `if`, `else if`, and `else` to control the flow based on conditions.
- **Loops:** Use `while`, `for`, and `for...of` to repeat code blocks.
- **Arrays:** Store multiple values; utilize properties like `length` and methods like `push()`, `pop()`, etc.
- **Iterating Arrays:** Use loops (`for`, `for...of`) or array methods (`forEach`, `map`) to traverse arrays.
- **Functions:** Define reusable code blocks using declarations, expressions, or arrow functions.
- **Scoping:** Understand global, function, and block scopes, along with hoisting and lexical scope.
- **Objects:** Create and manipulate key-value pairs; access and modify properties.
- **Object Definitions:** Use object literals for single objects or constructor functions for multiple similar objects.
- **Classes:** Utilize `class` syntax for cleaner object-oriented programming, inheritance, and encapsulation.


------

