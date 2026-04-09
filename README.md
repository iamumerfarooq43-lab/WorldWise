# WorldWise – Your Interactive Travel Footprint

## Project Description
WorldWise is a travel tracking web application that helps users document and visualize their journeys around the world. Through an interactive map interface, users can mark visited locations, record trip details such as travel dates and notes, and maintain a persistent history of explored cities and countries.

## Problem It Solves
Travelers often forget exact dates, locations, and experiences from past trips. WorldWise solves this problem by providing a map-based travel diary that combines geographic visualization with detailed trip records, making travel history easier to organize, remember, and explore.

## Key Features
- Interactive world map using Leaflet
- Add and save visited cities with trip details
- Automatically generate visited countries list
- Record travel dates and personal notes for each location
- Real-time UI updates without page reloads
- Persistent local data storage using mock backend API

## Tech Stack

### Frontend
- React 19
- JavaScript (ES6+)

### Build Tool
- Vite

### Backend / API
- json-server (Mock REST API)

### Styling
- CSS Modules

## React Concepts & Hooks Used
- `useReducer` – Manages complex application state
- `useContext` – Provides global state via CitiesContext
- `useEffect` – Handles backend synchronization
- `useCallback` – Optimizes rendering performance
- Custom Hook: `useCities` – Simplifies context access logic

## Third-Party Libraries
- `react-leaflet` / `leaflet` – Interactive maps
- `react-router-dom` – Routing and navigation
- `react-datepicker` – Date selection UI
- `eslint` – Code quality and linting

## Project Structure
```bash
/data
  cities.json

/src
  /Contexts
    CityContext.jsx
  /Pages
    AppLayout.jsx
    Homepage.jsx
    Login.jsx
  /Components
    Sidebar.jsx
    Map.jsx
    CityList.jsx
    Form.jsx

## Target Audience
- Travel enthusiasts and hobby travellers
- Digital nomads tracking travel history
- Geography learners and data visualisation enthusiasts

## Future Improvements
- User authentication system
- Cloud database integration
- Travel statistics dashboard
- Photo upload for trip memories
