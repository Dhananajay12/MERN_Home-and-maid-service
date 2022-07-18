import React  from "react";
import { useUserContext } from "../contexts/UserContext";

import { Link } from 'react-router-dom'
const Dashboard = () => {
  const { user,logoutUser } = useUserContext();
 
 
  return (
    <div className="" style={{marginTop:"0rem", color:"white",border:" 2px solid white"}} >
      <h1>Dashboard</h1>
      
      <h2>Name : {user.displayName}</h2>
      <h2>Email: {user.email}</h2>
      

     
      <Link className="btn btn-outline-warning mx-1"   to="/" role="button" onClick={logoutUser}>logout</Link>

    </div>
  );
};

export default Dashboard;