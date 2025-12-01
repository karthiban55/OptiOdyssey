🌍 OptiOdyssey
AI-Powered Multi-Agent Travel Optimization System

OptiOdyssey is an intelligent travel planning platform that automates itinerary creation using real-time data and AI agents. It simplifies trip planning by recommending attractions, hotels, restaurants, weather updates, and even live flights — all optimized to user preferences.


🚀 Features

✔ Multi-agent architecture for intelligent decision-making
✔ Real attractions, restaurants & hotels using OpenTripMap
✔ Weather-aware recommendations using OpenWeather
✔ Live flight tracking using OpenSky
✔ Modern and responsive UI built with Next.js + TailwindCSS
✔ Real-time itinerary generation
✔ Dark theme, card-based design and map integration
✔ Parallel execution and dynamic trip optimization

🧠 Why Multi-Agent System?

Travel planning is complex and involves multiple decisions:

Sightseeing selection

Food & accommodation

Weather effects

Transportation

User preferences

Agents specialize in each domain, collaborate, and generate a more personalized and efficient travel experience than a single model approach.

🏛 Tech Stack
🎨 Frontend

Next.js (React Framework)

TailwindCSS

Axios

⚙ Backend API

FastAPI (Python)

PostgreSQL / SQLAlchemy (future)

🤖 Agents Service

Python Multi-agent orchestration

Uvicorn ASGI server

🌐 External APIs
API	Purpose
OpenTripMap	Attractions, restaurants & hotels
OpenWeather	Weather forecast
OpenSky	Live flight tracking
📌 Architecture Overview
Frontend (Next.js)
     ⬇ REST API Calls
Backend API (FastAPI)
     ⬇ Multi-Agent Coordination
Agents Service (Uvicorn)
     ⬇ Live External API Integrations
OpenTripMap, OpenWeather, OpenSky Data

🎯 How It Works

1️⃣ User enters destination & trip duration
2️⃣ Agents work in parallel to gather data
3️⃣ Backend optimizes and structures trip plan
4️⃣ UI displays real-time personalized itinerary

🧪 Screenshots
Home Page	Explore	Flights	Itinerary
(Add your screenshots here)			

💡 Upload screenshots to GitHub → copy image address → paste above

🛠 Installation & Run Locally
Clone the repo
git clone https://github.com/<username>/<repo>.git
cd OptiOdyssey

Backend
cd backend-api
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

Agents Service
cd ../agents
venv\Scripts\activate
uvicorn agents.server:app --reload --port 8001

Frontend
cd ../frontend
npm install
npm run dev


Then open 👉 http://localhost:3000

🎞 Demo

📌 (Add GIF / video link here when ready)
You can upload on GitHub Releases / Drive / YouTube

🚧 Future Enhancements

Flight & hotel booking integration

Offline itinerary PDF export

User accounts with trip history

Geospatial route optimization

Smartwatch travel assistant

Advanced preference learning agent

✨ Contributors

👤 Karthiban R 
👤 Pio Michael

📩 Connect with us on LinkedIn, GitHub, etc.

📜 License

MIT License — Free to use, modify, and distribute.

⭐ Support the Project

If this repo helped you, please ⭐ star it!
Your support motivates further development 🚀

