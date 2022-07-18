import React from 'react'

import { useEffect } from 'react'
import image from '../imagefooter/cook3.jpg'
const Cook = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='Container' style={{ marginTop: "0rem", width: "80%", padding: "13px"}}>

                <div className='row'>
                  

                    <div className="container" style={{ marginTop: "-5rem" }}>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <div >
                                    <img src={image} alt='error2' style={{ marginTop: "4rem" }} ></img>
                                </div>
                            </div>

                            <div className="col-sm-8  col-md-8 ">
                                <div className='container' >
                                    <h4 style={{ color: "#121212" }}>How to <span style={{ color: "#c59409" }}>Choose a Cook </span></h4>
                                    <p>Nowadays, the role of a cook has been changed. People now look for more proactive, experienced and multi-skilled individuals. For a Cook Service in kalyan, a person is expected to prepare healthy food, has the ability to manage the kitchen and keep it organized as well. Responsibilities of a Professional Cook may include taking care of basic kitchen chores, preparing meal and deciding the menu etc.</p>

                                    <h4 style={{ color: "#121212" }}>Here are a few essential things to look for<span style={{ color: "#c59409" }}> when hiring a Cook in kalyan:</span></h4>
                                    <p>1.Experience: To ensure good and healthy food, it’s better to hire a cook with some previous experience in cooking.</p>
                                    <p>2.Responsibilities: Before hiring it’s better to explain the responsibilities of the person and the expectations.</p>
                                    <p>3.Special Requirements: In case of any special requirements it’s better to clear things in advance.</p>

                                    <h3 style={{ color: "#121212" }}>Why should you <span style={{ color: "#c59409" }}> hire a cook </span></h3>

                                    <p>Hiring a cook can be an excellent option for households as well as for individuals to help them improve food preferences while incorporating healthier food choices into their lifestyle. A cook not only manages the kitchen in an efficient way but also ensures tailor-making the meal according to personal preferences. With a wide range of cuisines to choose from, a cook also caters to specific dietary requirements. Some of the reasons why to hire a cook are:
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>




              

                <div className='row'>
                    <h3 style={{ color: "#121212" }}>  Healthier food<span style={{ color: "#c59409" }}> choices:</span></h3>
                    <p>One of the best things about Hiring a Cook is, unlike eating out and purchasing unhealthy stuff one can easily prepare a healthy meal at home. Besides deciding what should go in every meal, a professional cook helps prepare the menu keeping in mind the personal preferences of the people. A cook will prepare dishes made out of fresh ingredients and provide you with the freedom to plan and create a balanced diet.</p>


                </div>
                <br></br>
                <div className='row'>
                    <h3 style={{ color: "#121212" }}>Economically right<span style={{ color: "#c59409" }}> choice:</span></h3>
                    <p>Contrary to packaged foods and eating outside, a meal prepared at home is healthy as well as costs less. Besides being unhealthy there are several types of taxes and costs which are imposed on packaged and the restaurant served food</p>


                </div>
                <br></br>
                <div className='row'>
                    <h3 style={{ color: "#121212" }}> Closer to <span style={{ color: "#c59409" }}>the family:</span></h3>
                    <p>Nothing brings people close as good food. A meal shared with family is an excellent opportunity to share happiness. Though cooking is usually perceived as a peaceful experience, a healthy meal together brings joy, laughter, and excitement to the table. Moreover, a meal together is a perfect way of strengthening the bond with friends and relatives while creating priceless memories.</p>


                </div>
                <br></br>
                <div className='row'>
                    <h3 style={{ color: "#121212" }}> A well-managed <span style={{ color: "#c59409" }}>kitchen:</span></h3>
                    <p>Cooking involves many responsibilities apart from making delicious food. Maintaining the whole kitchen, from washing to cleaning, also needs to be done. Besides preparing healthy meals a cook also works in a clean and tidy manner maintaining the kitchen to high standards.</p>


                </div>
                <br></br>
                <div className='row'>
                    <h3 style={{ color: "#121212" }}> Menu:</h3>
                    <p>Either be a professional driver on the road or a cook in the kitchen, experience is equally important. Cooking for a group of people in a totally new environment, the cook  needs to plan and organize workflow. When it comes to hiring a cook service experience is very beneficial. Experience brings awareness of different cuisines, styles and customer preferences. A cook with experience would be less likely to waste things and more likely to prepare what everyone enjoys. </p>


                </div>


            </div>


            <br></br>
            <br></br>
            <br></br>


        </>
    )
}

export default Cook
