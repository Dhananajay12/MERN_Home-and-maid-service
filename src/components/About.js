
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import image from '../image/maid11.jpg'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const history = useHistory();
    const [userData, setUserData] = useState({});

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
            history.push('./login')
        }
    }


    useEffect(() => {
        callAboutPage();
    }, []);






    return (
        <>

            <div className='background8 rowv' style={{ marginTop: "0rem" }}>
                <div className="container">
                    <div className="row rowv4" style={{ color: "white" }}>
                        <h1> Home {">"} My Profile</h1>
                    </div>
                </div>
            </div>


            <div className='container' style={{ width: "100%", marginTop: "-35rem" , marginBottom:'20rem'}}>

                <div className='row rowv4 mx-1 card-5' style={{ background: "white", border: "5px solid yellow" }}>

                    <div className='row'>
                        <center>

                            <i className="fa fa-user" style={{ fontSize: "160px" }} ></i>
                            <h4>{userData._id}</h4>
                        </center>

                    </div>





                    <div className='row mt-3' >
                  
                        <div className="col-md-4">
                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>FullName:</p>
                            <input
                                type="text"
                                name="firstName"
                                id=""
                                style={{ height: "3rem" }}
                                className="form-control card-5"
                                placeholder=""
                                value={userData.name}

                            />

                        </div>

                       
                        <div className="col-md-4">
                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>Email:</p>
                            <input
                                type="text"
                                name="firstName"
                                id=""
                                style={{ height: "3rem" }}
                                className="form-control card-5"
                                placeholder=""
                                value={userData.email}

                            />
                        </div>
                        

                        <div className="col-md-4">
                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>Phone:</p>
                            <input
                                type="text"
                                name="firstName"
                                id=""
                                style={{ height: "3rem" }}
                                className="form-control card-5"
                                placeholder=""
                                value={userData.phone}

                            />
                        </div>




                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='row mt-1' >
                    
                        <div className="col-md-4">
                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>City:</p>
                            <input
                                type="text"
                                name="city"
                                id=""
                                style={{ height: "3rem" }}
                                className="form-control card-5"
                                placeholder=""
                                value={userData.city}

                            />

                        </div>
                        <div className="col-md-4">
                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>State:</p>
                            <input
                                type="text"
                                name="state"
                                id=""
                                style={{ height: "3rem" }}
                                className="form-control card-5"
                                placeholder=""
                                value={userData.state}

                            />
                        </div>
                        <div className="col-md-4">
                        <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>Country:</p>
                            <input
                                type="text"
                                name="firstName"
                                id=""
                                style={{ height: "3rem" }}
                                className="form-control card-5"
                                placeholder=""
                                value="India"
                            />
                        </div>


                    </div>
                    
                    
                    <div className="row mt-1">
                    <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>Address:</p>
                        <center>

                            <textarea rows="5"
                                className="card-5 mt-2 mb-2"
                                cols="20"
                                name="blog"
                                value={userData.address}
                                >

                            </textarea>
                        </center>
                    </div>
                    <div className='row mb-2'>

                       
            <button type="button" className="btn btn-dark mx-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal2"  style={{width:"5rem"}}>
              Edit
            </button>
                   
                        <Link
                            to="/showorder"
                            type="submit"
                            className="btn btn-dark mb-2"
                            style={{width:"12rem"}}
                        >
                          Payment Details
                        </Link>
                        <Link
                            to="/showdelivary"
                           
                            className="btn btn-dark mb-2 mx-2"
                            style={{width:"7rem"}}
                        >
                          Orders
                        </Link>

                    </div>


                </div>
            </div>








        </>
    )
}

export default About