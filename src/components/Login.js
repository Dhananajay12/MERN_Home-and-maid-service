import React, { useContext, useState, useEffect } from 'react'
import image from "../image/login.jpg"
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const { state, dispatchs } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  const notify = () => toast.error("Invalid  Credentials", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
  });

  const notifysuc = () => toast.success("Login Sucessfully", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
  });



  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        email,
        password
      })

    });



    const data = res.json();
    if (res.status === 400 || !data) {

      notify();

    } else {
  
   
      notifysuc();

      dispatchs({ type: "USER", payload: true })

      history.push("/");
    }



  }







  return (
    <>
        
      <section className="contactus-section " style={{ marginTop: "10rem", marginBottom: "14rem" }}>
        <div className="container" >
          <div className="row card-5" style={{ margin: "0rem 2rem 0rem 2rem", padding: "2rem 2rem 2rem 2rem" }}>
            <div className="col-md-6 col-lg-6">

              <h1 style={{ fontWeight: "bold" }}>Login</h1>
              <br></br>

              <form method="POST">
                <div className="input-container" style={{ marginTop: '1.5rem' }}>
                  <i className="fa fa-envelope icon">  </i>
                  <input className="input-field" type="email" placeholder="Email" name="email" id="email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>


                <div className="input-container" style={{ marginTop: '1.5rem' }}>
                  <i className="fa fa-key icon" ></i>
                  <input className="input-field" type="password" placeholder="Password" name="password" id="password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>


                <Link type="submit" className="btn btn-dark" id="signin" value="login" onClick={loginUser} style={{ marginTop: "2rem" }}>Login</Link>

              </form>
              
            </div>
            <div className="col-md-6  col-lg-6  " style={{ padding: "4rem 4rem 4rem 4rem" }} >

              <center> <img src={image} className="img-fluid" style={{ width: "300px" }}>
              </img></center>
              <center>  <Link to="/register" style={{ textDecoration: "none" }} > Create a account</Link></center>
            </div>

          </div>
        </div>
      </section>
      <ToastContainer />


    </>
  )
}

export default Login