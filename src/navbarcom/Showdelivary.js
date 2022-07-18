import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Form } from "react-bootstrap"
import { Link } from 'react-router-dom';
import image from "../Imagesmall/maidimage.jpg"
const Showdelivary = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    const [getuserdata, setUserdata] = useState([]);
    const [data, setData] = useState(getuserdata);
         
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

        }
    }


    useEffect(() => {
        callAboutPage();
    }, []);

    const getdata = async () => {

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
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const filterResult = (catItem) => {
        const result = getuserdata.filter((curData) => {
            return curData.id === catItem;
        });
        setData(result);
    }

    return (
        <>

            <div className='background8 rowv' style={{ marginBottom: "0rem", marginTop: "0rem" }}>
                <div className="container">
                    <br></br>
                    <div className="row rowv4" style={{ color: "white" }}>
                        <h1> Home {">"} Orders Details</h1>
                    </div>
                </div>
            </div>


            <div className='container' style={{ width: "100%", marginTop: "-32rem", marginBottom: '20rem' }}>

                <div className='row rowv5  card-5 rounded-border' style={{ background: "white", border: "5px solid yellow" }}>


                    <div>
                
                        <h2>
                            Your Orders
                        </h2>
                        <br></br>
                    </div>
                    <hr width={{ width: "100%" }}></hr>
                    <div className='row  rowv4' >
                        {
                            data.map((element , id) => {
                                return (
                                    <>
                                        <div className='row mx-2 rounded-border mb-5' style={{ border: "1px solid lightgrey" }}  >
                                            <div className='d-flex mt-2' style={{ color: "grey" }}>
                                                <ul>
                                                  
                                                    <li>{id+1}</li>
                                                </ul>
                                                <ul>
                                                    <li>ORDER PLACED</li>
                                                    <li>{element.dates}</li>
                                                </ul>
                                                <ul>
                                                    <li>TOTAL</li>
                                                    <li>₹ {element.amount}</li>
                                                </ul>
                                                <ul>
                                                    <li>SERVICE TO </li>
                                                    <li>{element.name}</li>
                                                </ul>


                                                <ul className='margin3'>
                                                    <li>ORDER TO DATE </li>
                                                    <li>{element.date}</li>
                                                </ul>

                                            </div>
                                            <hr style={{ width: "97%" }}></hr>
                                            <div className='d-flex mb-2'>
                                            
                                            <div className='col-md-2'>
                                            <img src={image} className="card-img-small" ></img>

                                            </div>
                                            <div className="col-md-10">

                                                <ul>
                                                <li><h5>Booking Service</h5></li>
                                                    <li style={{color:"grey"}}> {element.service}</li>
                                                    <br></br>

                                                    <li><h5>Address</h5></li>
                                                <li style={{color:"grey"}}> {element.address}</li>
                                                <li></li>
                                                </ul>
                                            </div>
                                                                                  
                                        </div>
                                            <hr style={{ width: "97%" }}></hr>

                                           <div>
                                          <h5> <i className="fas fa-map-marker-alt" ></i> {element.area} </h5>
                                           </div>





                                        </div>

                                    </>
                                )
                            })
                        }

                    </div>
                    <Link className="btn btn-dark mb-2 mt-5 mx-2" style={{ width: "10rem" }} onClick={() => filterResult(userData._id)}>Show Orders </Link>
                    <Link className="btn btn-dark mb-2 mt-5 mx-2" style={{ width: "12rem" }} to='/showorder'>Show paymentID </Link>
                </div>







            </div>

        </>
    )
}

export default Showdelivary