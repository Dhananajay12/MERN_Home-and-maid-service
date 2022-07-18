import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
const Book = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    area: "",
    address:"",
    
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

const notifysum = () => toast.success("Succesfully query send", {
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

  // connect with firebaseww
  const submitData = async (event) => {
    event.preventDefault();
    const { name,  lastName ,email, phone, service , area , address } = userData;
    
    const res = await fetch('/book-now', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, lastName, email, phone, service, area , address
      })
    });
    const data = await res.json();

    if (!name || !lastName || !email || !phone  || !area   || !address || !service ) {
      notify();
  }
    else {
      notifysum();
     
      setUserData({ ...userData});
    }
  };


  return (
    <>



      <div className="container" style={{marginTop:"-2rem"}}>
        <div className="row rowv3" >
          <div className="col-sm  small-box card-7"  >
            <i className="fa fa-phone-square  fa-2x left1  " />
            <div style={{ display: "block" }}>
              <h5>Phone No</h5>
              <p style={{ fontSize: "13px", color: "#121212" }}>+91844540-58844</p>
            </div>

          </div>
          <div className="col-sm small-box card-7" >
            <i className="far fa-envelope fa-2x left1" ></i>
            <div style={{ display: "block" }} >
              <h5>Email</h5>
              <p style={{ fontSize: "13px", color: "#121212" }}>RazeJob@gmail.com</p>

            </div>

          </div>
          <div className="col-sm small-box card-7" >
            <i className="fas fa-map-marker-alt fa-2x left1" ></i>
            <h5>Location</h5>
            <p style={{ fontSize: "13px", color: "#121212" }} >Kalyan, Maharashtra </p>
          </div>
        </div>
      </div>



      <section className="contactus-section left"   >
        <div className="container card-6" style={{ marginTop: "2rem", marginBottom: '8rem', background: "#c5c3c3" }}>
          <div className="row">

            <div className="col-12 col-lg-10 mx-auto">


              <div className="row">


                {/* right side contact form  */}

                <div className="contact-rightside col-12 col-lg-12">

                  <form method="POST">
                    <div className="row">
                      <div className="col-md-12" style={{ marginTop: "2rem", marginBottom: "3rem", color: "#121212" }}>
                        <h3 >BOOK NOW</h3>
                      </div>


                    </div>


                    <div className="row">


                      <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>FirstName</p>
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control card-5"
                          placeholder=""
                          value={userData.name}
                          onChange={postUserData}
                        />

                      </div>
                      <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>LastName</p>
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder=""
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>

                      <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>Area</p>
                        <select placeholder="" className="form-control" id="" name='area' type="text" value={userData.area} onChange={postUserData}>
                          <option value="katemanivali">Katemanavli</option>
                          <option value="tata power">Tata Power</option>
                          <option value="netivali">Netivali</option>
                          <option value="Manpada">Manpada</option>
                          <option value="shivaji Choke ">Shivaji Choke</option>
                          <option value="90th Feet">90th Feet</option>
                        </select>
                      </div>

                    </div>



                    <div className="row">
                      <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: "#121212", fontWeight: "bold" }}>
                        <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Service</p>

                        <select placeholder="Which Service You Know" className="form-control" id="cars" name='service' type="text" value={userData.service}
                          onChange={postUserData}>
                          <option >Select</option> 
                          <option value="driver">Driver</option>
                          <option value="babysitter">Babysitter</option>
                          <option value="pestcontrol">Pestcontrol</option>
                          <option value="cleaning">Cleaning</option>
                          <option value="maid" >Maid</option>
                        </select>
                      </div>


                      <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                        <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Phone Number</p>
                        <input
                          type="number"
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


                    <div className="form-check form-checkbox-style " style={{ marginTop: "-1rem" }}>

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
    </>
  );
};

export default Book;
