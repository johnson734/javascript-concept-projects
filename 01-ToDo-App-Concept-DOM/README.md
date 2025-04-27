

# 📝 What I Learned from Building a JavaScript Todo App

Hey there! 👋  
This project was a simple yet powerful way to level up my JavaScript skills. I built a Todo App that lets users add, delete, complete, and filter tasks — and even remembers them using the browser's **local storage**. Below is a fun and clear breakdown of everything I learned! 💡

---

## 🌐 1. Working with the DOM (Document Object Model)

- 📌 I learned how to grab HTML elements using `document.querySelector()`.
- 🧱 I created elements like `<div>`, `<li>`, and `<button>` with `document.createElement()`.
- 🔗 I connected everything together using `.appendChild()`.
- 🎨 I styled and changed behavior by adding/removing classes with `.classList`.

---

## 🖱️ 2. Adding Event Listeners

- 🔁 I used `addEventListener()` to respond to actions like:
  - Clicking buttons (`click`)
  - Page fully loading (`DOMContentLoaded`)
- 🎯 These events helped trigger functions like adding or deleting tasks.

---

## 💾 3. Using Local Storage

- ✅ I saved todos in the browser using `localStorage.setItem()`.
- 🧠 I used `JSON.stringify()` and `JSON.parse()` to convert between strings and arrays.
- 🛠️ I handled errors when local storage was empty or broken by using fallback checks.

---

## ✅ 4. Building Core Features

- ✍️ **Add Todo** – When the user types and hits the button, a new task appears.
- 🗑️ **Delete Todo** – Clicking the trash button removes the task with a smooth animation.
- ☑️ **Complete Todo** – Clicking the check button marks it as done.
- 🧹 **Filter Todos** – You can view:
  - All tasks
  - Only completed ones
  - Only the ones still left

---

## 🛠️ 5. JavaScript Logic & Methods

- 🔁 I used loops like `forEach()` to loop through all tasks.
- 📦 I used array methods like `.push()`, `.splice()`, and `.indexOf()` to manage tasks.
- 🧠 I learned how to write **reusable functions** to keep my code organized.
 

## 🌈 What’s Cool About This Project?

- It works completely in the browser — no database needed.
- It remembers your tasks using localStorage.
- It was a great way to learn how JavaScript brings HTML and CSS to life!

---
 