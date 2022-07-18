import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import { Link } from "react-router-dom";

const Locals = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
}, [])

const notify = () => toast.error("Please Fill data", {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
});

const notifysum = () => toast.success("Succesfully query send", {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: 0,
});



  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    area:"",
    address:"",
  });


  let name, value;

  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebaseww
  const submitData = async (event) => {
    event.preventDefault();
    const { name,  email, phone, service , area , address } = userData;
    
    const res = await fetch('/local', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,  email, phone, service, area , address
      })
    });
    const data = await res.json();

    if (!name || !email || !phone  || !area   || !address || !service ) {
      notify();
  }
    else {
      notifysum();
     
      setUserData({ ...userData});
    }
  };
  return (
    <>



<div className="background7" style={{ marginTop: "0rem" }}>

      <section className="contactus-section left"   >
        <div className="container" style={{ marginTop: "1rem" }}>
          <div className="row">

            <div className="col-12 col-lg-10 mx-auto">


              <div className="row">


                {/* right side contact form  */}

                <div className="contact-rightside col-12 col-lg-12">

                  <form method="POST">
                    <div className="row">
                      <div className="col-md-12" style={{ marginTop: "2rem", marginBottom: "3rem", color: "#121212" }}>
                        <h3>APPLY FOR JOB </h3>
                      </div>
                    </div>
                    <div className="row">

                      <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>FullName</p>
                        <input
                          type="text"
                          name="name"
                          id=""
                          className="form-control card-5"
                          placeholder=""
                          value={userData.name}
                          onChange={postUserData}
                        />

                      </div>
                   

                      <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>Area</p>
                        <input
                            type="text"
                            name="area"
                            id=""
                            className="form-control"
                            placeholder=""
                            value={userData.area}
                            onChange={postUserData}
                          />
                      </div>

                    </div>



                    <div className="row">
                    <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: "#121212", fontWeight: "bold" }}>
                        <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Service</p>
                    
                            <input
                          type="text"
                          name="service"
                          id=""
                          className="form-control"
                          placeholder="Service"
                          value={userData.service}
                          onChange={postUserData}
                        />
                      </div>
                 
                     
                      <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                        <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Phone Number</p>
                        <input
                          type="tel"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder=" 888 888 8888"
                          pattern="[0-9]{3} [0-9]{3} [0-9]{4}" 
                          maxlength="10"
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                  
                    </div>
                    <div className="row">
                      <div className="col-8 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                        <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Address</p>
                        <input
                          type="email"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
            

                    <div className="row">
                      <div className="col-8 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                        <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Address</p>
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Flat No., Apt Name, Area , Street ,City"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

               
                    <div className="form-check form-checkbox-style "  style={{ marginTop: "-1rem" }}>

                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className=" form-check-label main-hero-para" style={{ color: "#121212", fontFamily: "poppins" }} >
                        I agree that the Razejob Finder may contact me at the email address or phone number above
                      </label>
                    </div>

                    <Link style={{ marginTop: "2rem", marginBottom: "3rem" }}
                     to="/"
                      type="submit"
                      className="btn btn-dark"
                      onClick={submitData}>
                      Submit
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   </div>   
    </>
  );
};

export default Locals;
