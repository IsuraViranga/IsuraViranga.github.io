import React from 'react';
import mobile from '../../assets/mobile2.svg';
import location from '../../assets/location.svg';
import mail from '../../assets/mail1.svg';
import './Contact.css';


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "bcf20e4d-58ad-4c7e-b03b-56710debccff");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div className="contact" id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <div></div>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am currently available to take on new projects.so feel free to send me a message about anything you want me to work on.You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                         <img src={mail} alt='mail address'/><p>isuraviranga@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                         <img src={mobile} alt='mail address'/><p>0777997689</p>
                    </div>
                    <div className="contact-detail">
                         <img src={location} alt='mail address'/><p>Colombo SriLanka</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter youe email' name='email'/>
                <label>Write Your Message Here</label>
                <textarea name='message' rows={8} placeholder='Enter your message'></textarea>
                <button className="contact-submit" type='submit'>Submit now</button>
            </form>
        </div>
    
   </div> 
  )
}

export default Contact