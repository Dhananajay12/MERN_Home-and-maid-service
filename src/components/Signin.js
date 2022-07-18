import React, { useRef } from "react";
import {useUserContext} from "../contexts/UserContext";
import { Form, Button, Card } from "react-bootstrap";


const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();
  
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };



  return (
    <>

    <Card  style={{width:"73%" }} >
    <Card.Body >
      <h2 className="text-center ">Sign in</h2>
     
      <Form onSubmit={onSubmit}>
        <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={emailRef} required />
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={psdRef} required />
        </Form.Group>
        <Button style={{marginTop: "32px"}} className="btn btn-dark w-100" type="submit">
          Sign in
        </Button>
      
      </Form>
    </Card.Body>
    </Card>


        <div  className="w-100 text-center mt-2" style={{ cursor: "pointer",color:"white"}}>
        <p onClick={forgotPasswordHandler}>forgotPassword?</p>
        </div>

        </>
        
  );
};

export default Signin;