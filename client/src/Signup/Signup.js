import React, {useState} from 'react'
import './Signup.css'
import userimg from '../Signup/user.png'
import email from '../Signup/email.png'
import number from '../Signup/number.png'
import work from '../Signup/work.jpg'
import password from '../Signup/password.png'
import cpassword from '../Signup/cpassword.webp'
import signupLogo from '../Signup/signupLogo.png'
import { Link,useNavigate } from 'react-router-dom'

function Signup() {

  const Navigate = useNavigate();

  const [user, setUser] = useState({
    name:"",
    email:"",
    number:"",
    work:"",
    password:"",
    cpassword:""
  });

  let name, value;
  const handleInputs=(e)=>{
    name = e.target.name;
    value= e.target.value;

    setUser({...user,[name]:value})
    console.log(user);
  }

const PostData =async (e)=>{
  e.preventDefault();

  const {name, email, number, work, password, cpassword } = user;

  const res = await fetch("http://localhost:8000/register", {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name:name, email:email, number:number, work:work, password:password, cpassword:cpassword
    })
  });

  const data = await res.json();

  if(data.status===422 || !data){
    window.alert("Invalid Registration")
    console.log("Invalid Registration")
  }
  else{
    window.alert("Registration Successfull");
    console.log("Registration Successfull");    

    Navigate('/login');
  }

}

  return (
    <>
    <div className="signPage">
    <div className='container form'>

      <div className="userDetails">
     <h2 className='boldit'>Sign up</h2>

     <form method='POST'>
     <div className="detailCont">
     <div className="details">
      <img src={userimg} alt="img" style={{width:"30px"}} />
      <input type="text" name='name' id='name' autoComplete='off'
      value={user.name} onChange={handleInputs}
      placeholder='Your Name' />
     </div>
     <div className="details">
      <img src={email} alt="img" style={{width:"30px"}} />
      <input type="email" name='email' id='email' autoComplete='off'
      value={user.email} onChange={handleInputs}
      placeholder='Your Email' />
     </div>
     <div className="details">
      <img src={number} alt="img" style={{width:"30px"}} />
      <input type="number" name='number' id='number' autoComplete='off'
      value={user.number} onChange={handleInputs}
      placeholder='Your Number' />
     </div>
     <div className="details">
      <img src={work} alt="img" style={{width:"30px"}} />
      <input type="text" name='work' id='work' autoComplete='off'
      value={user.work} onChange={handleInputs}
      placeholder='Your Profession' />
     </div>
     <div className="details">
      <img src={password} alt="img" style={{width:"30px"}} />
      <input type="password" name='password' id='password' autoComplete='off'
      value={user.password} onChange={handleInputs}
      placeholder='Password' />
     </div>
     <div className="details">
      <img src={cpassword} alt="img" style={{width:"30px"}} />
      <input type="password" name='cpassword' id='cpassword' autoComplete='off'
      value={user.cpassword} onChange={handleInputs}
      placeholder='Confirm Password' />
     </div>

   {/*  <-- submit button --> */}
    <div className="rBtn">
     <input type='submit' name='signup' id='signup' value="Register" onClick={PostData} />
     </div>

     </div>
     </form>
     </div>

     <div className="logoSign" >
      <img src={signupLogo} alt="logo" style={{height: "400px",margin: "20px 40px"}}/>
      <Link to="/login" style={{marginLeft:"90px"}} >If Registered, Login </Link>
     </div>
    </div>
    </div>
    </>
  )
}

export default Signup;
