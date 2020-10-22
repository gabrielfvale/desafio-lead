import axios from 'axios';
import { TMDB_BASE_URL, TMDB_BEARER_TOKEN } from "@env";

const api = axios.create({
  baseURL: TMDB_BASE_URL,
  timeout: 1000,
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TMDB_BEARER_TOKEN}`,
  },
});

export default api;
