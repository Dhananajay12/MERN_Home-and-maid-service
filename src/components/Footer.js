import React from 'react'
import { Link } from 'react-router-dom';
import image from '../image/Razelogo.jpg';

const Footer = ()=> {
    return (
      <>
      <footer  clasName="backgroundtrans" style={{border:"5px solid #dbaf32",marginTop:"8rem",marginBottom:"-4rem",width:"100%",background:"rgb(11 60 82)"}}>
      <div className='container'>
         <div className='row'  style={{background:"rgb(11 60 82)",width:"100%"}}>
         <div className="col-sm-6 col-md-4 " style={{color:"white"}}>
         <ul>
         <h2><img src={image}  alt='error8'></img></h2>
         <p> Daily life has become complicated and stressful.<br></br>
             We often wish that we had a genie who could
             take some load off our daily chores so that<br/>
             we can have a little bit of extra time to do something we love.<br/>
            Don't we?<br/>
             RazeJob Finder help you to do that.</p>
             <Link  to="/" className="btn btn-outline-warning" style={{ marginTop: "1rem", border: " 2px solid #dbaf32" }}>Learn More</Link>
         
             </ul>
         </div>

         
     <div className="col-sm-6 col-md-2" style={{color:"white",textDecoration:"none"}}>
      
      <ul >
      <br/>
      <h2>Service</h2>
      
      <li ><Link  to="/housemaid" style={{color:"white",textDecoration:"none"}}>House Maid</Link></li><br/>
      <li>  <Link to="/cook" style={{color:"white",textDecoration:"none"}}>Cook</Link></li><br/>
      <li><Link  to="/babysitter" style={{color:"white",textDecoration:"none"}}>Baby Sitter</Link></li><br/>
      <li><Link  to="/pestcontrol" style={{color:"white",textDecoration:"none"}}>Pest Control</Link></li><br/>
      <li><Link to="/cleaning" style={{color:"white",textDecoration:"none"}}>Cleaning</Link></li> 
      </ul>
     </div>



       <div className="col-sm-6 col-md-2">
       <ul>
       <br/>
       <h2 style={{color:"white",textDecoration:"none"}}>Support</h2>
    
    <li><Link  to="/contactus" style={{color:"white",textDecoration:"none"}}>Contact Us</Link></li><br/>
     <li> <Link to="/" style={{color:"white",textDecoration:"none"}}>Privacy policy</Link></li><br/>
     <li> <Link  to="/" style={{color:"white",textDecoration:"none"}}> Term & Conditon</Link></li><br/>
     <li> <Link to="/"  style={{color:"white",textDecoration:"none"}}>Make Payment</Link></li><br/>
    <li> <Link  to="/" style={{color:"white",textDecoration:"none"}}>Review</Link></li>
    </ul>
       </div>
       <div className="col-sm-6 col-md-4">
       <ul>
       <br/>
          <h2 style={{color:"white",textDecoration:"none"}}>Contact</h2>
         <li style={{color:"white",textDecoration:"none"}}> <i className="fa fa-phone-square" ></i> +919137319282</li><br/>
         <li style={{color:"white",textDecoration:"none"}} > <i className="far fa-envelope"></i> support@razejobfinder.com</li><br/>
       <li style={{color:"white",textDecoration:"none"}}><i className="fas fa-map-marker-alt" ></i> Satyam Heights,309/308 Opp. Anjali Hospital ,<br/>Malang Road ,kalyan east ,<br/> Thane-421306,Maharashtra</li><br/>
        </ul>
      

     
       </div>
         </div>
         <div className='site-copyright container'>
      © Copyright 2022, Razejobfinder.com
      </div>
     
     </div>
      </footer>
     
     
  </>
    )
}
export default Footer;