import React from "react";
import axios from "axios";

// instance of  axios
const instaApi = axios.create({
    baseURL: "https://instagram-express-app.vercel.app/api" ,
    
})

export default instaApi