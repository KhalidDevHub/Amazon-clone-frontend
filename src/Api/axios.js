import axios from 'axios'
export const axiosInstance = axios.create({
  //for local server firebase function
  baseURL: "http://localhost:5173",

  // deployed version of amazon server in render.com
  // baseURL: "https://amazon-backend-deploy-dotb.onrender.com/",
});
