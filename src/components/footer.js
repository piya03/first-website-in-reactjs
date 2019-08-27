import React from 'react';
import './footer.css'
import Logo from "../images/logo.jpg"

function Footer() {
  return (
    <div className='footer-container'>
    <div className='first-section'>
    <img src={Logo}></img>
    <div className='mobile-no-container'>
    <i className="fa fa-phone"></i>
    <p>9865678901</p>
    </div>

    <div className="mail-container">
    <i className="fa fa-envelope"></i>
    <p>mail@gmail.com</p>
    </div>

    <div className="website-url">
    <i className="fa fa-globe"></i>
    <p>www.shoes.com</p>
    </div>
    </div>

    <div className='second-section'>
        
        <ul>
            <li>Company</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Join us</li>
            <li>become our contact Partner</li>
        </ul>

    </div>
    <div className='third-section'>
        <ul>
            <li>Links</li>
            <li>Course</li>
            <li>Blogs & news</li>
        </ul>
    </div>
    <div className='forth-section'>
        <ul>
            <li>Others</li>
            <li>Terms and Conditions</li>
            <li>Startup</li>
        </ul>
    </div>
    <div className='fifth-section'>
        <li className="contact-us">Contact with us</li>
        <ul className='social-media-icons'>
            <li><i className="fa fa-facebook-f"></i></li>
            <li><i className="fa fa-twitter"></i></li>
            <li><i className="fa fa-pinterest-p"></i></li>
            <li><i className="fa fa-youtube"></i></li>
            <li><i className="fa fa-linkedin"></i></li>
        </ul>
    </div>

    </div>
  );
}

export default Footer;
