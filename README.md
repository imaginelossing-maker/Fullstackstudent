# Student Manager

Separated full-stack project.

## Frontend
The `frontend/` folder contains the React + Vite application. It can be deployed separately to a frontend host such as GitHub Pages.

## Backend
The `backend/` folder contains the Node.js + Express API. It must be deployed to a backend-capable host and connected to PostgreSQL.

## Local development

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Set `VITE_API_URL` in `frontend/.env` to the backend API URL.

### Backend
```bash
cd backend
npm install
```

Create `backend/.env` based on `.env.example`, configure PostgreSQL, then run:

```bash
npm run dev
```
