<h1 align="center">👋 To-Do List with Framework7 & PHP 👋</h1>

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
- 🗓️ Enable real-time task creation, editing, and deletion  
- 🔒 Securely store and manage data through a PHP-based API  
- 🛠️ Offer a modular and scalable architecture that can be expanded with additional features (e.g., authentication, task reminders, notifications)  

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

## 💪 Connecting API Backend to the Frontend
1. **Clone the Project**:
   - Clone the To-Do List repository into your local server directory. If using **XAMPP**, place it inside the `htdocs` folder.

2. **Update Framework7 Configuration**:
   - Open the `framework7.json` file and update the following line:
   ```json
   "cwd": "C:\\Xampp\\TodoList"
   ```
   - Replace the path with the actual server directory where the project is stored.

3. **Set Up the API**:
   - Clone the **TodoListApi** repository and place it inside the `htdocs` folder.
   - Import the `sbts_todolist.sql` file into your MySQL server to create the database.

4. **Configure Database Connection**:
   - Open the API configuration file and update the database credentials:
   ```php
   $pdo = new PDO('mysql:dbname=todolistapi; host=localhost', 'root', '');
   ```
   - Ensure the database name and credentials match your setup.

5. **Run the Application**:
   - Start your local server (e.g., XAMPP) and ensure both the front-end and API are running correctly.

---

---

## 🛠️ Technologies Used
- **Front-end**: [Framework7](https://framework7.io/) (HTML, CSS, JavaScript)
- **Back-end**: PHP + MySQL
- **API**: Communication via Framework7 Request API

---

## 👩‍💻 Author  
👤 **Ali Faouza**  

---
