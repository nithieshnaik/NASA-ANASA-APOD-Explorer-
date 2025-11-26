# 🌌 NASA APOD Explorer

A full-stack project that displays NASA's Astronomy Picture of the Day (APOD), with a beautiful responsive UI, gallery view, modal display, date picker, caching, Docker support, and a fully functional backend proxy.
<img width="1900" height="908" alt="image" src="https://github.com/user-attachments/assets/0117eba6-e6b4-457f-a2ec-2277c7834ec6" />

---

## 🚀 Features

### Frontend
- ⚡ Pure HTML + CSS + Vanilla JavaScript (no React)
- 🎨 Stunning modern UI
- 🌗 Dark / Light mode toggle
- 📅 Date picker to browse APOD by date
- 🖼️ Gallery mode (last 14 days)
- 🔍 Modal with full description


### Backend
- 🛰️ Node.js + Express REST API
- 📡 Connects to NASA APOD API using API key
- 🚀 Local proxy (hides NASA key from frontend)
- 🧠 Built-in LRU caching (TTL + max size)
- 🌐 CORS enabled
- 🔒 API Key stored in `.env`

### Docker
- 🐳 Dockerfile for backend
- 🐳 Dockerfile for frontend (NGINX)
- 🐳 docker-compose for full-stack deployment

### Tools
- 🧪 Postman collection included
- 🗂️ Ready for cloud hosting
- 📦 No build step required for UI

---

## 📁 Project Structure

```
nasa-apod-explorer/
│
├── backend/
│   ├── src/
│   │   ├── index.js
│   │   └── apodService.js
│   ├── package.json
│   ├── Dockerfile
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── Dockerfile
│
├── docker-compose.yml
├── NASA-APOD.postman_collection.json
└── README.md
```

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the project

```bash
git clone https://github.com/yourusername/nasa-apod-explorer.git
cd nasa-apod-explorer
```

---

## ⚙️ Backend Setup

### 2️⃣ Install dependencies

```bash
cd backend
npm install
```

### 3️⃣ Create `.env`

Create a `.env` file in the `backend/` directory:

```env
NASA_API_KEY=YOUR_NASA_API_KEY
CACHE_TTL_SECONDS=3600
CACHE_MAX_ITEMS=200
```

> 🔑 Get your NASA API key: [https://api.nasa.gov/](https://api.nasa.gov/)

### 4️⃣ Start backend

```bash
npm run dev
```

Backend runs at:

```
http://localhost:4000
```

### API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/api/apod/today` | Today's APOD |
| `/api/apod/date?date=YYYY-MM-DD` | APOD for specific date |
| `/api/apod/range?start=YYYY-MM-DD&end=YYYY-MM-DD` | Range of APODs |

---

## 🎨 Frontend Setup

### 5️⃣ Run frontend (static HTML)

**Option A:** Open directly

Simply open `frontend/index.html` in your browser.

**Option B:** Serve via Node

```bash
npm install -g serve
cd frontend
serve
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🐳 Docker Deployment

Build and run both frontend and backend using Docker Compose:

### 6️⃣ Run with docker-compose

```bash
docker compose up --build
```

### Services

| Service | URL |
|---------|-----|
| Backend API | http://localhost:4000 |
| Frontend UI | http://localhost:3001 |

### 🐳 Dockerfile Summary

**Backend**

Located at `backend/Dockerfile`

**Frontend (NGINX static server)**

Located at `frontend/Dockerfile`

**docker-compose**

Located at `docker-compose.yml`

---

## 🧪 Postman Collection

Import the file:

```
NASA-APOD.postman_collection.json
```

**Includes:**
- Today APOD
- APOD by date
- APOD range

---

## 🌗 Dark / Light Mode Toggle

A toggle button is provided in the header:

```html
<button id="theme-toggle">Toggle Dark/Light</button>
```

CSS override rules ensure:
- Input fields
- Buttons
- Headers
- View toggle
- Modal fully support light mode

---



## 📦 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | HTML, CSS, JS, Tailwind |
| **Backend** | Node.js, Express |
| **Caching** | LRU-Cache |
| **Deployment** | Docker, Docker Compose |
| **Testing** | Postman |
| **API Source** | NASA APOD |

---

## 📬 Contact / Credits

**Made by:** Banothu Nithiesh Naik  
**Institute:** NIT Rourkela  
**API Source:** NASA API courtesy of [NASA Open APIs](https://api.nasa.gov/)

---

## ⭐ Future Improvements

Want to take this project further? Here are some ideas:

- 🔍 Search bar for APOD titles
- 📅 Infinite scroll gallery
- ⚡ Redis Cache integration
- 🌓 Animated dark/light mode transitions
- 🧭 Deploy to AWS / Render / Netlify
- 📱 Mobile app version (React Native / Flutter)

---


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- NASA for providing the incredible APOD API
- The open-source community for inspiration and tools

---


