import React, { useState } from "react";
import './Signup.css';
import { app } from "../firebase";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app)

const Signup=()=>{
    
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");

    const createuser=()=>{
        createUserWithEmailAndPassword(auth,email,password).then((value=>alert("success")));
    }
return(
    <div className="signup-page">
         <h1>Sign Up Page</h1>
        <label htmlFor="" className="em">Email</label>
        <input onChange={e=>setemail(e.target.value)} value={email} type="email" required placeholder="Enter Email" className="email" />
        <label htmlFor="" className="em">Password</label>
        <input onChange={e=>setpassword(e.target.value)} value={password} type="password" required placeholder="Enter Password" className="password" />
        <button className="btn" onClick={createuser}>Sign Up</button>
    </div>
)
}

export default Signup;