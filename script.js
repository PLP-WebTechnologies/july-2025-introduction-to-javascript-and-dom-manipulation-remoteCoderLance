// ==========================
// 🎯 Part 1: Basics
// ==========================

// Variable declarations and conditionals
document.getElementById("greetBtn").addEventListener("click", function () {
  let name = document.getElementById("username").value;

  if (name) {
    document.getElementById("greeting").textContent = "Hello, " + name + "! 👋";
  } else {
    document.getElementById("greeting").textContent = "Please enter your name.";
  }
});

// ==========================
// ❤️ Part 2: Functions
// ==========================

// Function to calculate a total
function showTotal(a, b) {
  let total = calculateTotal(a, b);
  document.getElementById("totalResult").textContent = "Total = " + total;
}

// Reusable function (keeps code DRY)
function calculateTotal(x, y) {
  return x + y;
}

// Example utility function
function formatString(str) {
  return str.trim().toUpperCase();
}

// ==========================
// 🔁 Part 3: Loops
// ==========================

// Countdown using a for loop
document.getElementById("countdownBtn").addEventListener("click", function () {
  let countdownList = document.getElementById("countdownList");
  countdownList.innerHTML = "";

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = "Countdown: " + i;
    countdownList.appendChild(li);
  }
});

// Example using while loop
let numbers = [1, 2, 3, 4, 5];
let i = 0;
while (i < numbers.length) {
  console.log("Number:", numbers[i]);
  i++;
}

// ==========================
// 🌐 Part 4: DOM Manipulation
// ==========================

// Change title color on click
document.getElementById("changeColorBtn").addEventListener("click", function () {
  document.getElementById("main-title").style.color =
    document.getElementById("main-title").style.color === "red"
      ? "black"
      : "red";
});

// Add new list items dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
});

// Example DOM query
console.log("Document title is:", document.title);
