# AI Credit Scoring Frontend (React)

## Overview
This frontend is a minimal, user-friendly React application designed solely to showcase and demo the capabilities of my custom, from-scratch Artificial Neural Network (ANN) for credit scoring. It provides a simple interface for users to input data and view predictions, making the backend model accessible for demonstration and testing purposes.

## Features
- **Simple, intuitive form** for entering all required credit scoring features
- **Material UI (MUI)** for quick, accessible, and responsive design
- **Seamless API integration** with the FastAPI backend
- **Clear result display** for model predictions and confidence
- **Basic error handling** and loading indicators

## Tech Stack
- **React 19+**
- **Material UI (MUI)**
- **React Router v6**
- **Vite**

## Purpose & User Flow
1. **Input:** Users enter financial and demographic data in a single form.
2. **Submit:** Data is sent to the backend, which runs the custom ANN for prediction.
3. **Result:** The predicted credit score and confidence are displayed for the user.

## Why This Frontend?
- **Demonstration only:** The frontend is intentionally minimal, serving as a bridge to let users interact with the backend model.

## Getting Started
1. **Clone the repo:**
   ```bash
   git clone <your-repo-url>
   cd AICreditScoring_frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Project Structure
```
AICreditScoring_frontend/
├── src/
│   ├── pages/
│   │   ├── FormPage.jsx      # Main form for user input
│   │   └── ResultPage.jsx    # Displays prediction results
│   ├── App.jsx               # Routing and main app
│   ├── App.css               # Custom styles
│   └── ...
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## About Me
I'm Evan, a backend and machine learning engineer passionate about building robust APIs, data pipelines, and neural networks from scratch. This project demonstrates:
- My ability to implement and train neural networks using only NumPy
- End-to-end ML deployment with a custom FastAPI backend
- Clean, maintainable, and production-ready backend code

The frontend is provided only to make my backend and ML work accessible for demo and testing.