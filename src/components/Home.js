import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import image1 from "../image/babysitter.jpg"

import image2 from "../image/maid10.jpg"
import image15 from "../image/maid12.jpg"
import image16 from "../image/logo1.jpg"
import image20 from "../image/cook4.jpg"
import image17 from "../image/housekeeping.jpg"
import image18 from "../image/driver.jpg"
import image22 from "../image/logo2.jpg"
import image23 from "../image/logo3.jpg"
import image24 from "../image/logo4.jpg"
import image26 from '../Imagesmall/cleaming.jpg'
import image27 from '../Imagesmall/babysittingbanner.jpg'
import image28 from '../Imagesmall/cooking.jpg'
import image29 from '../Imagesmall/driving.jpg'
import image30 from '../Imagesmall/Electrician.jpg'
// import image31 from '../Imagesmall/maid.jpg'
import image32 from '../Imagesmall/painting.jpg'
import image33 from '../Imagesmall/plumber.jpg'
// import image34 from '../image/6.jpg'
import image35 from '../imagesmall2/plumber.jpg'
import image36 from '../imagesmall2/babysitter3.jpg'
import image37 from '../imagesmall2/carpentar.jpg'
import image38 from '../imagesmall2/cook4.jpg'
import image39 from '../imagesmall2/driver.jpg'
import image40 from '../imagesmall2/housekeeping.jpg'
import image41 from '../imagesmall2/maid12.jpg'
import image42 from '../imagesmall2/pestcontrol2.jpg'
import image43 from '../imagesmall2/maid8.jpg'
import image44 from '../imagesmall2/electriciansmall2.jpg'
import image45 from '../imagesmall2/toilet.jpg'
import image46 from '../imagesmall2/images.jpg'
// import image47 from '../imagesmall2/banner10.jpg'

import { Carousel } from "react-bootstrap";

import Smallcard from '../navbarcom/Smallcard';



const Home = () => {

  const [userName, setUserName] = useState('');

  const userHome = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },

      });
      const data = await res.json();
      console.log(data);
      setUserName(data.name);


    } catch (err) {
      console.log(err);

    }
  }


  useEffect(() => {
    userHome();
  }, []);



  return (
    <>

{/* 
<div class="icon-bar">
  <a href="/" className="facebook"><i className="fa fa-facebook"></i></a> 
  <a href="/" className="twitter"><i className="fa fa-twitter"></i></a> 
  <a href="/" className="google"><i className="fa fa-google"></i></a> 
  <a href="/" className="linkedin"><i className="fa fa-linkedin"></i></a>
  <a href="/" className="youtube"><i className="fa fa-youtube"></i></a> 
</div> */}




      <div className='background9  rowv2'>

        <div className='container ' >

          <div className='row left2' style={{ marginTop: "1rem", color: "white", marginLeft: "3rem" }}>

            <h1 style={{ color: "#dbaf32", fontSize: "60px" }}>Home & Maid Service</h1>
            <h2 style={{ marginTop: "1rem" }}> we can have a little bit of extra time to do <br></br> something we love.
              <br></br><span><h2 style={{ color: "#dbaf32" }}>Don't we?</h2>   </span></h2>
            <h3><i className="fas fa-map-marker-alt" style={{ color: "red", marginTop: "0rem" }} ></i> Kalyan-Dombivali</h3>

            <br></br>
            <br></br>


            <Link to='/aboutus' className='btn btn-warning  ' style={{ width: "8rem", marginLeft: "1rem" }}>Read More</Link>

          </div>
        </div>








      </div>



      <Smallcard></Smallcard>


      <br></br>
      <br></br>

      <br></br>


      <Carousel fade className='rowv5 ' style={{ marginTop: "3rem", marginBottom: "2rem" }}>

        <Carousel.Item interval={1000}>
          <div className='d-flex rowv5'>
            <center>

            </center>

            <Link to="/homemaid">

              <img
                className="small-img-size2  "
                src={image26}
                alt="First slide"
              />

            </Link>
            <Link to="/homemaid">

              <img
                className="small-img-size2 mx-1"
                src={image27}
                alt="First slide"
              />
            </Link>
            <Link to="/homemaid">

              <img
                className="small-img-size2 mx-1 "
                src={image28}
                alt="First slide"
              />
            </Link>
            <Link to="/homemaid">

              <img
                className="small-img-size2 mx-1 "
                src={image30}
                alt="First slide"
              />
            </Link>



          </div>
        </Carousel.Item>


        <Carousel.Item interval={1000}>
          <div className='d-flex rowv5'>
            <center>

            </center>

            <Link to="/homemaid">

              <img
                className="small-img-size2 "
                src={image29}
                alt="First slide"
              />

            </Link>
            <Link to="/homemaid">

              <img
                className="small-img-size2 mx-1"
                src={image33}
                alt="First slide"
              />
            </Link>
            <Link to="/homemaid">

              <img
                className="small-img-size2 mx-1 "
                src={image28}
                alt="First slide"
              />
            </Link>
            <Link to="/homemaid">

              <img
                className="small-img-size2 mx-1"
                src={image32}
                alt="First slide"
              />
            </Link>

          </div>
        </Carousel.Item>
      </Carousel>


      <div className='container card-8'>
        <div className="row rowv7">
          <div className='row'>
            <center><h1>Special Service</h1>
              <h5 style={{ color: "grey" }}>Home Maid | Cleaning | Babysitter </h5>
            </center>

          </div>


          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>


          <div className='row '>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <center>
                <Link to="/homemaid">

                  <img src={image41} alt="" className="small-img-size3 zoom2"></img>
                </Link>
                <br></br>
                <br></br>
                <h4>Home Maid</h4></center>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

              <center>
                <Link to="/homemaid">

                  <img src={image36} alt="" className="small-img-size3 zoom2 "></img>
                </Link>
                <br></br>
                <br></br>
                <h4>Babysitter</h4></center>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

              <center>
                <Link to="/homemaid">

                  <img src={image38} alt="" className="small-img-size3 zoom2 "></img>
                </Link>
                <br></br>
                <br></br>
                <h4>Cooking</h4></center>
            </div>

          </div>
        </div>





      </div>
      <br></br>
      <div className='container card-8'>
        <div className="row rowv7">
          <div className='row'>
            <center><h1>Cleaning & Pest Control</h1>
              <h4 style={{ color: "grey" }}>get 20% discount on this services</h4>
            </center>

          </div>


          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>


          <div className='row '>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <center>
                <Link to="/homemaid">

                  <img src={image45} alt="" className="small-img-size3 zoom2 "></img>
                </Link>
                <br></br>
                <br></br>
                <h4>Bathroom Cleaning</h4></center>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

              <center>
                <Link to="/homemaid">

                  <img src={image42} alt="" className="small-img-size3 zoom2 "></img>
                </Link>
                <br></br>
                <br></br>
                <h4>Pest Control</h4></center>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

              <center>
                <Link to="/homemaid">

                  <img src={image43} alt="" className="small-img-size3 zoom2 "></img>
                </Link>
                <br></br>
                <br></br>
                <h4 > All Cleaning</h4></center>
            </div>

          </div>
        </div>

      </div>
      <br></br>
      <div className='container card-8'>
        <div className="row rowv7">
          <div className='row'>
            <center><h1>Home Repair</h1>
              <h5 style={{ color: "grey" }}>get 20% discount on this services</h5>
            </center>

          </div>


          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>


          <div className='row '>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <center>
                <Link to="/homemaid">

                  <img src={image35} alt="" className="small-img-size3 zoom2 "></img>
                </Link>
                <br></br>
                <br></br>
                <h4>Plumber</h4></center>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

              <center>
                <Link to="/homemaid">

                  <img src={image37} alt="" className="small-img-size3 zoom2 "></img>
                </Link>
                <br></br>
                <br></br>
                <h4>Carpenter</h4></center>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

              <center>
                <Link to="/homemaid">

                  <img src={image44} alt="" className="small-img-size3 zoom2 "></img>
                </Link>
                <br></br>
                <br></br>
                <h4>Electrician</h4></center>
            </div>

          </div>
        </div>





      </div>
      <br></br>


      <div className='container card-8'>
        <div className="row rowv7">
          <div className='row'>
            <center><h1>Other Services</h1>
              <h5 style={{ color: "grey" }}>get 10% discount on this services</h5>
            </center>

          </div>


          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>


          <div className='row '>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <center>
                <Link to="/homemaid">

                  <img src={image39} alt="" className="small-img-size3 zoom2 "></img>
                </Link>
                <br></br>
                <br></br>
                <h4>Driver</h4></center>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

              <center>
                <Link to="/homemaid">

                  <img src={image40} alt="" className="small-img-size3 zoom2 "></img>
                </Link>
                <br></br>
                <br></br>
                <h4>Housekeeping</h4></center>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

              <center>
                <Link to="/homemaid">

                  <img src={image46} alt="" className="small-img-size3 zoom2 "></img>
                </Link>
                <br></br>
                <br></br>
                <h4>Painter</h4></center>
            </div>

          </div>
        </div>





      </div>
      <br></br>





      <div className='background3' style={{ width: "103%", fontFamily: "Poppins" }}>
        <div className='tranbox3'>
          <div className='row animated animatedFadeInUp fadeInUp' style={{ marginTop: "4rem" }}>

            <center > <h2 style={{ color: "white", marginTop: "1rem" }}>WELCOME TO {userName} <span style={{ color: "#dbaf32" }}>RAZEJONFINDER.IN</span></h2></center>
            <br />
            <br />
            <br />
            <h5 style={{ color: "white" }}><center>Every Days has become complicated and stressful. We often wish that we had a genie who could take some load off our daily<br />
              chores so that we can have a little bit ofextra time to do something we love. Don’t we? Our domestic help homemaid cook  <br />
              baby sitter nanny etc, often act as those wizards but they are hardly dependable.</center></h5>
          </div>

          <div className="container" style={{ marginTop: "-3rem" }}>

            <div className="row " >

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  " style={{}} >


                <div className="card center right zoom" style={{ width: "20rem", marginTop: "2rem" }}>
                  <img className="card-img-top " src={image15} alt="Card cap" />
                  <div className="card-body"><center>
                    <h5 className="card-title">HOUSE MAID SERVICES</h5>
                    <p className="card-text">We provide maids that work either part-time or full time and who are responsible for the cleanliness and maintenance of an area in a workplace or a house. When it comes to the home situation, these maids work under the constant supervision of a household manager.</p>
                    <Link to="/book" type="button" className="btn btn-dark">
                      Book now
                    </Link>
                  </center>
                  </div>
                </div>


              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" >

                <div className="card center zoom" style={{ width: "20rem", marginTop: "2rem" }}>
                  <img className="card-img-top " src={image1} alt="Card cap" />
                  <div className="card-body"><center>
                    <h5 className="card-title">BABY SITTER</h5>
                    <p className="card-text">The process of hiring a caretaker for your baby can be stressful and a lot of things have to be taken into consideration. We understand this complex process and aspire to make it easy and safe for you.</p>
                    <Link to="/book" type="button" className="btn btn-dark">
                      Book now
                    </Link>
                  </center>
                  </div>
                </div>

              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" >
                <div className="card center left zoom " style={{ width: "20rem", marginTop: "2rem" }}>
                  <img className="card-img-top" src={image20} alt="Card  cap" />
                  <div className="card-body"><center>
                    <h5 className="card-title">COOK</h5>
                    <p className="card-text">Every meal you eat should be nutritious, fresh, and well-cooked. Food is the most important part of our lives as our physical health, mental health, and our daily stamina depends on it.</p>
                    <Link to="/book" type="button" className="btn btn-dark">
                      Book now
                    </Link>
                  </center>
                  </div>
                </div>

              </div>





              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="card right zoom" style={{ width: "20rem", marginTop: "2rem" }}>
                  <img className="card-img-top" src={image17} alt="Card  cap" />
                  <div className="card-body"><center>
                    <h5 className="card-title">HOUSEKEEPING SERVICES</h5>
                    <p className="card-text">Housekeeping Services is the foundation stone of all facility management services.A good housekeeper provides the client with a wide variety of professional services and takes on the responsibilities of cleaning, laundry, cooking and running errands.</p>
                    <Link to="/book" type="button" className="btn btn-dark">
                      Book now
                    </Link></center>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                <div className="card center zoom" style={{ width: "20rem", marginTop: "2rem" }}>
                  <img className="card-img-top" src={image2} alt="Card cap" />
                  <div className="card-body"><center>
                    <h5 className="card-title">ALL WORK MAID</h5>
                    <p className="card-text">Total Home Facility Services is a tech enabled and most trusted platform for all your household help needs. We are a one stop destination having our self collected and trusted database of 60,000+ candidates in all localities of Kalyan-Dombivali, Navi Kalyan-Dombivali.</p>
                    <Link to="/book" type="button" className="btn btn-dark">
                      Book now
                    </Link></center>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                <div className="card left zoom" style={{ width: "20rem", marginTop: "2rem" }}>
                  <img className="card-img-top" src={image18} alt="Card  cap" />
                  <div className="card-body"><center>
                    <h5 className="card-title">
                      DRIVER SERVICE</h5>
                    <p className="card-text">Total Home Facility Services is a professional driver service in Kalyan-Dombivali which provides complete organized service all over Kalyan-Dombivali for Temporary driver, Permanent driver and Contract basis driver at the given time.</p>
                    <Link to="/book" type="button" className="btn btn-dark">
                      Book now
                    </Link></center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container' style={{ margin: "-4rem" }}>


      </div>
      <div className='row' style={{ marginTop: "3rem" }}>
        <center>
          <h3>WHY CHOOSE US</h3>
          <h5 style={{ color: "grey", marginTop: "2rem" }}>
            The world’s Latest at clean cleaning service company we can clean your<br />
            residential space including homes.
          </h5>
          <hr style={{}}></hr>
        </center>


      </div>


      <div className='container'>

        <center>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-3  col-sm-12'>
              <div className="card center card-5 animated animatedFadeInUp fadeInUp" style={{ width: "18rem", marginTop: "1rem" }}>
                <center>
                  <img className="card-img-top" style={{ width: "60%" }} src={image16} alt="Card  cap" />
                  <div className="card-body">
                    <h5 className="card-title ">SERVICE GUARANTEE</h5>
                    <p className="card-text">We offer this guarantee because we are confident in the services we offer. We only hire the most qualified professionals to provide high quality services.</p>


                  </div>
                </center>
              </div>

            </div>
            <div className='col-md-6 col-lg-6  col-xl-3 col-sm-12 '>
              <div className="card center card-5  animated animatedFadeInUp fadeInUp" style={{ width: "18rem", height: "24.5rem", marginTop: "1rem" }}>
                <center>   <img className="card-img-top" style={{ width: "60%" }} src={image22} alt="Card  cap" />
                  <div className="card-body">
                    <h5 className="card-title">SAFE AND RELIABLE</h5>
                    <p className="card-text">Your safety is our first priority, so we have the best people we can trust for our customers. We check the background of candidates and also check their references.</p>


                  </div>
                </center>
              </div>

            </div>
            <div className='col-md-6 col-lg-6 col-xl-3 col-sm-12'>
              <div className="card center  card-5 animated animatedFadeInUp fadeInUp " style={{ width: "18rem", marginTop: "1rem" }}>
                <center>   <img className="card-img-top" style={{ width: "60%" }} src={image23} alt="Card  cap" />
                  <div className="card-body">
                    <h5 className="card-title">FREE REPLACEMENT</h5>
                    <p className="card-text">If the maid leaves for any reason within the contract period, we will replace with another maid and it free of charge to your complete satisfaction.</p>


                  </div>
                </center>
              </div>

            </div>
            <div className='col-md-6  col-lg-6  col-xl-3 col-sm-12 '>
              <div className="card center card-5  animated animatedFadeInUp fadeInUp" style={{ width: "18rem", height: "24.5rem", marginTop: "1rem" }}>
                <center> <img className="card-img-top" style={{ width: "60%" }} src={image24} alt="Card  cap" />
                  <div className="card-body">
                    <h5 className="card-title">HIGH QUALITY</h5>
                    <p className="card-text">We provide the highest quality services by exceeding your expectations. Only qualified maids are registered with us.</p>


                  </div>
                </center>
              </div>

            </div>



          </div>
        </center>



      </div>




      <div className='row head2 footer-booknow' >

        <div className='col-lg-8 col-md-8 ' style={{ color: "white", marginTop: "1.2rem", marginBottom: "1.2rem" }} >
          <center> <h3 className='small2'>Are you looking for Professional Maid <br></br> Service for Your House?</h3></center>

        </div>
        <div className='col-lg-4 col-md-4' style={{ color: "white", marginTop: "2.5rem" }}>
          <center>  <h4 className='small3 '><i className="fa fa-phone-square" ></i> Call +91928299829  or  <span>    <Link to="/book" type="button" className="btn btn-outline-warning mx-1" >
            Book now
          </Link></span></h4></center>


        </div>
      </div>
























    </>

  )
}
export default Home