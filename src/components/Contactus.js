import React, { useState } from "react";


import image14 from "../image/4photo.jpg"
import image15 from "../image/maid15.jpg"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Mailer from "./Mailer";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contactus = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const hanldeSumbit = (e) => {
    sendCos(e);
    sendEmail(e);

  }
  const notify = () => toast.success("successfully", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
});

  const sendCos = async (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_rzwaqzn', 'template_067qagk', e.target, 'user_V5TGFJCZN2Nm8MmZaBWfj')
   
    
    .then(res => {
        console.log(res);
      }).catch(err => console.log(err));

      notify();
      window.location.reload();
      
  }
  const sendEmail = async (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rzwaqzn', 'template_k82n7lc', e.target, 'user_V5TGFJCZN2Nm8MmZaBWfj')
      .then(res => {
        console.log(res);
      }).catch(err => console.log(err));
  }

  // connect with firebase

  return (
    <>
      <section className="contactus-section card-5" style={{ background: "#c5c3c3", marginTop: "3rem" }}>
        <div className="container " >
          <div className="row" >
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <ul style={{ marginTop: "0.5rem" }}>
                    <br />
                    <h1 style={{ color: "#121212", textDecoration: "none" }}>Contact</h1>
                    <br />
                    <li style={{ color: "#121212", textDecoration: "none" ,fontSize:"17px" }}><i className="fas fa-map-marker-alt" ></i> Satyam Heights,309/308 Opp. Anjali Hospital ,<br />Malang Road ,kalyan east ,<br /> Thane-421306,Maharashtra</li><br />
                    <li style={{ color: "#121212", textDecoration: "none" ,fontSize:"17px" }}> <i className="fa fa-phone-square" ></i> +919137319282</li><br />
                    <li style={{ color: "#121212", textDecoration: "none" ,fontSize:"17px" }} > <i className="far fa-envelope"></i> support@razejobfinder.com</li><br />
                  </ul>
                  <Link to="/"><i className="fab fa-instagram fa-3x zoom" style={{ color: "#121212", marginTop: "1.2rem", marginBottom: "1.2rem", paddingRight: "1.5rem", paddingLeft: "1.5rem" }}></i></Link>
                  <Link to="/"><i className="fab fa-twitter-square fa-3x zoom" style={{ color: "#121212", paddingRight: "1.5rem", paddingLeft: "1rem" }}></i></Link>
                  <Link to="/"><i className="fab fa-facebook-square fa-3x zoom" style={{ color: "#121212", paddingRight: "1.5rem", paddingLeft: "1rem" }}></i></Link>
                  <Link to="/"><i className="fab fa-skype fa-3x zoom" style={{ color: "#121212", paddingRight: "1.5rem", paddingLeft: "1.5rem" }}></i></Link>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">

                  <center> <h1 style={{ marginBottom: "3rem", marginTop: "1rem", color: "#121212" }}>Contact With our Team</h1></center>
                  <form onSubmit={hanldeSumbit} >
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-3rem", fontWeight: "bold" }}>
                        <p style={{ color: "#121212", fontSize: "17px", marginLeft: "0px", marginTop: "16px", marginBottom: "5px" }}>FullName:</p>
                        <input
                          type="text"
                          name="user_name"
                          id=""
                          className="form-control"

                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-3rem", fontWeight: "bold" }}>
                        <p style={{ color: "#121212", fontSize: "17px", marginLeft: "0px", marginBottom: "5px", marginTop: "16px" }}>PHONE NO:</p>
                        <input
                          type="text"
                          name="user_phone"
                          id=""
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">

                      <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-4rem", fontWeight: "bold" }}>
                        <p style={{ color: "#121212", fontSize: "17px", marginLeft: "0px", marginBottom: "5px", marginTop: "16px" }}>EMAIL:</p>
                        <input
                          type="text"
                          name="user_email"
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-4rem", fontWeight: "bold" }}>
                        <p style={{ color: "#121212", fontSize: "17px", marginLeft: "0px", marginBottom: "5px", marginTop: "16px" }}>SUBJECT:</p>
                        <input
                          type="text"
                          name="user_sub"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12  contact-input-feild  " style={{ marginTop: "-2rem", fontWeight: "bold" }}>
                        <p style={{ color: "#121212", fontSize: "17px", marginLeft: "0px", marginBottom: "5px" }}>MASSAGE:</p>
                        
                        <textarea className='text_field contact_form_message card-6 ' id=''    type="text"  name="message" cols="30" rows="4" ></textarea>
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style" style={{ marginTop: "-1rem" }}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className=" form-check-label main-hero-para" style={{ color: "#121212" ,marginTop:"-1.5rem"}} >
                        I agree that the Razejob Finder may contact me at the email address or phone number above
                      </label>
                    </div>

                    <button
                      style={{ marginTop: "1rem", color: "", background: "#121212" }}
                      type="submit"
                      value="Send"
                      className="btn btn-dark w-100">
                      Submit
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>

     

      <div className="container" style={{ marginBottom: "4rem" }}>
        <p classname="maps" style={{ width: "102.6%", height: "20rem", border: "0", allowfullscreen: "", loading: "lazy" }}><iframe style={{ width: "101%", height: "27rem", border: "0", allowfullscreen: "", loading: "lazy" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4229.063075291826!2d73.13154841324223!3d19.209752753873097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795efeb3d38eb%3A0x8d8b68aab4d64d6d!2sAuxilum%20hospital!5e0!3m2!1sen!2sin!4v1644228214354!5m2!1sen!2sin" ></iframe></p>
      </div>




    </>
  );
};

export default Contactus;
