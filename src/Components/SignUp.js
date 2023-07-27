import React, { useContext, useState  } from "react";
import Context from "../Context/Context";
import axios from "axios";
import instaApi from "../utilities/instaApi";

const SignUp =()=>{

    let[user ,setUser] = useState({name:"" ,email:"" ,password:"",confirm_password:""})

    let [success , setSuccess] = useState("") ;    
    let [error , setError] = useState("") ;    
    let {token , setToken} = useContext(Context) ;


    let {name ,email , password , confirm_password} = user ;
     

    async function implementSignup(e){
        e.preventDefault() ;

        //validation on  
        if(!name || !email || !confirm_password || !password){
            setError("Please Add all the fields") ;
            setSuccess("") ;
            return ;
        }
        else if(password !== confirm_password){
            setError("Password do not match") ;
            setSuccess("") ;
            return ;
        }

        try{
            // const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{name , email, password })
            // OR
            let response = instaApi.post("/auth/signup" ,{name ,email ,password})
            setSuccess(response.data.message) ;
            setError("") ;
            setToken(response.data.data.token)
        }
        catch(error){
            setError(error.response.data.message)
            setSuccess("")

            console.log(error) ;
        }
    }

    return(
    <div className="signup">

        {error && <h1>{error}</h1>}
        {success && <h1>{success}</h1>}
        {token && <h1>{token}</h1>}



        <form onSubmit={implementSignup}>
            <input type="text" placeholder="enter your name" 
                value={user.name}
                onChange={(e)=>setUser({...user , name:e.target.value})}
            />
            <input type="email" placeholder="enter your email" 
                value={user.email}
                onChange={(e)=>setUser({...user , email:e.target.value})}
            />
            <input type="password" placeholder="enter your password" 
                value={user.password}
                onChange={(e)=>setUser({...user , password:e.target.value})}
            />
            <input type="password" placeholder="enter your confirm password" 
                value={user.confirm_password}
                onChange={(e)=>setUser({...user , confirm_password:e.target.value})}
            />

            <button type="submit">Sign Up</button>
        </form>
    </div>)
}

export default SignUp ;