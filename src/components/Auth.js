import React, { useState } from "react";

import Signin from "./Signin";
import Signup from "./Signup";
import { useEffect } from 'react';

const Auth = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
 
<>


    <div className="container login" style={{ padding:"1rem" ,background:"#121212" ,opacity:"0.9"}} >
   
      {!index ? <Signin /> : <Signup />}
      <p onClick={toggleIndex}  style={{ color:"white" ,opacity:"1" }}>
        {!index ? "New user? Click here " : "Already have an acount?"}
      </p>

   
    </div>


 
  
  
</>
   
  );
};

export default Auth;