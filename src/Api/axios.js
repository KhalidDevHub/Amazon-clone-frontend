import axios from 'axios'
export const axiosInstance = axios.create({
  //for local server firebase function
  // baseURL: "http://127.0.0.1:5001/clone-c9bf9/us-central1/api",

  // deployed version of amazon server in render.com 
  baseURL: "https://amazone-api-backend.onrender.com",
});
