import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams, useHistory } from 'react-router-dom'
import { updatedata } from '../reducer/ContextProvider'

import { Link } from 'react-router-dom'
const Update = () => {

    const { updata, setUPdata } = useContext(updatedata)

    const history = useHistory("");

    const [inpval, setINP] = useState({
        name: "",
        email: "",
        phone: "",
        city:""  , 
        state:""

    })
    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async (e) => {
        e.preventDefault();

        const { name, email, phone ,city , state } = inpval;

        const res2 = await fetch(`/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone ,city , state
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 422 || !data2) {
            alert("fill the data");
        } else {
            history.push("/users")
            setUPdata(data2);
        }

    }
    return (
        <>


            <div className='cantainer' style={{}}>
<center>

                <div className='row ' style={{ width: "31rem", marginLeft: "1rem" , marginTop: "10rem" ,  background: "lightgrey" ,padding:"2rem 2rem 2rem 2rem "}}>

                    <form method='PUT'>

                        <center><h5>UserID:{inpval._id} </h5> </center>
                        <div className="input-container" style={{ marginTop: '1.5rem' }}>
                            <i className="fa fa-user icon"></i>
                            <input className="input-field" type="text" placeholder="Username" name="name" id='name' autoComplete='off' value={inpval.name} onChange={setdata} />
                        </div>

                        <div className="input-container" style={{ marginTop: '1.5rem' }}>
                            <i className="fa fa-envelope icon">  </i>
                            <input className="input-field" type="text" placeholder="Email" name="email" id='email' autoComplete='off' value={inpval.email} onChange={setdata} />
                        </div>

                        <div className="input-container" style={{ marginTop: '1.5rem' }}>
                            <i className="fa fa-phone icon" style={{ fontSize: "24px" }}></i>
                            <input className="input-field" type="phone" placeholder="Phone" name="phone" id='phone' autoComplete='off' value={inpval.phone} onChange={setdata} />
                        </div>
                        <div className="input-container" style={{ marginTop: '1.5rem' }}>
                            <i className="fa fa-home icon" style={{ fontSize: "24px" }}></i>
                            <input className="input-field" type="text" placeholder="city" name="city" id='city' autoComplete='off' value={inpval.city} onChange={setdata} />
                        </div>
                   
                        <div className="input-container" style={{ marginTop: '1.5rem' }}>
                            <i className="fa fa-home icon" style={{ fontSize: "24px" }}></i>
                            <input className="input-field" type="text" placeholder="state" name="state" id='state' autoComplete='off' value={inpval.state} onChange={setdata} />
                        </div>
                   
                   

                        <button type="submit" className="btn btn-dark" id="signup" value="register" style={{ marginTop: "2rem" , width:"100%" }} onClick={updateuser}>Update</button>
                    </form>
                </div>
</center>

            </div>





        </>
    )
}

export default Update