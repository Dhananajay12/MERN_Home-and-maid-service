// import { prettyDOM } from '@testing-library/react'
// import { Button } from "react-bootstrap";
import { CartState } from "../reducer/Context";
import React from 'react'
import image from "../Imagesmall/maidimage.jpg"
// import { Link } from 'react-router-dom';

const Card = ({ prod }) => {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    return (
        <div className="card margin5 mt-5 card-6" style={{ width: "350px" }}>
            <div className=" d-flex ">
                <div className="col-sm-5">
                    <img className="card-img-small" src={image} alt="Suresh Dasari Card" />
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <p className="" ><span style={{fontWeight:"bold"}}>Name:</span> {prod.name}</p>
                        <p className="" style={{marginTop:'-0.7rem'}} ><span style={{fontWeight:"bold"}}>Service:</span> {prod.service} </p>
                        <p className="" style={{marginTop:'-0.7rem'}}><span style={{fontWeight:"bold"}}>catogory:</span> {prod.catagory}</p>
                        <p className="" style={{marginTop:'-0.7rem'}}><span style={{fontWeight:"bold"}}>price:</span>  ₹ {prod.price}</p>

                        {cart.some((p) => p.id === prod.id) ? (
                            <button
                                                style={{width:'100%'}} 
                                                className="btn btn-danger" 
                                onClick={() =>
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: prod,
                                    })
                                }
                            >
                                Remove
                            </button>
                        ) : (
                            <button
                            className="btn btn-dark" 
                             style={{width:'100%'}} 
                                onClick={() =>
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: prod,
                                    })
                                }
                                disabled={prod.inStock}
                            >
                                Add to Cart
                            </button>
                        )}

                    </div>
                </div>




            </div>
            <hr></hr>
            <p className="" style={{color:"grey"}}> * {prod.imformation}</p>
            <p className="" style={{color:"grey"}}> * {prod.imformations}</p>

        </div>



    )
}

export default Card