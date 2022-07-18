import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import emailjs, { send } from '@emailjs/browser';
import { CartState } from "../reducer/Context"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { red } from '@mui/material/colors';
const Hireme = () => {

    const [orderAmount, setOrderAmount] = useState(0);
    const [orders, setOrders] = useState([]);
    const history = useHistory();
    const [userData, setUserData] = useState({
        name: "",
        id: "",
        email: "",
        phone: "",
        amount: "",
        area: "",
        stime: "",
        date: "",
        etime: "",
        address: "",
        service:"",
             
    });

    const notifysuc = () => toast.success("payment sucessfull", {
        position: "top-center",
        autoClose: 3000,
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

    const notifysum = () => toast.success("Go forward", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
    });

    const [total, setTotal] = useState();

    const [service, setService] = useState();
    const {
        state: { cart },
        dispatch,
    } = CartState();

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);

    useEffect(() => {
        setService(
            cart.reduce((acc, curr) => acc + String(curr.service) + ":" + String(curr.catagory) + "," ,"")
        );
    }, [cart]);



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
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }


        } catch (err) {
            console.log(err);

        }
    }


    useEffect(() => {
        callAboutPage();
    }, []);



    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };



    // const sendEmail = async (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm('service_h1k6vmp', 'template_8pn0vl1', e.target, 'user_rHlW3aoCw31ByP5G3B4Ef')
    //       .then(res => {
    //         console.log(res);
    //       }).catch(err => console.log(err));
    //   }


    // Razorpay
    function loadRazorpay(total) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
            alert('Razorpay SDK failed to load. Are you online?');
        };
        script.onload = async () => {
            try {

                const result = await axios.post('/create-order', {
                    amount: total + '00',
                });
                const { amount, id: order_id, currency } = result.data;
                const {
                    data: { key: razorpayKey },
                } = await axios.get('/get-razorpay-key');

                const options = {
                    key: razorpayKey,
                    amount: total,
                    currency: currency,
                    name: 'example name',
                    description: 'example transaction',
                    order_id: order_id,
                    handler: async function (response) {
                        notifysuc();

                        const result = await axios.post('/order', {
                            amount: amount / 100,
                            id: userData._id,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpayOrderId: response.razorpay_order_id,
                            razorpaySignature: response.razorpay_signature,
                        });
                        alert(result.data.msg);

                        history.push('./showorder');
                        window.location.reload();
                    },
                    prefill: {
                        name: 'example name',
                        email: 'email@example.com',
                        contact: '111111',
                    },
                    notes: {
                        address: 'example address',
                    },
                    theme: {
                        color: '#80c0f0',
                    },
                };

                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            } catch (err) {
                alert(err);

            }
        };
        document.body.appendChild(script);
    }



    // connect with firebaseww


    const submitData = async (event, e) => {
        event.preventDefault();
        const { name, phone, email, amount, id, area, etime, stime, date, address  ,service} = userData;

        const res = await fetch('/delivery', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, phone, email, amount, id, area, stime, etime, date, address , service
            })
        });
        const data = await res.json();

        if (!name || !id || !email || !phone || !amount || !area || !stime || !etime || !date || !address || !service) {
            notify();
        }
        else {
            notifysum();
            setUserData({ ...userData });
            loadRazorpay(total);

        }



    };



    //  var allservice = userData.service;

    //     var formatter = new Intl.NumberFormat("en-US", {
    //         style: "currency",
    //         currency: "INR",

    //         // These options are needed to round to whole numbers if that's what you want.
    //         minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //         //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    //     });

    // const loadScript = (src) => {
    //     return new Promise((resovle) => {
    //         const script = document.createElement("script");
    //         script.src = src;
    //         script.onload = () => {
    //             resovle(true);
    //         };
    //         script.onerror = () => {
    //             resovle(false);
    //         };

    //         document.body.appendChild(script);
    //     });
    // };

    // const DisplayRazorpay = async (amount) => {
    //     const res = await loadScript(
    //         "https://checkout.razorpay.com/v1/checkout.js"
    //     );

    //     if (!res) {
    //         alert("You are offline... Failed to load Razorpay SDK");
    //         return;
    //     }

    //     const options = {
    //         key: "rzp_test_Q5wBQnlrkybVYe",
    //         currency: "INR",
    //         amount: amount * 100,
    //         name: "RazeJobFinder",
    //         description: "Thanks for Book Service",
    //         image:
    //             "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

    //         handler: function (response,e) {
    //             alert(response.razorpay_payment_id);
    //             alert(response.razorpay_order_id);
    //             alert("Payment Successfully");

    //         },


    //         prefill: {
    //             name: "RazeJobfinder",
    //         },
    //     };

    //     const paymentObject = new window.Razorpay(options);
    //     paymentObject.open();
    // };
    // connect with firebase


    return (
        <>
            <section className="contactus-section left"   >
                <div className="container" style={{ marginTop: "1rem" }}>
                    <div className="row">

                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                {/* right side contact form  */}

                                <div className="contact-rightside col-12 col-lg-12">

                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-md-12" style={{ marginTop: "2rem", marginBottom: "3rem", color: "#121212" }}>
                                                <h3 >BOOK NOW</h3>
                                            </div>
                                        </div>
                                        <div className="row">

                                  

                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>FirstName</p>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id=""
                                                    className="form-control card-5"
                                                    placeholder=""
                                                    value={userData.name}
                                                    onChange={postUserData}
                                                />

                                            </div>

                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>User ID</p>
                                                <input
                                                    type="tet"
                                                    name="id"
                                                    id=""
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.id = userData._id}
                                                    onChange={postUserData}
                                                />
                                            </div>

                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>Area</p>
                                                <input
                                                    type="text"
                                                    name="area"
                                                    id=""
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.area}
                                                    onChange={postUserData}
                                                />
                                            </div>

                                        </div>


                                        <div className="row">
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: "#121212", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Amount</p>

                                                <input
                                                    type="number"
                                                    name="amount"
                                                    id=""
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.amount = total}
                                                    onChange={postUserData}
                                                />
                                            </div>


                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Phone Number</p>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id=""
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.phone}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Email</p>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id=""
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.email}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>Starting Time</p>
                                                <input
                                                    type="time"
                                                    name="stime"
                                                    id=""
                                                    className="form-control card-5"
                                                    placeholder=""
                                                    value={userData.stime}
                                                    onChange={postUserData}
                                                />

                                            </div>
                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>Ending time</p>
                                                <input
                                                    type="time"
                                                    name="etime"
                                                    id=""
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.etime}
                                                    onChange={postUserData}
                                                />
                                            </div>

                                            <div className="col-12 col-lg-4 contact-input-feild" style={{ marginTop: "-3rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", marginTop: "16px", fontFamily: "poppins" }}>Date</p>
                                                <input
                                                    type="date"
                                                    name="date"
                                                    id=""
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.date}
                                                    onChange={postUserData}
                                                />
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Service</p>
                                                <input
                                                    type="text"
                                                    name="service"
                                                    id=""
                                                    className="form-control"
                                                    placeholder=""
                                                    value={userData.service = service}

                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 contact-input-feild" style={{ marginTop: "-2.5rem", color: " ", fontWeight: "bold" }}>
                                                <p style={{ fontSize: "20px", marginBottom: "0px", fontFamily: "poppins" }}>Address</p>
                                                <input
                                                    type="text"
                                                    name="address"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Flat No., Apt Name, Area , Street ,City"
                                                    value={userData.address}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-check form-checkbox-style " style={{ marginTop: "-1rem" }}>

                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                            />
                                            <label
                                                className=" form-check-label main-hero-para" style={{ color: "#121212", fontFamily: "poppins" }} >
                                                I agree that the Razejob Finder may contact me at the email address or phone number above
                                            </label>
                                        </div>
                                        <Link style={{ marginTop: "2rem", marginBottom: "3rem" }}
                                            to="/"
                                            type="submit"
                                            className="btn btn-dark"
                                            onClick={submitData}>
                                            Submit
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ToastContainer />






        </>


    );
}

export default Hireme