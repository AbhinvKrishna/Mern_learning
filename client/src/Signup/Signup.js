import React, { useState } from 'react'
import './Signup.css'
import userimg from '../Signup/user.png'
import email from '../Signup/email.png'
import number from '../Signup/number.png'
import work from '../Signup/work.jpg'
import password from '../Signup/password.png'
import cpassword from '../Signup/cpassword.webp'
import signupLogo from '../Signup/signupLogo.png'
import { Link, useNavigate  } from 'react-router-dom'

function Signup() {


   const Navigate = useNavigate();

  const [user, setUser] = useState({});

  const handleInputs = (e) => {
    console.log(e.target.name,
      e.target.value)

    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user);
  }

  const PostData = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    const data = await response.json();
    console.log(data)   


    if(response.status === 422){
      window.alert("Invalid registration");
      console.log("Invalid registration");
    }
    else{
      window.alert("valid registration");
      console.log("valid registration");
      Navigate('/about')
    }

    
  }




  return (
    <>
      <div className="signPage">
        <div className='container form'>

          <div className="userDetails">
            <h2 className='boldit'>Sign up</h2>

            <form onSubmit={PostData}>
              <div className="detailCont">
                <div className="details">
                  <img src={userimg} alt="img" style={{ width: "30px" }} />
                  <input type="text" name='name' id='name' autoComplete='off' onChange={handleInputs}
                    placeholder='Your Name' />
                </div>
                <div className="details">
                  <img src={email} alt="img" style={{ width: "30px" }} />
                  <input type="email" name='email' id='email' autoComplete='off'
                    onChange={handleInputs}
                    placeholder='Your Email' />
                </div>
                <div className="details">
                  <img src={number} alt="img" style={{ width: "30px" }} />
                  <input type="number" name='phone' id='phone' autoComplete='off'
                    onChange={handleInputs}
                    placeholder='Your Number' />
                </div>
                <div className="details">
                  <img src={work} alt="img" style={{ width: "30px" }} />
                  <input type="text" name='work' id='work' autoComplete='off' onChange={handleInputs}
                    placeholder='Your Profession' />
                </div>
                <div className="details">
                  <img src={password} alt="img" style={{ width: "30px" }} />
                  <input type="password" name='password' id='password' autoComplete='off'
                    onChange={handleInputs}
                    placeholder='Password' />
                </div>
                <div className="details">
                  <img src={cpassword} alt="img" style={{ width: "30px" }} />
                  <input type="password" name='cpassword' id='cpassword' autoComplete='off'
                    onChange={handleInputs}
                    placeholder='Confirm Password' />
                </div>

                {/*  <-- submit button --> */}
                <div className="rBtn">
                  <input type='submit'value="Register"  />
                </div>

              </div>
            </form>
          </div>

          <div className="logoSign" >
            <img src={signupLogo} alt="logo" style={{ height: "400px", margin: "20px 40px" }} />
            <Link to="/login" style={{ marginLeft: "90px" }} >If Registered, Login </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;
