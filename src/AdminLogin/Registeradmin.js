// import React from 'react'
// import image from "../image/login.jpg"
// import { Link, useHistory } from 'react-router-dom'
// import { useEffect, useState , useContext } from 'react'
// import { adddata } from '../reducer/ContextProvider';
// import { async } from '@firebase/util'
// const Register = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0)
//     }, [])

//     const { udata, setUdata } = useContext(adddata);
//     const history = useHistory();

//     const [inpval, setINP] = useState({
//         email: "",
//         password:"",
//         cpassword :"",
     
//     })

//     const setdata = (e) => {
//         const { name, value } = e.target;
//         setINP((preval) => {
//             return {
//                 ...preval,
//                 [name]: value
//             }
//         })
//     }


//     const addinpdata = async (e) => {
//         e.preventDefault();

//         const {  email,  password, cpassword } = inpval;

//         const res = await fetch("/admin-register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 email,   password, cpassword 
//             })
//         });

//         const data = await res.json();
      

//         if (res.status === 400 || !data) {
//             console.log("error ");
//             alert(" admin fill data");
//             history.push("/register")

//         } else {     
//             setUdata(data)
//             console.log("resigster");
//             history.push("/login")
//         }
//     }

//     return (
//         <>
//             <section className="contactus-section " style={{ marginTop: "10rem", marginBottom: "15rem" }}>
//                 <div className="container" >
//                     <div className="row card-5" style={{ margin: "0rem 2rem 0rem 2rem" , padding:"2rem 2rem 2rem 2rem"}}>
//                         <div className="col-md-6 col-lg-6  " >

//                             <h1 style={{ fontWeight: "bold" }}>Sign Up</h1>
//                             <br></br>
//                             <form method='POST'>
//                                 <div className="input-container" style={{ marginTop: '1.5rem' }}>
//                                     <i className="fa fa-envelope icon">  </i>
//                                     <input className="input-field" type="text" placeholder="Email" name="email" id='email' autoComplete='off' value={inpval.email} onChange={setdata} />
//                                 </div>

                            
//                                 <div className="input-container" style={{ marginTop: '1.5rem' }}>
//                                     <i className="fa fa-key icon" ></i>
//                                     <input className="input-field" type="password" placeholder="Password" name="password" id='password' autoComplete='off' value={inpval.password} onChange={setdata} />
//                                 </div>
//                                 <div className="input-container" style={{ marginTop: '1.5rem' }}>
//                                     <i className="fa fa-lock icon" style={{ fontSize: "24px" }}></i>
//                                     <input className="input-field" type="password" placeholder=" Confirm Password" name="cpassword" id='cpassword' autoComplete='off' value={inpval.cpassword} onChange={setdata} />
//                                 </div>
                    

//                                 <Link type="submit" className="btn btn-dark" id="signup" value="register" style={{ marginTop: "2rem" }} onClick={addinpdata}>Register</Link>
//                             </form>

//                         </div>
//                         <div className="col-md-6  col-lg-6  " style={{ padding: "4rem 4rem 4rem 4rem" }} >

//                             <center> <img src={image} className="img-fluid" style={{ width: "400px" }}>
//                             </img></center>
//                             <center>  <Link to="/loginadmin" style={{ textDecoration: "none" }} > I am already have account</Link></center>
//                         </div>

//                     </div>
//                 </div>
//             </section>



//         </>
//     )
// }

// export default Register