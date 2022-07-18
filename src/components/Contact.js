
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [userData, setUserData] = useState({
    name: "",
    qualification: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    age: "",
    gender: "",
    language: "",
    religion: "",
    service: "",
    status: "",
    expirence: "",
    area:"",
  });

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"

      });
      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }


    } catch (err) {
      console.log(err);

    }
  }


  useEffect(() => {
    callAboutPage();
  }, []);

  const notify = () => toast.error("Please Fill data", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
  });

  const notifysum = () => toast.success("Application Sumbmit Succesfully ", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
  });


  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { name, qualification, phone, email, address, message, age, gender, language, religion, service, expirence, status , area} = userData;


    const res = await fetch("/application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        qualification,
        phone,
        email,
        address,
        message,
        age,
        gender,
        area,
        status,
        language,
        religion,
        service,
        expirence,
      }),
    }
    );

    const data = await res.json();

    if (!name || !qualification || !phone || !email || !address || !message || !age || !gender || !language || !religion || !service || !expirence || !status || !area) {
      notify();
    }
    else {
      notifysum();
      setUserData({ ...userData });
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
                          <h3 >APPLY FOR A JOB</h3>
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
                          <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>Qualification</p>

                          <input
                            type="text"
                            name="qualification"
                            id=""
                            className="form-control"
                            placeholder="qualification"
                            value={userData.qualification}
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
                        <div className="col-12 col-lg-4 contact-input-feild"
                          style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                          <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Language</p>
                          <input
                            type="text"
                            name="language"
                            id=""
                            className="form-control"
                            placeholder=""
                            value={userData.language}
                            onChange={postUserData}
                          />
                        </div>
                        <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: "#121212", fontWeight: "bold" }}>
                          <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Marital Status </p>

                          <select placeholder="" className="form-control" id="" name='status' type="text" value={userData.status} onChange={postUserData}>
                            <option value="single">Single</option>
                            <option value="married">Married</option>


                          </select>

                        </div>
                        <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                          <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Religion</p>
                          <input
                            type="text"
                            name="religion"
                            id=""
                            className="form-control"
                            placeholder=""
                            value={userData.religion}
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
                            placeholder="Which Service You Know"
                            value={userData.service}
                            onChange={postUserData}
                          />

                        </div>
                        <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: "#121212", fontWeight: "bold" }}>
                          <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Expirence</p>
                          <input
                            type="number"
                            name="expirence"
                            id=""
                            className="form-control"
                            placeholder=" In Years"
                            value={userData.expirence}
                            onChange={postUserData}
                          />
                        </div>
                        <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: "#121212", fontWeight: "bold" }}>
                          <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Age</p>
                          <input
                            type="number"
                            name="age"
                            id=""
                            className="form-control"
                            placeholder="Age Between 18 to 40 "
                            value={userData.age}
                            onChange={postUserData}

                          />


                        </div>


                      </div>
                      <div className="row">

                        <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: "#121212", fontWeight: "bold" }}>
                          <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Gender</p>
                          <select placeholder="Which Service You Know" className="form-control" id="" name='gender' type="text" value={userData.gender} onChange={postUserData}>
                            <option value="other">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>



                          </select>

                        </div>
                        <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                          <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Phone Number</p>
                          <input
                            type="text"
                            name="phone"
                            id=""
                            className="form-control"
                            placeholder=""
                            value={userData.phone}
                            onChange={postUserData}
                          />
                        </div>
                        <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                          <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Email</p>
                          <input
                            type="text"
                            name="email"
                            id=""
                            className="form-control"
                            placeholder=""
                            value={userData.email}
                            onChange={postUserData}
                          />
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-12 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
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

                      <div className="row">
                        <div className="col-12 " style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                          <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Message</p>
                          <input
                            type="text"
                            name="message"
                            id=""
                            className="form-control"
                            placeholder="Enter Your Message"
                            value={userData.message}
                            onChange={postUserData}
                          />
                        </div>
                      </div>
                      <div className="form-check form-checkbox-style">

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
        <br></br>
        <br></br>
        <br></br>


      </div>



    </>
  );
};

export default Contact;