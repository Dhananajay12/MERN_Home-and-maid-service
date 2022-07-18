import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    service: "",
    catagory: "",  
    price: "",
    imformation: ""
  });

  const { name, service, catagory, price, imformation } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:4000/product", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto  p-5 card-5">
        <h2 className="text-center mb-4">Add A Prodcuct</h2>
        <form onSubmit={e => onSubmit(e)}>
     
          <div className="form-group mt-3">
          <h5>Name:</h5>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
      
          <div className="form-group mt-3 ">
          <h5>Service:</h5>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Service"
              name="service"
              value={service}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
          <h5>Catagory:</h5>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Catagory"
              name="catagory"
              value={catagory}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
          <h5>Price:</h5>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
          <h5>information:</h5>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your information"
              name="imformation"
              value={imformation}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block mt-3">Add Prodcuct</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;