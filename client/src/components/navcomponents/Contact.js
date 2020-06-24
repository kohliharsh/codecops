import React from "react";
import address from "../../img/address-removebg-preview.png";
import email from "../../img/email.png";
import phone from "../../img/phone.png";
import github from "../../img/github.png";
import instagram from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
const Contact = () => {
  return (
    <div className='container'>
      <p className='contacthead'>Contact Us</p>
      <div className='contact'>
        <div>
          <p style={{ color: "white" }}>
            <span>
              <img src={address} height='30px' width='30px' alt='#'></img>
            </span>
            <span style={{ marginLeft: "20px" }}>
              Transit Campus-II, IIIT Una Vill. Chandpur, Teh. Haroli, Distt.
              Una Himachal Pradesh 177220
            </span>
          </p>
        </div>
        <div>
          <p style={{ color: "white" }}>
            <span>
              <img src={email} height='50px' width='80px' alt='#'></img>
            </span>
            <span>codecops@iiitu.ac.in</span>
          </p>
        </div>
        <div>
          <p style={{ color: "white" }}>
            <span>
              <img src={phone} height='50px' width='50px' alt='#'></img>
            </span>
            <span style={{ marginLeft: "20px" }}>+91 9518139757</span>
          </p>
        </div>
        <div>
          <p style={{ color: "white", fontSize: "30px" }}>
            Our Social and Other Handles
          </p>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <a href='https://github.com/codecopsiiitu' class='github'>
            <img
              src={github}
              style={{ borderRadius: "50%" }}
              height='50px'
              width='50px'
              alt='#'
            ></img>
          </a>
          <a href='https://www.instagram.com/codecops.iiitu/' class='github'>
            <img
              src={instagram}
              style={{ borderRadius: "50%" }}
              height='50px'
              width='50px'
              alt='#'
            ></img>
          </a>
          <a href='https://www.instagram.com/codecops.iiitu/' class='github'>
            <img
              src={linkedin}
              style={{ borderRadius: "50%" }}
              height='50px'
              width='50px'
              alt='#'
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
