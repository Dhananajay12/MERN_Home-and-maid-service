import React, {useEffect}  from 'react';
import { Link } from 'react-router-dom';

import image from "../image/Razelogo2.jpg"
const Tranfooter = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
     }, [])
  




   
    return (
        <>

            <footer style={{ marginTop: "-1.9rem", marginBottom: "-2rem", width: "106%" }}>

                <div className='background5' style={{background:"#121212"}} >
                    <div className='transbox5' >
                        <div className='container'>
                            <div className='row'>
                                <div className="col-sm-6 col-md-4 ">
                                    <ul >
                                        <img src={image} alt="error"></img>  
                                        <p style={{ color: "white" ,fontFamily: "Poppins"}}> Daily life has become complicated and stressful.<br></br>
                                            We often wish that we had a genie who could
                                            take some load off our daily chores so that<br />
                                            we can have a little bit of extra time to do something we love.<br />
                                            Don't we?<br />
                                            RazeJob Finder help you to do that.</p>
                                        <Link to="/aboutus" className="btn btn-outline-warning" style={{ marginTop: "1rem", border: " 2px solid #dbaf32" }}>Learn More</Link>

                                    </ul>
                                </div>


                                <div className="col-sm-6 col-md-2" style={{ color:"white" ,  textDecoration: "none" }}>

                                    <ul>
                                        <br />
                                        <h2 style={{  fontFamily: "Poppins"   }}>Service</h2>
                                        <li className='zoom marginFooter' style={{  marginTop:"0.7rem"}}><Link  to="/housemaid" style={{  marginTop:"1rem",color:"white" , textDecoration: "none",fontFamily: "Poppins" }}> <i className="fa fa-angle-right" aria-hidden="true"></i> House Maid</Link></li>
                                        <li className='zoom marginFooter' style={{  marginTop:"0.7rem"}}>  <Link to="/cook" style={{  marginTop:"1rem", color:"white" , textDecoration: "none",fontFamily: "Poppins" }}> <i className="fa fa-angle-right" aria-hidden="true"></i> Cook</Link></li>
                                        <li className='zoom marginFooter' style={{  marginTop:"0.7rem"}}><Link  to="/babysitter" style={{  color:"white" , textDecoration: "none",fontFamily: "Poppins" }}><i className="fa fa-angle-right" aria-hidden="true"></i> Baby Sitter</Link></li>
                                       <li className='zoom marginFooter' style={{  marginTop:"0.7rem"}}><Link  to="/cleaning" style={{ color:"white" , textDecoration: "none",fontFamily: "Poppins" }}> <i className="fa fa-angle-right" aria-hidden="true"></i> Driver</Link></li>
                                       <li className='zoom marginFooter' style={{  marginTop:"0.7rem"}}><Link   to="/pestcontrol" style={{    color:"white" ,textDecoration: "none",fontFamily: "Poppins" }}> <i className="fa fa-angle-right" aria-hidden="true"></i> Pest Control</Link></li>
                                        <li className='zoom marginFooter' style={{  marginTop:"0.7rem"}}><Link  to="/cleaning" style={{ color:"white" , textDecoration: "none",fontFamily: "Poppins" }}> <i className="fa fa-angle-right" aria-hidden="true"></i> Cleaning</Link></li>
                                    </ul>
                                </div>



                                <div className="col-sm-6 col-md-2">
                                    <ul>
                                        <br />
                                        <h2 style={{  color:"white" ,textDecoration: "none",fontFamily: "Poppins"   }}>Support</h2>

                                        <li className='zoom marginFooter' ><Link to="/contactus" style={{  color:"white" ,textDecoration: "none" ,fontFamily: "Poppins"}}><i className="fa fa-angle-right" aria-hidden="true"></i> Contact Us</Link></li>
                                        <li className='zoom marginFooter'> <Link to="/" style={{ color:"white" , textDecoration: "none",fontFamily: "Poppins" }}> <i className="fa fa-angle-right" aria-hidden="true"></i> Privacy policy</Link></li>
                                        <li className='zoom marginFooter'> <Link to="/" style={{ color:"white" , textDecoration: "none" ,fontFamily: "Poppins"}}><i className="fa fa-angle-right" aria-hidden="true"></i>  Term & Conditon</Link></li>
                                        <li className='zoom marginFooter'> <Link to="/" style={{ color:"white" , textDecoration: "none" ,fontFamily: "Poppins"}}><i className="fa fa-angle-right" aria-hidden="true"></i> Make Payment</Link></li>
                                        <li className='zoom marginFooter'> <Link to="/" style={{ color:"white" ,  textDecoration: "none" ,fontFamily: "Poppins"}}><i className="fa fa-angle-right" aria-hidden="true"></i> Review</Link></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ul>
                                        <br />
                                        <h2 style={{  color:"white" ,textDecoration: "none",fontFamily: "Poppins" }}>Contact</h2>
                                        <li style={{  color:"white" ,textDecoration: "none",fontFamily: "Poppins" }}> <i className="fa fa-phone-square" ></i> +919137319282</li><br />
                                        <li style={{  color:"white" ,textDecoration: "none" ,fontFamily: "Poppins"}} > <i className="far fa-envelope"></i> support@razejobfinder.com</li><br />
                                        <li style={{  color:"white" , textDecoration: "none" ,fontFamily: "Poppins"}}><i className="fas fa-map-marker-alt" ></i> Satyam Heights,309/308 Opp. Anjali Hospital ,<br />Malang Road ,kalyan east ,<br /> Thane-421306,Maharashtra</li><br />
                                    </ul>



                                </div>
                       
                            </div>
                        
                        </div>
                      
                    </div>

                </div>
                
            </footer>
            <div className='col-md-12' style={{width:"106%",height:"6rem",background:"#403f3f",color:"white",marginBottom:"-4rem"}}>
           <center style={{marginTop:"0.6rem" ,fontFamily: "Poppins"}} className="left2">  © Copyright 2022, <Link to="/" style={{color:"yellow", textDecoration:"none"}}>Razejobfinder.com </Link>  All Rights Reserved</center> 
           <center style={{marginTop:"0.6rem",fontFamily: "Poppins"}} className="right2">Designed By <Link to="/" style={{color:"yellow", textDecoration:"none"}}>Razer</Link> </center> 
        
 

        
            </div>





        </>


    );
};

export default Tranfooter;
