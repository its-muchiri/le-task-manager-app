
# ✅ Task Manager App

A modern and efficient task manager application built using **Rust** for the backend and **TypeScript** for the frontend. Designed to help users stay organized, track tasks, and manage their workflow with ease.

## 🚀 Tech Stack

- **Backend:** Rust (Actix Web )
- **Frontend:** TypeScript (React )
- **Database:** MySQL (as used)
- **API Communication:** REST / GraphQL (depending on your implementation)

## 🎯 Features

- Create, update, and delete tasks
- Mark tasks as complete/incomplete
- Categorize tasks by priority or project
- Responsive UI
- API integration between Rust and TypeScript
- Persistent storage with SQL database

## 📦 Project Structure

```
task-manager-app/
├── backend/           # Rust API backend
│   ├── src/
│   ├── Cargo.toml
│   └── ...
├── frontend/          # TypeScript frontend (React/Vue/Angular)
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```

## 🛠️ Getting Started

### Backend (Rust)

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Build and run the server:
   ```bash
   cargo run
   ```

3. Make sure the database is set up and the server connects correctly. Use `.env` for configuration if needed.

### Frontend (TypeScript)

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Visit [http://localhost:3000](http://localhost:3000) to see it in action.

## 🧪 Example API Routes

- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

*(Update according to your actual routes)*

## 📸 Screenshots

![screenshot](screenshot.png)  
_Add screenshots or a short demo GIF here._

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Built with 🦀 Rust and ⚡ TypeScript in my spare time. Contributions welcome!
```
