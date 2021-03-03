import axios from "axios";

const api = axios.create({
  baseURL: 'https://95edfd17f5dc.ngrok.io',
});

export default api;
