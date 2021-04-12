import axios from "axios";
import apiUrl from './api_url'

const instance = axios.create({
  baseURL: apiUrl,
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance