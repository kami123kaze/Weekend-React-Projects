# React-Weather-API  
> Weekend Project #2 — Beginner-Intermidiate (1–4 hrs)

A **lightweight weather dashboard** that fetches real-time data from the [OpenWeatherMap API](https://openweathermap.org/api) and displays it with **React hooks**, **error handling**, **debounced search**, and **responsive CSS**.  
Perfect for learning **async data flow**, **state management**, and **API integration** without external UI libraries.

---

## What it does
- **Live weather**: current temp, feels-like, humidity, wind speed  
- **City search**: debounced input + graceful loading & error states  
- **Responsive layout**: mobile-first, dark/light toggle  
- **Under 50 kB** gzipped

---
## File	Learnings

useState, useEffect, conditional rendering
WeatherCard.jsx	prop drilling vs context, styled-components
SearchBar.jsx	debounced API calls, abort controller
ErrorBoundary.jsx	basic error boundary pattern


##  Quick Start
```bash
git clone https://github.com/kami123kaze/Weekend-React-Projects.git
cd React-Weather-api
npm install
# create .env and add: VITE_WEATHER_API_KEY=your_key
npm run dev
