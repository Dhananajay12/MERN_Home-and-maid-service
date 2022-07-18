import React from 'react'

import { useEffect } from 'react';
import image from "../imagefooter/maid9.jpg"

const Housemaid = () => {
   const allservice = 700;
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <>
         <div className='container' style={{ marginTop: "0rem", width: "80%" }}>
          
               <div className='row'>
              
               <div className='col-sm-12'>

                  <center> <h2 style={{color:"#121212"}}>House Maid Service<span  style={{color:"#c59409"}}> in Kalyan </span>  </h2></center> <br></br>

                  <center><h4  style={{color:"#121212"}}> <span style={{color:"#c59409"}}>TOP</span> BENEFITS OF HIRING <span style={{color:"#c59409"}}> HOUSEKEEPING SERVICES </span></h4></center> <br></br>
                  <br></br>
               </div>
               </div>


      <div className="container" style={{marginTop:"-5rem"}}>
        <div className='row'>
          <div className='col-sm-4'>
            <div >
              <img src={image} alt='error2'  style={{marginTop:"10rem"}} ></img>
            </div>
          </div>

          <div className=" col-md-8 " >
            <div className='container' >
            <h4 style={{color:"#121212"}}> IT’S  <span style={{color:"#c59409"}}>CONVENIENT </span></h4>
                     <p>No one wants to come home to a messy house after a long day of work. When you work with a service, cleaning is one less thing you’ll have to worry about. You won’t have to scramble to pick things up before you can relax. Everything will already be taken care of thanks to a weekly maid service.</p>
                     <p>Not only is Clean Heart Maids convenient, but the team of professionals is flexible as well. Whether you pay for a one-time cleaning service, have your home cleaned once a week, or take advantage of maid services just once each month, house cleaning services are worth it. You can have specific rooms cleaned or focus on a certain area of the house. You can request a specialty service, such as a deep cleaning, move-in move-out cleaning, and more.</p>
                     <p>Hiring cleaners can make your life a lot easier. Cleaning is a major chore, and working with professionals can take that responsibility off your plate. With flexible housekeeping services, you can find a solution that is suited to your needs and your schedule. Did you know many people report that hiring cleaners greatly improves their quality of life? Get started today! </p>

                     <h4  style={{color:"#121212"}}> IT CAN KEEP YOUR  <span style={{color:"#c59409"}}>HOME HEALTHY</span>  </h4>

                     <p>Over time, dirt, dust, and germs can collect in your home. This can have a serious impact on the air quality in your home. Allergies are the 6th leading cause of chronic illness in the United States, which is why you’ll want to keep your home allergen-free. Having bacteria in your home can also lead to a number of illnesses and adverse health conditions. </p>
                     <p>Local house cleaning services have access to professional-quality supplies and equipment, which means they can give your home the deep cleaning that it needs. In some cases, dust, dirt, and bacteria can sink deep into the fibers of your carpeting. This can’t be cleaned by a vacuum, but it can be addressed by deep cleaning. </p>
            </div>
          </div>
        </div>
      </div>
              
            
            

            <br></br>


            <br></br>

          
            <div className='row'>

               <h4 style={{color:"#121212"}}>IT CAN KEEP YOUR<span style={{color:"#c59409"}}> HOME HEALTHY </span></h4>

               <p>Over time, dirt, dust, and germs can collect in your home. This can have a serious impact on the air quality in your home. Allergies are the 6th leading cause of chronic illness in the United States, which is why you’ll want to keep your home allergen-free. Having bacteria in your home can also lead to a number of illnesses and adverse health conditions. </p>

               <p>Local house cleaning services have access to professional-quality supplies and equipment, which means they can give your home the deep cleaning that it needs. In some cases, dust, dirt, and bacteria can sink deep into the fibers of your carpeting. This can’t be cleaned by a vacuum, but it can be addressed by deep cleaning.  </p>
               <p>
                  Hiring cleaners could leave you feeling healthier than ever. If you struggle to manage your allergy symptoms, or if you feel like you’re always getting sick, the dust, germs, and bacteria in your home could be the culprit. Hiring a maid service is a great way for you to stay healthy throughout the year.
               </p>



            </div>
            <br></br>

            <div className='row'>

               <h4 style={{color:"#121212"}}>YOUR HOME WILL BE CLEANED BY <span style={{color:"#c59409"}}>EXPERIENCED PROFESSIONALS</span>  </h4>
               <p>When you work with a maid service, you’ll be partnering with professionals that have extensive cleaning experience. The cleaners that you hire will be able to work quickly and deliver excellent results. In addition, you’ll be hiring professionals that have access to all kinds of specialty tools and products. The professionals you work with will also have extensive training.  </p>
               <p>Do you ever feel like your home doesn’t look as clean as it should, even after you’ve spent hours cleaning? Professional cleaners can leave your home sparkling. You’ll be amazed when you see the final results of their work. The best cleaners really know what they’re doing. When they clean your home, they’ll put their knowledge and expertise to good use.</p>
               <p>
                  You may think that your home looks clean now, but it’s likely that you’ll see a big difference after you work with professional home cleaning services. Cleaners can easily handle any tasks that you struggle with, such as washing your windows or cleaning the tops of your cabinets. You can express any areas of cleanliness when hiring cleaners. They’ll make sure that these issues are addressed.
               </p>
            </div>
            <br></br>
            <div className='row'>
               <h4  style={{color:"#121212"}}> A HOUSE CLEANING SERVICE PROVIDES  <span style={{color:"#c59409"}}>ATTENTION TO DETAIL</span> </h4>
               <p>Even if you’re careful when cleaning your home, it’s likely that many spots will be overlooked. You may not clean the dust out of a ceiling corner or take the time to properly clean the area beneath your refrigerator. You might make the mistake of mopping your kitchen floors before you wipe down your countertops, which means you’ll be left with crumbs on your floor.  </p>
               <p>Professionals, however, will make sure that no detail is overlooked. They’ll clean crevices and other spots you might miss. Because of this attention to detail, you may find that it’s easier to keep your home clean after working with cleaners. Even if you pay for a one-time cleaning service rather than ongoing services, you’ll find that it’s easier to maintain your home. </p>

               <p>No one is perfect, and that old adage is especially true when it comes to cleaning the home. Even if you spend a lot of time and energy cleaning your home, it’s likely that there are a lot of important tasks that you’ll forget about. Since cleaners are experts, you can trust them to deliver the results you’re looking for. </p>

               <p>Clean Heart Maids loves what we do and after checking out the benefits of hiring a maid service, we hope you’ll give us a call. Not only will you be able to enjoy the benefits of living in a clean and healthy home, but you’ll also have more time to spend with your family and friends. Now is the perfect time for you to start using a cleaning service. Call us today!</p>

            </div>
            <br></br>

         </div>
         <br></br>
         <br></br>


      </>
   );
};
export default Housemaid;