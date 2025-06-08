// src/config.ts
const isProduction = import.meta.env.PROD;

export const API_BASE_URL = isProduction 
  ? 'https://jabalpur-serves-backend.onrender.com' // <-- PASTE YOUR RENDER URL HERE
  : 'http://localhost:5000';