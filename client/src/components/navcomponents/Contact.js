import React from "react";
import address from "../../img/address-removebg-preview.png";
import email from "../../img/email.png";
import phone from "../../img/phone.png";
import github from "../../img/github.png";
import instagram from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
import facebook from "../../img/facebook.png";
const Contact = () => {
  return (
    <div className='container'>
      <p data-aos='zoom-in-right' className='contacthead'>
        Contact Us
      </p>
      <div className='contact'>
        <div>
          <p
            data-aos='zoom-in-right'
            data-aos-duration='1800'
            style={{ color: "white" }}
          >
            <span>
              <img src={address} height='30px' width='30px'></img>
            </span>
            <span data-aos='fade-up' style={{ marginLeft: "20px" }}>
              Transit Campus-II, IIIT Una Vill. Chandpur, Teh. Haroli, Distt.
              Una Himachal Pradesh 177220
            </span>
          </p>
        </div>
        <div>
          <p
            data-aos='zoom-in-down'
            data-aos-duration='2700'
            style={{ color: "white" }}
          >
            <span>
              <img src={email} height='50px' width='80px'></img>
            </span>
            <span data-aos='zoom-in-down'>codecops@iiitu.ac.in</span>
          </p>
        </div>
        <div>
          <p
            data-aos='zoom-in-down'
            data-aos-duration='2700'
            style={{ color: "white" }}
          >
            <span>
              <img src={phone} height='50px' width='50px'></img>
            </span>
            <span data-aos='zoom-in-down' style={{ marginLeft: "20px" }}>
              +91 9518139757, +91 9315700798
            </span>
          </p>
        </div>
        <div>
          <p data-aos='zoom-in-up' style={{ color: "white", fontSize: "30px" }}>
            Our Social and Other Handles
          </p>
        </div>
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <a href='https://github.com/codecopsiiitu' class='github'>
            <img
              data-aos='flip-right'
              src={github}
              style={{ borderRadius: "50%", padding: "5px" }}
              height='50px'
              width='50px'
            ></img>
          </a>
          <a href='https://www.instagram.com/codecops.iiitu/' class='github'>
            <img
              data-aos='flip-right'
              src={instagram}
              style={{ borderRadius: "50%", padding: "5px" }}
              height='50px'
              width='50px'
            ></img>
          </a>
          <a
            href='https://www.linkedin.com/company/codecopsiiitu/'
            class='github'
          >
            <img
              data-aos='flip-right'
              src={linkedin}
              style={{ borderRadius: "50%", padding: "5px" }}
              height='50px'
              width='50px'
            ></img>
          </a>
          <a href='https://www.facebook.com/codecops.iiitu/' class='github'>
            <img
              data-aos='flip-right'
              src={facebook}
              style={{ borderRadius: "50%", padding: "5px" }}
              height='50px'
              width='50px'
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
