import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-type": "application/json"
  }
});

api.interceptors.request.use(async (config) => {
try {
//   const token = localStorage.getItem('token');
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJpYXQiOjE3MTI1ODI3OTYsImV4cCI6MTcxMjU4MzY5Nn0.8n7TIUMxGNwTb1DlTLqFmLCOL9Oym_LiziYIVwWgAwQ";
  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
} catch (error) {
  console.log(error);
}
});

export default api;