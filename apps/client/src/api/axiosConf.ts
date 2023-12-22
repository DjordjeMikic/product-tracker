import axios from 'axios';

export default axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
