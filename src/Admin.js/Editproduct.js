import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Editproduct = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    service: "",
    catagory: "",  
    price: "",
    information: ""
  });

  const {  name, service, catagory, price, information } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/product/${id}`, user);
    history.push("/users");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:4000/product/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto  p-5  card-5">
        <h2 className="text-center mb-4">Edit Prodcuct</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
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
          <div className="form-group mt-3">
          <h5>Serive:</h5>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter serice"
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
              placeholder="Enter catagory"
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
              placeholder="Enter price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
           <h5>Information:</h5>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="information"
              name="information"
              value={information}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block mt-3">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default Editproduct;