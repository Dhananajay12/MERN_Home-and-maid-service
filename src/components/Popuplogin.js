import React from "react";
import Update from "../Admin.js/Update";
import Edit from "./Edit";


import Hireme from "./Hireme";


const Popuplogin = () => {

 


  return (
    <>


      <button type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{width:"0rem",background:"#121212"}}>
      
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-dialog  modal-fullscreen-sm-down ">
          
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog " role="document">
          <div className="modal-content">
              <Update></Update>
          </div>
        </div>
      </div>

     
   
      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog " role="document">
          <div className="modal-content">
            
              <Edit></Edit>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
          <Hireme></Hireme>
          </div>
        </div>
      </div>








    </>
  )
}
export default Popuplogin