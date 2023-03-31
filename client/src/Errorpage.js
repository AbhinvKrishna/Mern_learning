import React from 'react'
import { Link } from 'react-router-dom';
import './Errorpage.css'

function Errorpage() {
  return (
   <>
   <div className="container ">
    <div className="row" style={{fontSize:"100px", fontFamily:"sans-serif"}} >
    404 Error
    </div>
    <div style={{fontSize:"100px", fontFamily:"sans-serif"}}>
        Page Not Found!
    </div>
    <Link to="/">Back to homePage</Link>
   </div>
   </>
  )
}

export default Errorpage;
