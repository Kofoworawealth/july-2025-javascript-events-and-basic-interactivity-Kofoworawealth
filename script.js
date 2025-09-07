// ============================
// Part 1: Event Handling
// ============================
const toggleBtn = document.getElementById("toggleMessageBtn");
const message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
  message.style.display = message.style.display === "none" ? "block" : "none";
});

// ============================
// Part 2: Interactive Elements
// ============================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increment").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});

// ============================
// Part 3: Form Validation
// ============================
const form = document.getElementById("registerForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

 const name = document.getElementById("name").value.trim();
