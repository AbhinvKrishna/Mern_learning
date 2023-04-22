import React from 'react'
import './About.css'
import userPic from './Babaji.jpg'
//import { useNavigate } from 'react-router-dom'

function About() {
  return (
    <>

      <div className="container about">
        <form method='GET'>
          <div className="row">
            <div className="col-md-4">
              <img src={userPic} alt="Baba" style={{ width: "150px" }} />
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>hii</h5>
                <h6>hii</h6>
                <p className="profile-rating"> RANKINGS: <span> 1/10</span></p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id='home-tab' data-toggle="tab" href="#home" role="tab" >About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" id='profile-tab' href="#profile">Timeline</a>
                  </li>
                </ul>

              </div>
            </div>

            <div className="col-md-2">
              <input type="submit" className='profile-edit-btn' name='btnAddMore' value="Edit Profile" />
            </div>

          </div>

          <div className="row">
            {/*  Left side url */}
            <div className="col-md-4">

              <div className="profile-work">
                <p>Work Links</p>
                <a href="https://youtu.be/f9nfotEwEMw" target="_mjo" style={{ color: "black", textDecoration: "none", fontWeight: "bold" }} > Youtube</a><br />
                <a href="https://youtu.be/f9nfotEwEMw" target="_mjo" style={{ color: "black", textDecoration: "none", fontWeight: "bold" }} > Instagram</a><br />
                <a href="https://youtu.be/f9nfotEwEMw" target="_mjo" style={{ color: "black", textDecoration: "none", fontWeight: "bold" }} > AKtech.</a><br />
                <a href="https://youtu.be/f9nfotEwEMw" target="_mjo" style={{ color: "black", textDecoration: "none", fontWeight: "bold" }} > MerndV</a><br />
                <a href="https://youtu.be/f9nfotEwEMw" target="_mjo" style={{ color: "black", textDecoration: "none", fontWeight: "bold" }} > Web Dev.</a><br />
                <a href="https://youtu.be/f9nfotEwEMw" target="_mjo" style={{ color: "black", textDecoration: "none", fontWeight: "bold" }} > Software</a><br />
              </div>
            </div>


            {/*  right side data toggle */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id='myTabContent'>
                <div className="tab-pane fade show active" role="tabpanel" id='home' aria-labelledby='home-tab'>

                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>7484788378393</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>hii</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>hii</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>hii</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p> hii</p>
                    </div>
                  </div>
                </div>

                <div className="tab-pane " role="tabpanel" id='profile' aria-labelledby='profile-tab'>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Hourly rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Total Projects </label>
                    </div>
                    <div className="col-md-6">
                      <p>230</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>English</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>


          </div>

        </form>
      </div>


    </>
  )
}

export default About
