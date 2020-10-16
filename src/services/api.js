import axios from 'axios';

const api = axios.create({
  baseURL: process.env.TMDB_BASE_URL,
  timeout: 1000,
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
  },
});

export default api;
