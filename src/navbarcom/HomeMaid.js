
import React from 'react';
// import { Link } from 'react-router-dom'
// import image from "../image/maid11.jpg"
// import image1 from "../imageforday/11.jpg"
// import image2 from "../imageforday/12.jpg"
// import image3 from "../imageforday/13.jpg"
// import image4 from "../imageforday/14.jpg"
// import image6 from "../imageforday/longcookimage3.jpg"
import { useState, useEffect } from 'react';
import { MdCleaningServices } from 'react-icons/md'
import { Button, Form } from "react-bootstrap"
// import { CartState } from "../reducer/Context";
import Card from './Card';
import Data from "../db.json"
import { BsFilterSquare } from 'react-icons/bs'
import {AiFillFormatPainter} from 'react-icons/ai'

import {MdPlumbing} from 'react-icons/md'
const HomeMaid = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [data, setData] = useState(Data.product);


    // const {
    //     state: { products },
    //     dispatch,

    // } = CartState();

    const filterResult = (catItem) => {
        const result = Data.product.filter((curData) => {
            return curData.service === catItem;
        });
        setData(result);
    }


    // const allservice = 600;

    // var formatter = new Intl.NumberFormat("en-US", {
    //     style: "currency",
    //     currency: "INR",

    //     // These options are needed to round to whole numbers if that's what you want.
    //     minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //     //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    // });
    return (


        <>
            <div className='container' >
                <div className='row ' style={{ width: "100%", marginTop: "-3.2rem" }}>
                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' style={{ marginLeft: "-3rem", marginTop: "-1.6rem" }} >
                        <div className="filters" >
                            <span className="title"> <BsFilterSquare fontSize="30px" /> All Service</span>
                            <hr></hr>


                            {/* 
                            <span>



                              <h1>  <Link style={{ textDecoration:"none"}} onClick={() => filterResult('Home Maid')}>Home Maid</Link>  </h1>  
                            </span>
                            <hr></hr> */}

                            <span>



                                <Form.Check
                                    inline
                                    label="Home Maid"
                                    name="group1"
                                    type="radio"
                                    id={`inline-1`}
                                    onClick={() => filterResult('Home Maid')}

                                />
                            </span>
                            <span>
                                <Form.Check
                                    inline
                                    label="Driver"
                                    name="group1"
                                    type="radio"
                                    id={`inline-3`}
                                    onClick={() => filterResult('Driver')}



                                />
                            </span>

                         

                            <span>
                                <Form.Check
                                    inline
                                    label="Electrician"
                                    name="group1"
                                    type="radio"
                                    id={`inline-6`}
                                    onClick={() => filterResult('Electrician')}

                                />
                            </span>
                            
                            <span>
                                <Form.Check
                                    inline
                                    label="All catogory"
                                    name="group1"
                                    type="radio"
                                    id={`inline-7`}
                                    onClick={() => setData(Data.product)}

                                />
                            </span>
                            <hr></hr>

                            <span className="title2">  <MdCleaningServices fontSize="30px" /> Cleaning Service</span>
                            <hr></hr>
                            <span>
                                <Form.Check
                                    inline
                                    label="Full Home Cleaning"
                                    name="group1"
                                    type="radio"
                                    id={`inline-8`}
                                    onClick={() => filterResult('Cleaning')}

                                />
                            </span>
                            <span>

                                <Form.Check
                                    inline
                                    label="Bathroom Cleaning"
                                    name="group1"
                                    type="radio"
                                    id={`inline-9`}
                                    onClick={() => filterResult('BathroomCleaning')}

                                />
                            </span>

                            <span>
                                <Form.Check
                                    inline
                                    label="Kitchen Cleaning"
                                    name="group1"
                                    type="radio"
                                    id={`inline-10`}
                                    onClick={() => filterResult('KitchenCleaning')}

                                />
                            </span>
                            <span>
                                <Form.Check
                                    inline
                                    label="1 Room Cleaning"
                                    name="group1"
                                    type="radio"
                                    id={`inline-11`}
                                    onClick={() => filterResult('Oneroom')}

                                />
                            </span>


                            <hr></hr>

                            <span className="title2">  <AiFillFormatPainter fontSize="30px" /> Painter Service</span>
                            <hr></hr>

                            <span>
                                <Form.Check
                                    inline
                                    label="Kitchen Painting"
                                    name="group1"
                                    type="radio"
                                    id={`inline-4`}
                                    onClick={() => filterResult('Kitchenpainting')}

                                />
                            </span>
                            <span>
                                <Form.Check
                                    inline
                                    label="1 hall"
                                    name="group1"
                                    type="radio"
                                    id={`inline-4`}
                                    onClick={() => filterResult('onehall')}

                                />
                            </span>
                            <span>
                                <Form.Check
                                    inline
                                    label="Painter"
                                    name="group1"
                                    type="radio"
                                    id={`inline-4`}
                                    onClick={() => filterResult('Painter')}

                                />
                            </span>
                            <hr></hr>
                            <span className="title2">  <MdPlumbing fontSize="30px" /> Plumbing Service</span>
                            <hr></hr>

                            <span>
                                <Form.Check
                                    inline
                                    label="Bathroom Plumbing"
                                    name="group1"
                                    type="radio"
                                    id={`inline-5`}
                                    onClick={() => filterResult('Bathroomplumber')}

                                />
                            </span>
                            <span>
                                <Form.Check
                                    inline
                                    label="Kitchen Plumbing"
                                    name="group1"
                                    type="radio"
                                    id={`inline-5`}
                                    onClick={() => filterResult('KitchenPlumber')}

                                />
                            </span>
                            <span>
                                <Form.Check
                                    inline
                                    label="Full Plumber"
                                    name="group1"
                                    type="radio"
                                    id={`inline-5`}
                                    onClick={() => filterResult('Plumber')}

                                />
                            </span>

                            


                            <br></br>
                            <hr></hr>
                            <Button
                                variant="light"
                                style={{ width: "100%" }}
                                className="btn btn-dark"
                                onClick={() => setData(Data.product)}
                            >
                                Clear Filters
                            </Button>
                        </div>


                    </div>

                    <div className='col-xl-9 col-lg-9 col-md-9 col-sm-12 ' >
                        <div className='row margin4 mx-2' style={{ width: "100%" }} >
                            {data.map((prod) => {
                                return (
                                    <>
                                        <Card prod={prod} key={prod.id} />

                                    </>
                                )
                            })}
                        </div>
                    </div>

                </div>

            </div>

        </>

    );
}

export default HomeMaid;








