import React from 'react';
import Book from './Book';


const Booknow = () => {

  return (
    <>
       <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" >
          <div className='container' >

              <Book></Book>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booknow;
