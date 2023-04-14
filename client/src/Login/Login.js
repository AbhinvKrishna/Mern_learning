import React, { useState } from 'react'
import './Login.css'
import email from '../Signup/email.png';
import password from '../Signup/password.png';
import LoginLogo from './loginLogo.png';
import {Link} from "react-router-dom"

function Login() {

  const[ulogin, setUlogin]= useState({})

  const loginChange= (e)=>{
    console.log(e.target.name,e.target.value);

    setUlogin({
      ...ulogin,
      [e.target.name]:e.target.value 
    })
    console.log(ulogin);
  }

  const loginSubmit =async(e)=>{
    e.preventDefault();

    const loginResponse = await fetch("http://localhost:5000/signin",{
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(ulogin)
    })

    const loginData = await loginResponse.json();
    console.log(loginData);

  }

  return (
    <div>
       <div className="loginPage">
    <div className='container loginForm'>

    <div className="loginSign" >
      <img src={LoginLogo} alt="logo" style={{height: "400px",margin: "20px 40px"}}/>
      <Link to="/signUp" style={{marginLeft:"90px"}} >If not Registered, Create account </Link>
     </div>

      <div className="loginDetails">
     <h2 className='boldit'>Sign In</h2>

     <form onSubmit={loginSubmit}>
     <div className="logCont">
     <div className="logDetails">
      <img src={email} alt="img" style={{width:"30px"}} />
      <input type="email" name='email' id='email' onChange={loginChange} autoComplete='off' placeholder='Your Email' />
     </div>
     <div className="logDetails">
      <img src={password} alt="img" style={{width:"30px"}} />
      <input type="password" name='password' id='password' onChange={loginChange} autoComplete='off' placeholder='Password' />
     </div>

   {/*  <-- submit button --> */}
    <div className="lBtn">
     <input type='submit' name='signin' id='signin' value="Login" />
     </div>

     </div>
     </form>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Login;
