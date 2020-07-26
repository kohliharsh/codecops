import React from "react";
import { withRouter } from "react-router-dom";

const Prize = () => {
  return (
    <div className='container'>
      <h3
        style={{
          color: "black",
          marginBottom: "30px",
          textAlign: "left",
          marginLeft: "10px",
        }}
      >
        For Winners:
      </h3>
      <div className='row' data-aos='zoom-in'>
        <div className='col-lg-4'>
          <div className='prizecard workevent'>
            <h2>Win Exciting Cash Prize!!</h2>
            <p>
              Different cash prizes for team winners as well as for indvidual
              winners in each category.
            </p>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='prizecard workevent'>
            <h2>Win Exciting Goodies from Coding Ninjas!!</h2>
            <ul
              style={{ color: "black", marginTop: "20px", marginBottom: "0px" }}
            >
              <li>Coding Ninjas Laptop bags!</li>
              <li>Coding ninjas Branded t-shirts!</li>
            </ul>
            <p style={{ fontSize: "20px", marginTop: "0px" }}>
              And Many More!!
            </p>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='prizecard workevent'>
            <h2>Web Hosting Membership!</h2>
            <p>
              Pro membership for Web Hosting from Gstaic to the top 10 web
              development projects.
            </p>
          </div>
        </div>
      </div>
      <h3
        style={{
          color: "black",
          marginBottom: "30px",
          textAlign: "left",
          marginLeft: "10px",
        }}
      >
        For Every Participant:
      </h3>
      <div className='row' data-aos='zoom-in'>
        <div className='col-lg-4'>
          <div className='prizecard workevent'>
            <h2>Get Participation Certificate!</h2>
            <p style={{ fontSize: "18px", marginTop: "20px" }}>
              <p>Participation Certificate</p>
              <p>for every participant.</p>
            </p>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='prizecard workevent'>
            <h2>Discount Coupons!</h2>
            <p style={{ fontSize: "18px", marginTop: "20px" }}>
              <p>
                Special Discount coupons worth ₹ 2000 on the premium courses of
                CODING NINJAS to all the participants!
              </p>
            </p>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='prizecard workevent'>
            <h2>Appreciation</h2>
            <ul
              style={{ color: "black", marginTop: "20px", marginBottom: "0px" }}
            >
              <li>Web Hosting Service!</li>
              <li>Goodies and some appreciation prizes</li>
            </ul>
            <p style={{ fontSize: "15px" }}>
              *Only for selected participants as per the clubs policies.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
