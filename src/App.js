import Auth from "./components/Auth";

import { useUserContext } from "./contexts/UserContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./components/Navbar"

import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Housemaid from "./footercontact/Housemaid";
import Cook from "./footercontact/Cook";
import Babysitter from "./footercontact/Babysitter";
import Pestcontrol from "./footercontact/Pestcontrol";
import Cleaning from "./footercontact/Cleaning";

import Contactus from "./components/Contactus";
import HomeMaid from "./navbarcom/HomeMaid";
import Popuplogin from "./components/Popuplogin";
import Booknow from "./components/Booknow";
import Tranfooter from "./components/Tranfooter";
import Hireme from "./components/Hireme";
import Aboutus from "./navbarcom/Aboutus";

import Driver from "./navbarcom/Driver";
import Bote from "./components/Bote";
import Book from "./components/Book"
import Locals from "./components/Locals";
import Register from "./components/Register";

import Login from "./components/Login";
import About from "./components/About";
import Touch from "./components/Touch";
import Logout from "./components/Logout";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "../src/reducer/UseReducer"
import Cart from "./navbarcom/Cart";

import Showorder from "./navbarcom/Showorder";
import Order from "./Admin.js/Order";
import Users from "./Admin.js/Users";
import Products from "./Admin.js/Products";
import Update from "./Admin.js/Update";
import Dashboard from "./Admin.js/Dashboard";
import Complent from "./Admin.js/Complent";
import Delivary from "./Admin.js/Delivary";
import Bookformonth from "./Admin.js/Bookformonth";
import AddProduct from "./Admin.js/AddProduct";
import Editproduct from "./Admin.js/Editproduct";

import Loginadmin from "./AdminLogin/Loginadmin";
import Registeradmin from "./AdminLogin/Registeradmin";
import Adminlogout from "./AdminLogin/Adminlogout";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Application from "./Admin.js/Application";
import Showdelivary from "./navbarcom/Showdelivary";
import Localadd from "./Admin.js/Localadd";
export const UserContext = createContext();



function App({ location }) {

  const { user, error, loading } = useUserContext();

  const [state, dispatchs] = useReducer(reducer, initialState);

  return (

    <UserContext.Provider value={{ state, dispatchs }}>

      <Router style={{ fontFamily: "Poppins" }} >




        <Switch>


            
     
        
        <Route exact path="/loginadmin">
        <Loginadmin></Loginadmin>
          </Route>
          <Route exact path="/adminlogout">
        <Adminlogout></Adminlogout>
          </Route>


          <Route exact path="/registeradmin">
        <Registeradmin></Registeradmin>
          </Route>
          <Route exact path="/application">
        <Application></Application>
          </Route>
          <Route exact path="/localadd">
        <Localadd></Localadd>
          </Route>
        

        
         
          <Route exact path="/order">
              <Order></Order>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <Route exact path="/users">
              <Users></Users>
            </Route>

            <Route exact path="/update/:id">
              <Update></Update>
            </Route>
    

            <Route exact path="/admin">
              <Dashboard></Dashboard>
            </Route>

            <Route exact path="/complent">
              <Complent></Complent>
            </Route>

            <Route exact path="/delivery">
              <Delivary></Delivary>
            </Route>
            <Route exact path="/bookformonth">
              <Bookformonth></Bookformonth>
            </Route>
            <Route exact path="/addproduct">
              <AddProduct></AddProduct>
            </Route>
            <Route exact path="/product/edit/:id">
              <Editproduct></Editproduct>
            </Route>
            <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        


          <div className="container" style={{ marginTop: "1.2rem", fontFamily: "Poppins" }}>
            <Navbar></Navbar>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/homemaid">
              <HomeMaid></HomeMaid>
            </Route>
            <Route exact path="/showdelivary">
            <Showdelivary></Showdelivary>
          </Route>

            <Route exact path="/contact">
              <Contact></Contact>
            </Route>



            <Route exact path="/housemaid">
              <Housemaid></Housemaid>
            </Route>
            <Route exact path="/cook">
              <Cook></Cook>
            </Route>
            <Route exact path="/babysitter">
              <Babysitter></Babysitter>
            </Route>
            <Route exact path="/pestcontrol">
              <Pestcontrol></Pestcontrol>
            </Route>
            <Route exact path="/cleaning">
              <Cleaning></Cleaning>
            </Route>
            <Route exact path="/cart">
              <Cart></Cart>
            </Route>
            <Route exact path="/contactus">
              <Contactus></Contactus>
            </Route>
            <Route exact path="/popuplogin">
              <Popuplogin></Popuplogin>
            </Route>
            <Route exact path="/book">
              <Book></Book>
            </Route>
            <Route exact path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/hireme">
              <Hireme></Hireme>
            </Route>
            <Route exact path="/aboutus">
              <Aboutus></Aboutus>
            </Route>

            <Route exact path="/driver">
              <Driver></Driver>
            </Route>
            <Route exact path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/locals">
              <Locals></Locals>
            </Route>


            <Route exact path="/touch">
              <Touch></Touch>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/logout">
              <Logout></Logout>
            </Route>
            <Route exact path="/showorder">
              <Showorder></Showorder>
            </Route>

            {/* <div className="background4"  style={{width:"103%",marginLeft:"0rem"}}> 
          <div className="tranbox4">
      
        
          <div className="App login left" >
           {error && <p className="error">{error}</p>}
          {loading ? <h2>Loading...</h2> : <> {user ? <Auth/> : <Auth />} </>}
         </div>
        
         </div>
            </div> */}

            <Route exact path="/signin">
              <Signin></Signin>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>

            <Tranfooter></Tranfooter>
          </div>

     
       
       
     

        </Switch>
        <ToastContainer autoClose={5000}  />







      </Router>

    </UserContext.Provider>



  );
}

export default App;