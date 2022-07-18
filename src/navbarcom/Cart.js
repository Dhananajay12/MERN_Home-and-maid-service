

import { useEffect, useState } from "react";
// import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../reducer/Context";
import image from "../Imagesmall/maidimage.jpg"

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (

    <div className="container ">

      {/* <div className="row rowv5 mb-2 ">
        <h1><i className="fas fa-cart-arrow-down" style={{ fontSize: "30px" }}></i> My Cart </h1>
        <br></br>

      </div> */}
      <div className="row rowv5 card-5 border-radius"  >

        <div className="col-xl-8">
          <div className="row mx-2 mt-3 mb-3">
            <h1><i className="fas fa-cart-arrow-down" style={{ fontSize: "30px" }}></i> My Cart</h1>
          </div>
          <hr></hr>
          {cart.map((prod) => (
            <div className="row mb-3 mx-1" key={prod.id}>
              <div className="col-md-3 mb-3 " >
                <img src={image} className="card-img-small3" alt="" style={{ marginTop: "0.5rem" }}></img>
              </div>

              <div className="col-md-4 mt-3" style={{ marginLeft: "-3rem" }}>
                <ul>
                  <li>Name: {prod.name}</li>
                  <li>Serive: {prod.service}</li>
                  <li>Catagory: {prod.catagory}</li>
                </ul>
              </div>
              <div className="col-md-2 mt-3 ">
                <h5> ₹ {prod.price}</h5>

              </div>
              <div className="col-md-3 mx-3">
                <button
                  style={{ width: "100%", color: "#121212", background: 'lightgrey' }}
                  type="button"

                  className="mt-3 "
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    })
                  }
                >
                  <AiFillDelete fontSize="20px" />
                </button>

              </div>
              <hr></hr>

            </div>
          ))}





        </div>
        <div className="col-xl-4 border-radius " style={{ background: "lightgrey" }}>
          <div className="row mt-4 ">
            <h2>Summary</h2>
          </div>
          <hr></hr>
          <div className="d-flex">
            <div className="col-md-6">

              <h4 className="">Services:</h4>
            </div>
            <div className="col-md-6">
             <center><h5 className="" style={{ fontWeight: 400, fontSize: 18}}> ₹ Amount</h5></center> 
             </div>
            </div>
            <hr></hr>
              

          <div className="" style={{ width: "100%", height: "45rem" }}>

            {cart.map((prod) => (
              <div className="d-flex ">
              <div className="col-md-6">

                <h5 className="">{prod.service}</h5>
              </div>
              <div className="col-md-6">
               <center>  <h5 className="" style={{ fontWeight: 400, fontSize: 17}}> ₹ {prod.price}</h5></center>
                </div>
              </div>
            ))}
            <br></br>
            <hr></hr>
            <div className="d-flex">
            <div className="col-md-6">

              <h4 className="">Total:</h4>
            </div>
            <div className="col-md-6">
             <center><h5 className="" style={{ fontWeight: 400, fontSize: 18}}> ₹ {total}</h5></center> 
             </div>
            </div>


            <hr></hr>
            <br></br>

            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal3" style={{ width: "100%" }}>
              Checkout
            </button>


          </div>

          <hr></hr>


        </div>
      </div>
    </div>
  );
};

export default Cart;