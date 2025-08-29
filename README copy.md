# 🚀 Mastering JavaScript Fundamentals

Welcome to the **JavaScript Fundamentals** assignment! This project demonstrates key JavaScript concepts including **variables, data types, conditionals, functions, loops, and DOM manipulation**. It is designed to help you practice creating interactive web pages and build a solid foundation in JavaScript.

---

## 📂 Project Structure

project/
│── index.html # HTML structure
│── style.css # Optional CSS styling
│── script.js # JavaScript code for all parts

---

## 🎯 Features & Objectives

### Part 1: JavaScript Basics
- Capture user input via a text field.
- Use conditionals to check for valid input.
- Display personalized messages dynamically.

**Example:**  
```javascript
let name = document.getElementById("username").value;
if (name) {
  document.getElementById("greeting").textContent = "Hello, " + name + "!";
}

function calculateTotal(a, b) { return a + b; }
function formatString(str) { return str.trim().toUpperCase(); }

document.getElementById("changeColorBtn").addEventListener("click", function() {
  document.getElementById("main-title").style.color = "red";
});

let newItem = document.createElement("li");
newItem.textContent = "New Item";
document.getElementById("dynamicList").appendChild(newItem);
