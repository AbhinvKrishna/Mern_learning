import React from 'react'
import './Contact.css'
import phoneIcon from './phoneIcon.png'
import EmailIcon from './EmailIcon.png'
import adres from './adres.png'

function Contact() {
  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* Phone Number */}
              <div className="contact_info_item d-flex justify-content-start align-items-center contactBox">
                <img src={phoneIcon} alt="phone" style={{ width: "100px" }} />
                <div className="contact_info_content">
                  <div className="contact_info_title txt-bold">
                    Phone
                  </div>
                  <div className="contact_info_text txt-bold">
                    +91 788 777 7282
                  </div>
                </div>
              </div>
              {/* email */}
              <div className="contact_info_item d-flex justify-content-start align-items-center contactBox">
                <img src={EmailIcon} alt="phone" style={{ width: "100px" }} />
                <div className="contact_info_content">
                  <div className="contact_info_title txt-bold">
                    Email
                  </div>
                  <div className="contact_info_text txt-bold">
                    akThakur889@BR06.com
                  </div>
                </div>
              </div>
              {/* Address  */}
              <div className="contact_info_item d-flex justify-content-start align-items-center contactBox">
                <img src={adres} alt="phone" style={{ width: "100px" }} />
                <div className="contact_info_content">
                  <div className="contact_info_title txt-bold">
                    Address
                  </div>
                  <div className="contact_info_text txt-bold">
                    Muzaffarpur BR06
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>        
      </div>

     {/*  contact us form */}

     <div className="contact_form">
      <div className="container mg-box">
        <div className="row" style={{height:"430px"}}>
          <div className="col-lg-10 offset0lg-1">
            <div className="contact_form_container py-2">
              <div className="contact_form_title txt-bold mb-4">
                Get In Touch
              </div>
              <form id='contact_form'>
                <div className="contact_form_name d-flex justify-content-between align-items-between">
                 <input type="text" id='contact_form_name' style={{border:"2px solid black"}} placeholder='Your Name' required={true} />
                 <input type="email" id='contact_form_email' style={{border:"2px solid black"}} placeholder='Your Email' required={true} />
                 <input type="number" id='contact_form_phone'style={{border:"2px solid black"}}  placeholder='Your Number' required={true} />
                </div>

                <div className="contact_form_text mt-5">
                  <textarea className="text_field contact_form_message" style={{width:"96%", border:"1px solid black"}} placeholder="Message" cols="30" rows="10"></textarea>
                </div>

                <div className="contact_form_button">
                  <button type='submit' style={{background:"blue" , color:"white"}}> Send Message </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
     </div>


    </>
  )
}

export default Contact
