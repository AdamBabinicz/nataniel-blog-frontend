import axios from "axios";

const request = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://blog-nataniel.netlify.app",
});

export default request;
