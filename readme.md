# PERN Todo App

A full-stack **To-Do List Application** built with the **PERN** stack (**PostgreSQL, Express.js, React, and Node.js**). This project allows users to **create, read, update, and delete (CRUD)** tasks efficiently.

## 🌐 Live Demo

[Check it out here](https://pern-todo-rust.vercel.app/)

## 🚀 Features

- ✅ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- 📜 View all tasks in real-time
- 🔄 Latest tasks appear at the top (sorted by creation date)
- 🔒 Secure backend deployed on Render
- 🎨 Modern UI with React

## 🛠️ Tech Stack

### Frontend:

- **React.js** – Client-side UI
- **Vite** – Fast bundling & development
- **CSS** – Styling
- **Axios/Fetch** – API calls

### Backend:

- **Node.js** – Server runtime
- **Express.js** – Backend framework
- **PostgreSQL** – Database
- **pg (node-postgres)** – Database client
- **CORS & dotenv** – Security & environment variables

### Deployment:

- **Frontend** – [Vercel](https://vercel.com/)
- **Backend** – [Render](https://render.com/)
- **Database** – [PostgreSQL on Koyeb](https://app.koyeb.com/)

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Ozioma45/Pern_todo
cd pern_todo
```

### 2️⃣ Set Up the Backend

```sh
cd server
npm install
```

#### Configure PostgreSQL

Create a `.env` file in the `server` directory and add:

```env
DATABASE_USER=your_postgres_user
DATABASE_PASSWORD=your_postgres_password
DATABASE_HOST=your_database_host
DATABASE_NAME=your_database_name
```

Start the backend:

```sh
npm start
```

### 3️⃣ Set Up the Frontend

```sh
cd ../client
npm install
npm run dev
```

## 🌍 Deployment

### Frontend (Vercel)

```sh
vercel
```

### Backend (Render)

1. Push backend code to GitHub
2. Deploy on [Render](https://render.com/)
3. Update `.env` with Render database URL

## ⚡ API Endpoints

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| GET    | `/todos`     | Fetch all tasks |
| POST   | `/todos`     | Add a new task  |
| PUT    | `/todos/:id` | Update a task   |
| DELETE | `/todos/:id` | Delete a task   |

## 📝 License

This project is **open-source** and available under the **MIT License**.

---

### 🎯 Created by [Ozioma Egole](https://github.com/ozioma45)

🚀 Happy coding!
