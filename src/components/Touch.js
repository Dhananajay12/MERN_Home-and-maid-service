import { async } from '@firebase/util';
import React ,{ useEffect ,useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Touch = () => {

    const [userData, setUserData] = useState({name:"",email:"",phone:"",message:""});

    const userContact = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },

            });
            const data = await res.json();
            console.log(data);
            setUserData({...userData , name:data.name,email:data.email,phone:data.phone});

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }


        } catch (err) {
            console.log(err);
          
        }
    }


    useEffect(() => {
        userContact();
    }, []);

   
    const notify = () => toast.error("Please Fill data", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
    });

    const notifysum = () => toast.success("Feedback send", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
    });


    //storing data   
    
    const handleInputs = (e) =>{
        const name= e.target.name;
        const value = e.target.value;
         setUserData({ ...userData , [name]:value });  
    }  

    //send data to backend

    const contactForm = async (e) =>{
        e.preventDefault();
             const {name ,email,phone ,message} = userData;
         
             const res = await fetch('/massage',{
                 method:"POST",
                 headers:{  
                     "Content-Type":"application/json"
                 },
                 body:JSON.stringify({
                     name, email ,phone , message
                 })
             });
             const data = await res.json();
             
             if(!message){
                notify();
             }
             else{
                notifysum();
                 setUserData({ ...userData, message:""}); 
             }



       }

    return (
        <>
            <div className="container">
                <div className="row rowv3" >
                    <div className="col-sm  small-box card-7"  >
                        <i className="fa fa-phone-square  fa-2x left1  " />
                        <div style={{ display: "block" }}>
                            <h5>Phone No</h5>
                            <p style={{ fontSize: "13px", color: "#121212"  }}>+91844540-58844</p>
                        </div>

                    </div>
                    <div className="col-sm small-box card-7">
                        <i className="far fa-envelope fa-2x left1"></i>
                        <div style={{ display: "block" }} >
                            <h5>Email</h5>
                            <p style={{ fontSize: "13px", color: "#121212"  }}>RazeJob@gmail.com</p>

                        </div>

                    </div>
                    <div className="col-sm small-box card-7">
                        <i className="fas fa-map-marker-alt fa-2x left1" ></i>
                        <h5>Location</h5>
                        <p style={{ fontSize: "13px", color: "#121212"  }} >Kalyan, Maharashtra </p>
                    </div>
                </div>
            </div>


            <div className='container ' style={{marginTop:"-1rem"}}>
                <div className='row rowv4 card-6' style={{ background:"#c5c3c3"}}>
                    <div className='col-lg-10 offset-lg-1 ' >
                        <div className='contact_form_container py-5'>
                            <div className='contact_form_title left'>
                              Feedback
                            </div>

                             <form method="POST" >
                                     <div className=' contact_form_name d-flex justify-between align-item '>
                                              <input type='text' id="contact_form_name " className='contact-form-name  input_field' name='name' value={userData.name} onChange={handleInputs} placeholder='Your Name' required='true'></input>
                                              <input type='email' id="contact_form_email " className='contact-form-email  input_field' name='email' value={userData.email} onChange={handleInputs}  placeholder='Your Email' required='true'></input>
                                              <input type='number' id="contact_form_phone" className='contact-form-phone   input_field'  name='phone' value={userData.phone} onChange={handleInputs} placeholder='Your Phone' required='true'></input>
                                     </div>
                                     <div className='contact_form_text'>

                                        <textarea type='text' name='message' value={userData.message} onChange={handleInputs} id='' cols="30" rows="8" placeholder='Message'> </textarea>

                                     </div>  
                                     
                                <Link type="submit" onClick={contactForm} className="btn btn-dark"   style={{marginTop:"2rem"}}>Send Meassage</Link>

                             </form>
                        </div>
                    </div>

                </div>
            </div>




        </>








    )
}

export default Touch

