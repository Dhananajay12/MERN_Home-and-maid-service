import React from 'react'
import image from "../image/login.jpg"
import { Link, useHistory } from 'react-router-dom'
import { useEffect, useState , useContext } from 'react'
import { adddata } from '../reducer/ContextProvider';
import { async } from '@firebase/util'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { udata, setUdata } = useContext(adddata);
    const history = useHistory();

    const [inpval, setINP] = useState({
        name: "",
        email: "",
        phone: "",
        password:"",
        cpassword :"",
        city:"",
        state:"",
        address: ""
    })

    const setdata = (e) => {
      
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const notify = () => toast.error("Please Fill data", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
    });

    const notifysum = () => toast.success("Succufully register", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
    });


    const addinpdata = async (e) => {
        e.preventDefault();

        const { name, email, phone , password, cpassword , city , state ,  address } = inpval;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone ,  password, cpassword , address , city , state
            })
        });

        const data = await res.json();
      

        if (!name || !email || !phone || !password || !cpassword || !address || !city || !state) {

            notify(); 
        }
        else{
            notifysum(); 
            setUdata(data);
            history.push("/login");
        }
        
    
    }
    return (
        <>
            <section className="contactus-section " style={{ marginTop: "5rem", marginBottom: "15rem" }}>
                <div className="container" >
                    <div className="row card-5" style={{ margin: "0rem 2rem 0rem 2rem" , padding:"2rem 2rem 2rem 2rem"}}>
                        <div className="col-md-6 col-lg-6  " >

                            <h1 style={{ fontWeight: "bold" }}>Sign Up</h1>
                            <br></br>
                            <form method='POST'>
                                <div className="input-container" style={{ marginTop: '1.5rem' }}>
                                    <i className="fa fa-user icon"></i>
                                    <input className="input-field" type="text" placeholder="Username" name="name" id='name' autoComplete='off' value={inpval.name} onChange={setdata} />
                                </div>

                                <div className="input-container" style={{ marginTop: '1.5rem' }}>
                                    <i className="fa fa-envelope icon">  </i>
                                    <input className="input-field" type="text" placeholder="Email" name="email" id='email' autoComplete='off' value={inpval.email} onChange={setdata} />
                                </div>

                                <div className="input-container" style={{ marginTop: '1.5rem' }}>
                                    <i className="fa fa-phone icon" style={{ fontSize: "24px" }}></i>
                                    <input className="input-field" type="phone" placeholder="Phone" name="phone" id='phone' autoComplete='off' value={inpval.phone} onChange={setdata} />
                                </div>
                                <div className="input-container" style={{ marginTop: '1.5rem' }}>
                                    <i className="fa fa-key icon" ></i>
                                    <input className="input-field" type="password" placeholder="Password" name="password" id='password' autoComplete='off' value={inpval.password} onChange={setdata} />
                                </div>
                                <div className="input-container" style={{ marginTop: '1.5rem' }}>
                                    <i className="fa fa-lock icon" style={{ fontSize: "24px" }}></i>
                                    <input className="input-field" type="password" placeholder=" Confirm Password" name="cpassword" id='cpassword' autoComplete='off' value={inpval.cpassword} onChange={setdata} />
                                </div>
                                <div className="input-container" style={{ marginTop: '1.5rem' }}>
                                    <i className="fas fa-map-marker-alt icon" style={{ fontSize: "24px" }}></i>
                                    <input className="input-field" type="text" placeholder="State" name="state" id='state' autoComplete='off' value={inpval.state} onChange={setdata} />
                                </div>

                                <div className="input-container" style={{ marginTop: '1.5rem' }}>
                                    <i className="fas fa-map-marker-alt icon" style={{ fontSize: "24px" }}></i>
                                    <input className="input-field" type="text" placeholder="City" name="city" id='city' autoComplete='off' value={inpval.city} onChange={setdata} />
                                </div>

                                <div className="input-container" style={{ marginTop: '1.5rem' }}>
                                    <i className="fa fa-home icon" style={{ fontSize: "24px" }}></i>
                                    <input className="input-field" type="text" placeholder=" address" name="address" id='address' autoComplete='off' value={inpval.address} onChange={setdata} />
                                </div>


                                <Link type="submit" className="btn btn-dark" id="signup" value="register" style={{ marginTop: "2rem" }} onClick={addinpdata}>Register</Link>
                            </form>

                        </div>
                        <div className="col-md-6  col-lg-6  " style={{ padding: "4rem 4rem 4rem 4rem" }} >

                            <center> <img src={image} className="img-fluid mt-5" style={{ width: "400px" }}>
                            </img></center>
                            <center>  <Link to="/login" style={{ textDecoration: "none" }} > I am already have account</Link></center>
                        </div>

                    </div>
                </div>
            </section>



        </>
    )
}

export default Register