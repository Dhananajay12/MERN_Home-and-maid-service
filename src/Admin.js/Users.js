import React from 'react'
import { Link } from 'react-router-dom'
import Navbarhori from './Navbarhori'

import { useEffect, useState, useContext } from 'react'
import { deldata } from '../reducer/ContextProvider';
import { updatedata } from '../reducer/ContextProvider'

const Users = () => {


    const [getuserdata, setUserdata] = useState([]);


    const { updata, setUPdata } = useContext(updatedata);
    const { dltdata, setDLTdata } = useContext(deldata);

    console.log(getuserdata);


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


    const deleteuser = async (id) => {

        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
       
         window.location.reload();   
        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            setDLTdata(deletedata)
            getdata();
        }

    }

    return (

        <>

            {
                updata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong>  updated succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }

            {
                dltdata ?
                    <>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{dltdata.name}</strong>  deleted succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }





            <div className='container ' style={{ fontFamily: "Poppins" }}>
                <div className='row ' style={{ width: "100%", marginTop: "-3.2rem" }}>
                    <div className='col-xl-2 col-lg-2 col-md-6 col-sm-12' style={{ marginLeft: "-2.2rem", marginTop: "-1.6rem" }} >
                        <Navbarhori></Navbarhori>


                    </div>

                    <div className='col-xl-10 col-lg-10 col-md-6 col-sm-12 ' >
                        <br></br>


                        <div className='row mx-2' style={{ width: "100%" }} >
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className='card-8 rounded-border'>

                                <h1 className='mt-4'>  <i className="fa fa-user" style={{ fontSize: "40px" }} ></i> User Details</h1>
                                <hr></hr>

                            </div>
                            <br></br> <br></br> <br></br> <br></br>
                        
                            <br></br>
                           


                            <div className="card-5 mt-4 rounded-border">
                                <div className="container">

                                    <table class="table table-striped">
                                        <thead>
                                            <tr className=" table-active">
                                                <th scope="col mt-1"><h4>Id</h4></th>
                                                <th scope="col"><h4>Username</h4></th>
                                                <th scope="col"><h4>email</h4></th>

                                                <th scope="col"><h4>Number</h4></th>
                                                <th scope="col"><h4>User ID</h4></th>
                                                <th scope="col"><h4>Operations</h4></th>
                                               
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
                                                                <td style={{ fontSize: "17px" }}>{element._id}</td>
                                             
                                                                <td className='d-flex'>

                                                                    <Link to={`update/${element._id}`}><button type="button" className="btn btn-dark" style={{ width: "5rem" }}>
                                                                        Edit
                                                                    </button></Link>
                                                                    <button className='btn btn-danger mx-2' onClick={() => deleteuser(element._id)} style={{ width: "5rem" }}>Delete</button>
                                                                </td>
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

export default Users