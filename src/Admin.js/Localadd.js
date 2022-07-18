import React from 'react'
import Navbarhori from './Navbarhori'
import { useState , useEffect } from 'react';
const Localadd = () => {

            
    const [getuserdata, setUserdata] = useState([]);


    const getdata = async () => {

        const res = await fetch("/get-local", {
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
        
<div className='container' style={{ fontFamily: "Poppins" }}>
                <div className='row ' style={{ width: "100%", marginTop: "-3.2rem" }}>
                    <div className='col-xl-2 col-lg-2 col-md-6 col-sm-12' style={{ marginLeft: "-2.2rem", marginTop: "-1.6rem" }} >
                        <Navbarhori></Navbarhori>


                    </div>

                    <div className='col-xl-10 col-lg-10 col-md-6 col-sm-12 ' >
                        <br></br>


                        <div className='row mx-2' style={{ width: "100%" }} >
                            <br></br>

                            <div>
                                <h1>Feedback</h1>

                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <hr></hr>


                            <div className="card-5">
                                <div className="container">

                                    <table className="table table-striped">
                                        <thead>
                                            <tr className=" table-active">
                                                <th scope="col mt-1"><h5>Id</h5></th>
                                                <th scope="col"><h5>Username</h5></th>
                                                <th scope="col"><h5>email</h5></th>

                                                <th scope="col"><h5>Number</h5></th>
                                                <th scope="col"><h5>Address</h5></th>
                                                <th scope="col"><h5>Area</h5></th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                getuserdata.map((element, id) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <th scope="row">{id + 1}</th>
                                                                <td style={{ fontSize: "17px" }}>{element.name}</td>
                                                                <td style={{ fontSize: "17px" }}>{element.email}</td>
                                                                <td style={{ fontSize: "17px" }}>{element.phone}</td>
                                                                <td style={{ fontSize: "17px" }}>{element.address}</td>
                                                                <td style={{ fontSize: "17px" }}>{element.area}</td>
                                                             
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

export default Localadd