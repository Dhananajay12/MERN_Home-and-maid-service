import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    const history = useHistory();
    const [userData, setUserData] = useState({ name: "", email: "", phone: "", password: "", address: ""  , city:"" , state:"" });

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"

            });
            const data = await res.json();

            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('./login')
        }
    }


    useEffect(() => {
        callAboutPage();
    }, []);



    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    }

    //send data to backend

    const notifysum = () => toast.success("Update succesfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
    });
    const notify = () => toast.error("Please Fill data", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
    });


    const contactForm = async (e) => {
        e.preventDefault();
        const { name, email, phone, password, address  , city , state} = userData;

        const res = await fetch('/edit', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, password, address , city ,state
            })
        });
        const data = await res.json();

        if (!name || !email || !phone || !password || !address || !city || !state){
            notify();
        }
         else {
            notifysum();
            setUserData({ ...userData });
            window.location.reload();

        }


    }




    return (
        <>
            <div className='cantainer' style={{ background: "lightgrey" }}>

                <div className='row'>
                    <center>

                        <i className="fa fa-user" style={{ fontSize: "120px" }} ></i>
                        <h4>{userData._id}</h4>
                    </center>

                </div>
                <div className='row mt-2 mb-5' style={{ width: "31rem", marginLeft: "1rem" }}>

                    <form method='PUT'>
                        <div className="input-container" style={{ marginTop: '1.5rem' }}>
                            <i className="fa fa-user icon"></i>
                            <input className="input-field" type="text" placeholder="Username" name="name" id='name' autoComplete='off' value={userData.name} onChange={handleInputs} />
                        </div>

                        <div className="input-container" style={{ marginTop: '1.5rem' }}>
                            <i className="fa fa-envelope icon">  </i>
                            <input className="input-field" type="text" placeholder="Email" name="email" id='email' autoComplete='off' value={userData.email} onChange={handleInputs} />
                        </div>

                        <div className="input-container" style={{ marginTop: '1.5rem' }}>
                            <i className="fa fa-phone icon" style={{ fontSize: "24px" }}></i>
                            <input className="input-field" type="phone" placeholder="Phone" name="phone" id='phone' autoComplete='off' value={userData.phone} onChange={handleInputs} />
                        </div>
                        <div className="input-container" style={{ marginTop: '1.5rem' }}>
                            <i className="fa fa-key icon" ></i>
                            <input className="input-field" type="password" placeholder="Password" name="password" id='password' autoComplete='off' value={userData.password} onChange={handleInputs} />
                        </div>
                        <div className="input-container" style={{ marginTop: '1.5rem' }}>
                            <i className="fas fa-map-marker-alt   icon" ></i>
                            <input className="input-field" type="text" placeholder="City" name="city" id='city' autoComplete='off' value={userData.city} onChange={handleInputs} />
                        </div>
                        <div className="input-container" style={{ marginTop: '1.5rem' }}>
                            <i className="fas fa-map-marker-alt  icon" ></i>
                            <input className="input-field" type="text" placeholder="State" name="state" id='state' autoComplete='off' value={userData.state} onChange={handleInputs} />
                        </div>
                        <div className="input-container" style={{ marginTop: '1.5rem' }}>
                            <i className="fa fa-home icon" ></i>
                            <textarea className="input-field" rows="5" type="text" placeholder="address" name="address" id='address' autoComplete='off' value={userData.address} onChange={handleInputs} />
                        </div>


                        <button type="submit" className="btn btn-dark" id="signup" value="register" style={{ marginTop: "2rem" , width:"100%" }} onClick={contactForm}>Update</button>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Edit