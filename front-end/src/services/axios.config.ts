// front-end/src/services/axios.config.ts
import axios from 'axios';

const baseURL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080';

export const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
