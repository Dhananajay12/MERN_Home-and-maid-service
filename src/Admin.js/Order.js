import React from 'react'
import Navbarhori from './Navbarhori'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

const Order = () => {



    const [getuserdata, setUserdata] = useState([]);

    const getdata = async () => {

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
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])

    return (
        <>


            <div className='container' style={{ fontFamily: "Poppins" }} >
                <div className='row ' style={{ width: "100%", marginTop: "-3.2rem" }}>
                    <div className='col-xl-2 col-lg-2 col-md-6 col-sm-12' style={{ marginLeft: "-2.2rem", marginTop: "-1.6rem" }} >
                        <Navbarhori></Navbarhori>


                    </div>

                    <div className='col-xl-10 col-lg-9 col-md-6 col-sm-12 ' >
                        <br></br>
                        <div className='row' style={{ width: "100%" }} >


                            <div className='card-8 rounded-border'>
                                <h1>    <i className="far fa-credit-card" style={{ fontSize: "22px" }}></i>   Payments</h1>
                                <hr></hr>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>

                            



                            <div className="card-5 mt-4 rounded-border">
                                <div className="container">
                                    <table class="table table-striped" style={{marginTop:'-2rem'}}>
                                        <thead>
                                            <tr className=" table-active">
                                                <th scope="col mt-1"><h5>Id</h5></th>
                                                <th scope="col"><h5>UserID</h5></th>


                                                <th scope="col"><h5>Amount</h5></th>
                                                <th scope="col"><h5>PaymentID</h5></th>
                                                <th scope="col"><h5>OrderID</h5></th>
                                              
                                                <th scope="col"><h5>Date</h5></th>

                                            </tr>
                                        </thead>
                                        <tbody>


                                            {
                                                getuserdata.map((element, id) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <th scope="row">{id + 1}</th>
                                                                <td style={{ fontSize: "14px" }}> {element.ID}</td>
                                                                <td style={{ fontSize: "16px" }}>{element.amount}</td>
                                                                <td style={{ fontSize: "16px" }}>{element.paymentId}</td>
                                                                <td style={{ fontSize: "16px" }}>{element.orderId}</td>
                                                              
                                                                <td style={{ fontSize: "16px" }}>{element.date}</td>

                                                            </tr>
                                                            <br></br>
                                                        </>
                                                    )
                                                })
                                            }


                                        </tbody>
                                    </table>


                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>




        </>
    )
}

export default Order