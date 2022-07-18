import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Mailer = () => {
  

    const sendEmail = async (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rzwaqzn', 'template_k82n7lc', e.target , 'user_V5TGFJCZN2Nm8MmZaBWfj')
            .then(res => {
                console.log(res);
            }).catch(err => console.log(err));
    }
    return (



        <div>
            <form  onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>


    );

}

export default Mailer