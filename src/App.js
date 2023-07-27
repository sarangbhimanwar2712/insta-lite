import React from "react";
import "./style.css"
import SignUp from "./Components/SignUp";
import { Routes , Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";

const App =()=>{


  return(
    <div>
        <Routes>
            <Route path="/" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>

        </Routes>
    </div>
  )
}
export default App;
