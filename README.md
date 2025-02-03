
<h1 align="center">📋 To-Do List with Framework7 & PHP 👋</h1>

<p align="center">
  <a href="#" target="_blank">
    <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## 📝 Project Description  
This project is a **To-Do List application** built using **Framework7** for the front-end and **PHP** for the back-end. It allows users to efficiently manage their daily tasks through a modern, responsive web interface.  

With **Framework7**, the application provides a smooth and intuitive user experience, optimized for both mobile devices and modern browsers. The back-end, developed in **PHP**, handles data management using a **MySQL** database.  

### 🎯 Project Goals  
- ✅ Provide a user-friendly and responsive interface for task management  
- 📅 Enable real-time task creation, editing, and deletion  
- 🔒 Securely store and manage data through a PHP-based API  
- 🛠️ Offer a modular and scalable architecture that can be expanded with additional features (e.g., authentication, task reminders, notifications)  

---

## 🛠️ Technologies Used
- **Front-end**: [Framework7](https://framework7.io/) (HTML, CSS, JavaScript)
- **Back-end**: PHP + MySQL
- **API**: Communication via AJAX

---

## 🛠️ Install Dependencies  
First, install the dependencies by running:  
```sh
npm install
```

## 🚀 Usage  
Start the application with:  
```sh
npm run start
```

If you're running the PHP back-end separately, start a local server:  
```sh
php -S localhost:8000
```
Then, access the application at: [http://localhost:8000](http://localhost:8000)

---

## 📷 Preview  
(Include a screenshot of your application here)

---

## 💪 API Endpoints (if applicable)
### 🔹 Get all tasks
```http
GET /api/tasks
```
### 🔹 Add a new task
```http
POST /api/tasks
Body: { "title": "My Task" }
```
### 🔹 Delete a task
```http
DELETE /api/tasks/:id
```

---

## 👩‍💻 Author  
👤 **Ali Faouza**  

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator) and customized for this project._  


