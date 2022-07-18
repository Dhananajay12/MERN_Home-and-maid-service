
import React from 'react';
import { Link } from 'react-router-dom'
import image from "../imageforday/driver1.jpg"
import image1 from "../imageforday/driver2.jpg"
import image2 from "../imageforday/driver3.jpg"
import image3 from "../imageforday/driver4.jpg"
import image4 from "../imageforday/driver5.jpg"
import image5 from "../imageforday/driver6.jpg"
import image6 from "../imageforday/longcookimage5.jpg"
const Driver = () => {


    const allservice = 900;

    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",

        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    return (
        <>
            <div className='row  rowv2' >

                <img className="img-fluid" src={image6} alt="error2" ></img>
            </div>


            <div className='row' style={{ marginTop: "2rem" }}>

                <center > <h2 style={{ color: "#121212", fontFamily: "Poppins" }}>WELCOME TO<span style={{ color: "#dbaf32" }}> RAZESERVICE</span></h2></center>

                <p style={{ color: "#121212" }}><center>Every Days has become complicated and stressful. We often wish that we had a genie who could take some load off our daily<br />
                    chores so that we can have a little bit ofextra time to do something we love. Don’t we? Our domestic help homemaid cook  <br />
                    baby sitter nanny etc, often act as those wizards but they are hardly dependable.</center></p>

            </div>

            <div className='container'>
                <div className='row '>

                    <div className=' col-lg-4 col-md-6 col-sm-12 col-xs-12'>

                        <div className="card mx-5 card-5 zoom mt-5  " style={{ width: "18rem" }}>
                            <img src={image5} className="card-img-top  passport " alt="..." />
                            <div className="card-body">
                                <ul>

                                    <li className="card-title"> <span style={{ fontWeight: "bold" }}>Name:</span> Pooja Dubey</li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Service:</span>  Driver</li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Religion:</span> Hindu </li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Gender:</span> Female </li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Age:</span> 29 </li>

                                    <li><span style={{ fontWeight: "bold" }}>Day Rate: </span>{formatter.format(allservice)}</li>
                                </ul>
                                <Link to="/" className="btn btn-dark mx-4 mt-2">About</Link>
                                <Link type="button" className="btn btn-dark mx-2 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                    Hire Me
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className=' col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                        <div className="card mx-5 card-5 zoom mt-5 " style={{ width: "18rem" }}>
                            <img src={image1} className="card-img-top  passport" alt="..." />
                            <div className="card-body">
                                <ul>
                                    <li className="card-title"> <span style={{ fontWeight: "bold" }}>Name:</span> lakshay Singh</li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Service:</span>  Driver</li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Religion:</span> Hindu </li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Gender:</span> Female </li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Age:</span> 27 </li>
                                    <li><span style={{ fontWeight: "bold" }}>Day Rate: </span>{formatter.format(allservice)}</li>
                                </ul>
                                <Link to="/" className="btn btn-dark mx-4 mt-2">About</Link>
                                <Link type="button" className="btn btn-dark mx-2 mt-2 " data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                    Hire Me
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className=' col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                        <div className="card mx-5 card-5 zoom mt-5 " style={{ width: "18rem" }}>
                            <img src={image2} className="card-img-top  passport" alt="..." />
                            <div className="card-body">
                                <ul>

                                    <li className="card-title"> <span style={{ fontWeight: "bold" }}>Name:</span> asmi khan</li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Service:</span>  Driver</li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Religion:</span> Muslim </li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Gender:</span> Female </li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Age:</span> 29 </li>
                                    <li><span style={{ fontWeight: "bold" }}>Day Rate: </span>{formatter.format(allservice)}</li>
                                </ul>
                                <Link to="/" className="btn btn-dark mx-4 mt-2">About</Link>
                                <Link type="button" className="btn btn-dark mx-2 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                    Hire Me
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-lg-4 col-md-3 col-sm-6 col-xs-12'>

                        <div className="card mx-5 mt-5 card-5 zoom " style={{ width: "18rem" }}>
                            <img src={image} className="card-img-top  passport " alt="..." />
                            <div className="card-body">
                                <ul>

                                    <li className="card-title"> <span style={{ fontWeight: "bold" }}>Name:</span> Meraa Patil</li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Service:</span>  Driver</li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Religion:</span> Hindu </li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Gender:</span> Female </li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Age:</span> 29 </li>
                                    <li><span style={{ fontWeight: "bold" }}>Day Rate: </span>{formatter.format(allservice)}</li>
                                </ul>

                                <Link to="/" className="btn btn-dark mx-4 mt-2">About</Link>
                                <Link type="button" className="btn btn-dark mx-2 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                    Hire Me
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-3 col-sm-6 col-xs-12'>
                        <div className="card mt-5 mx-5 card-5 zoom " style={{ width: "18rem" }}>
                            <img src={image4} className="card-img-top passport" alt="..." />
                            <div className="card-body">
                                <ul>

                                    <li className="card-title"> <span style={{ fontWeight: "bold" }}>Name:</span> Dipali Singh</li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Service:</span>  Driver</li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Religion:</span> Hindu </li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Gender:</span> Male </li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Age:</span> 40 </li>
                                    <li><span style={{ fontWeight: "bold" }}>Day Rate: </span>{formatter.format(allservice)}</li>
                                </ul>
                                <Link to="/" className="btn btn-dark mx-4 mt-2">About</Link>
                                <Link type="button" className="btn btn-dark mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                    Hire Me
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className='col-lg-4 col-md-3 col-sm-6 col-xs-12'>
                        <div className="card mt-5 mx-5 card-5 zoom " style={{ width: "18rem" }}>
                            <img src={image3} className="card-img-top  passport" alt="..." />
                            <div className="card-body">
                                <ul>

                                    <li className="card-title"> <span style={{ fontWeight: "bold" }}>Name:</span> Arun Jagpal </li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Service:</span>  Driver</li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Religion:</span> Hindu </li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Gender:</span> Male </li>
                                    <li className="card-title"><span style={{ fontWeight: "bold" }}>Age:</span> 32 </li>
                                    <li><span style={{ fontWeight: "bold" }}>Day Rate: </span>{formatter.format(allservice)}</li>
                                </ul>
                                <Link to="/" className="btn btn-dark mx-4 mt-2">About</Link>
                                <Link type="button" className="btn btn-dark mx-2 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                    Hire Me
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}

export default Driver;