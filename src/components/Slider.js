import React from 'react';
import Auth from "./Auth";

import { useUserContext } from "./contexts/UserContext";
const Slider = () => {
  const { user, error,loading } = useUserContext();
  return <div>
    <div className="background4"  style={{width:"103%"}}> 
          <div className="tranbox4">

          <div className="App login" >
            {error && <p className="error">{error}</p>}
            {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
          </div>

         </div>
            </div>


  </div>;
};

export default Slider;
