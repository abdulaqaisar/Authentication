import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
// import './Signup.css'

const auth = getAuth(app);

const Signin = ()=>{
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');

    const signinuser=()=>{
        signInWithEmailAndPassword(auth,email,password).then((value)=>alert("Signed in Success")).catch((err)=>alert(err));
    }




    return(  
    <div className="signup-page" >
    <h1>Sign In Page</h1>
   <label htmlFor="" className="em">Email</label>
   <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" required placeholder="Enter Email" className="email" />
   <label htmlFor="" className="em">Password</label>
   <input  onChange={(e)=>setpassword(e.target.value)} value={password} type="password" required placeholder="Enter Password" className="password" />
   <button onClick={signinuser} className="btn" >Sign In</button>
</div>
    )
}
export default Signin;