import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b93c5049-0b72-4bb5-ab02-4d46b84ef121");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p> Feel free to reach out to us through our contact information below.
            Your feedback, questions and suggestions are highly valued. Join our community!</p>
            <ul>
                <li><img src={mail_icon} alt=""/>Contact 722goatedprod@gmail.com</li>
                <li><img src={phone_icon} alt=""/>+27 12-345-6789</li>
                <li><img src={location_icon} alt=""/>722 Shamz Street, Helheim <br /> GA 30980, United States</li>
            </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' required/>
            <label>Leave a message</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
