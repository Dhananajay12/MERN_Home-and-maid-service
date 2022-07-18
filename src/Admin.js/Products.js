import React, { useState, useEffect } from 'react'

import  Data from "../db.json"
import Navbarhori from './Navbarhori';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';

const Products = () => {
    const [data, setData] = useState(Data.product);

    const [product, setProduct] = useState([]);



    const loadUsers = async () => {
        const result = await axios.get("http://localhost:4000/product");
        setProduct(result.data);
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:4000/product/${id}`);
        loadUsers();
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return (

        <div className='container' style={{fontFamily: "Poppins" }}>
            <div className='row ' style={{ width: "100%", marginTop: "-3.2rem" }}>
                <div className='col-xl-2 col-lg-2 col-md-6 col-sm-12' style={{ marginLeft: "-2.2rem", marginTop: "-1.6rem" }} >
                    <Navbarhori></Navbarhori>

                </div>

                <div className='col-xl-10 col-lg-10 col-md-6 col-sm-12 ' >
                    <br></br>


                    <div className='row mx-2' style={{ width: "100%" }} >
                        <br></br>
                        <div className='card-8 rounded-border'>
                            <h1>Products Details</h1>
                            <hr></hr>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>




                        <div className="card-5 mt-3 rounded-border" >
                            <div className="container" >

                                <table className="table table-striped">
                                    <thead>
                                        <tr className=" table-active">
                                            <th scope="col mt-1"><h5>Id</h5></th>
                                            <th scope="col"><h5>Name</h5></th>
                                            <th scope="col"><h5>Service</h5></th>
                                            <th scope="col"><h5>Catogory</h5></th>

                                            <th scope="col"><h5>Price</h5></th>

                                            <th scope="col"><h5>Operations</h5></th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {product.map((user, index) => (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td style={{ fontSize: "17px" }}>{user.name}</td>
                                                <td style={{ fontSize: "17px" }}>{user.service}</td>
                                                <td style={{ fontSize: "17px" }}>{user.catagory}</td>
                                                <td style={{ fontSize: "17px" }}>{user.price}</td>
                                                <td>

                                                    <Link
                                                        className="btn btn-dark"
                                                        to={`/product/edit/${user.id}`}
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link
                                                    
                                                        className="btn btn-danger mx-2"
                                                        onClick={() => deleteUser(user.id)}
                                                    >
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}


                                        {/* {
                                            data.map((element, id) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <th scope="row">{id + 1}</th>
                                                            <td>{element.name}</td>
                                                            <td>{element.service}</td>
                                                            <td>{element.catagory}</td>
                                                            <td>{element.price}</td>

                                                            <td className='d-flex'>

                                                                <Link to={`update/${element._id}`}><button type="button" className="btn btn-dark" style={{ width: "5rem" }}>
                                                                    Edit
                                                                </button></Link>

                                                            </td>
                                                        </tr>
                                                        <br></br>
                                                    </>
                                                )
                                            })
                                        } */}


                                    </tbody>
                                </table>


                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </div>

    )
}

export default Products