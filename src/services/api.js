import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/reviews",
  headers: {
    "Content-Type": "*", 
    "Access-Control-Allow-Origin": "*",
    "accept": "*/*"
  }
});

export default api;