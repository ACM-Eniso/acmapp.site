import './Contact.css';
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import React from "react";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d1ed74d6-78f4-438f-9e30-3cfb853a4687");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email Sent Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className="contact" >
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon}/></h3>
                <p>We d love to hear from you! Whether you have questions,
                    suggestions, or just want to say hello, feel free to send us a message.
                    Our team is here to help,
                    and we ll get back to you as soon as possible.
                    Don’t hesitate—reach out today!
                </p>
                <ul>
                    <li><img src={mail_icon}/>e-mail</li>
                    <li><img src={phone_icon}/>phone number</li>
                    <li><img src={location_icon}/>adresse</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter your name" required/>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
                    <button type="submit" className="btn dark-btn" >Submit now<img src={white_arrow}/></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
