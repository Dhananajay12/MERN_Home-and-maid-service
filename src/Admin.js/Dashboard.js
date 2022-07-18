import React from 'react'
import Navbarhori from './Navbarhori'
import { useEffect, useState } from 'react'
import Data from '../navbarcom/Data'

import {

    Dropdown,

    NavDropdown,

  
  } from "react-bootstrap";

  import { Link } from 'react-router-dom';
const Dashboard = () => {


    const [data, setData] = useState(Data.productData);

    const [getuserdata, setUserdata] = useState([]);
    const [getuserorder, setUserorder] = useState([]);

    const [getuserdelivary, setUserdelivary] = useState([]);
    const [getuserfeedback, setUserfeedback] = useState([]);
    const [getusermonth, setUsermonth] = useState([]);
    const [adminData, setAdminData] = useState({});


    const getfeedback = async () => {

        const res = await fetch("/get-massage", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"

        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserfeedback(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getfeedback();
    }, [])

    const getdelivary = async () => {

        const res = await fetch("/get-delivary", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdelivary(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdelivary();
    }, [])




    const getdata = async () => {

        const res = await fetch("/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])


    const getorder = async () => {

        const res = await fetch("/get-order", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserorder(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getorder();
    }, [])

    const getmonth = async () => {

        const res = await fetch("/get-book", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUsermonth(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getmonth();
    }, [])

    const getadmin = async () => {

        const res = await fetch("/get-admin", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"

        });
        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setAdminData(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getadmin();
    }, [])


    return (
        <>
            <div className='container' style={{ fontFamily: "Poppins" }} >






                <div className='row ' style={{ width: "100%", marginTop: "-3.2rem", height: "62rem" }}>
                    <div className='col-xl-2 col-lg-2 col-md-6 col-sm-12' style={{ marginLeft: "-2.2rem", marginTop: "-1.6rem" }} >
                        <Navbarhori></Navbarhori>


                    </div>


                    <div className='col-xl-10 col-lg-9 col-md-6 col-sm-12 ' >
                        <br></br>
                        <div className='card-8 rounded-border'>
                            <h1 className='mx-5 '><i className="fa fa-bar-chart" style={{ fontSize: "30px" }}></i> Dashboard</h1>
                            <hr></hr>
                            <br></br>
                        </div>
                        <br></br>
                          
                           



                        <br></br>
                        <div className='row' style={{ width: "100%" }} >


                            <div className="row rowv3 mx-2" >
                                <div className="col-sm  small-box card-7"  >
                                    <i className="fa fa-user  fa-2x left1  " />
                                    <div style={{ display: "block" }}>
                                        <h5>Users</h5>
                                        <h5 style={{ fontSize: "20px", color: "#121212" }}>{getuserdata.length}</h5>
                                    </div>

                                </div>
                                <div className="col-sm small-box card-7">
                                    <i className="fa fa-archive fa-2x left1"></i>
                                    <div style={{ display: "block" }} >
                                        <h5>Products</h5>
                                        <h5 style={{ fontSize: "20px", color: "#121212" }}>{data.length}</h5>

                                    </div>

                                </div>
                                <div className="col-sm small-box card-7">
                                    <i className="fa fa-bar-chart fa-2x left1" ></i>
                                    <h5>Payments</h5>
                                    <h5 style={{ fontSize: "20px", color: "#121212" }} >{getuserorder.length}</h5>
                                </div>
                            </div>

                        </div>
                        <div className='row' style={{ width: "100%" }} >


                            <div className="row rowv3 mx-2" >
                                <div className="col-sm  small-box card-7"  >
                                    <i className="fas fa-cart-arrow-down fa-2x left1  " />
                                    <div style={{ display: "block" }}>
                                        <h5>Orders</h5>
                                        <h5 style={{ fontSize: "20px", color: "#121212" }}>{getuserdelivary.length}</h5>
                                    </div>

                                </div>
                                <div className="col-sm small-box card-7">
                                    <i className="fas fa-calendar fa-2x left1"></i>
                                    <div style={{ display: "block" }} >
                                        <h5>Feedback</h5>
                                        <h5 style={{ fontSize: "20px", color: "#121212" }}>{getuserfeedback.length}</h5>

                                    </div>

                                </div>
                                <div className="col-sm small-box card-7">
                                    <i className="fas fa-shopping-basket fa-2x left1" ></i>
                                    <h5>Booking for Month</h5>
                                    <h5 style={{ fontSize: "20px", color: "#121212" }} >{getusermonth.length}</h5>
                                </div>
                            </div>

                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className='card-8 rounded-border'>
                            <h1 className='mx-5 '><i className="	fa fa-bell" style={{ fontSize: "30px" }}></i> Notification</h1>
                            <hr></hr>
                            <br></br>
                        </div>


                        
                        <br></br>



                    </div>

                </div>

            </div>


        </>
    )
}

export default Dashboard