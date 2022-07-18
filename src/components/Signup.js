import React, { useRef } from "react";
import { useUserContext } from "../contexts/UserContext";
import { Form, Button, Card} from "react-bootstrap"

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();

  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;

  
    if (email && password && name) registerUser(email, password, name );
  };
 
  return (
  
    <Card style={{width:"73%",marginTop:"1rem"}}>
    <Card.Body >
      <h2 className="text-center mb-4">Sign Up</h2>
      <form onSubmit={onSubmit}>
        <Form.Group id="email" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={emailRef} required />
        </Form.Group>
        <Form.Group id="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" ref={nameRef} required />
        </Form.Group>
     
     
        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={psdRef} required />
        </Form.Group>
        <Button className=" btn btn-dark w-100"   type="submit" style={{marginTop: "32px"}}>
          Sign Up
        </Button>
      </form>
    </Card.Body>
  </Card>
  
   
  );
};

export default Signup;