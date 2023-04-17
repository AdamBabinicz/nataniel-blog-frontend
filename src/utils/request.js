import axios from "axios";

const request = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://natanek.onrender.com",
});

export default request;
