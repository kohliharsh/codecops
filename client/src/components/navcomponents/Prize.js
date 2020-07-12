import React from "react";
import { withRouter } from "react-router-dom";

const Prize = () => {
  return (
    <div className="container">
      <div className="row" data-aos="zoom-in">
        <div className="col-lg-4">
          <div className="prizecard workevent">
            <h2>Win Exciting Cash Prize!!</h2>
            <p>Exciting cash prizes</p>
            <p>for winners in each category!!</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="prizecard workevent">
            <h2>Win Exciting Goodies from Coding Ninjas!!</h2>
            <ul style={{ color: "white", marginTop: "20px" }}>
              <li>Coding Ninjas Laptop bags!</li>
              <li>Coding ninjas Branded t-shirts!</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="prizecard workevent">
            <h2>Discount Coupons!!</h2>
            <p style={{ fontSize: "18px", marginTop: "20px" }}>
              Special Discount coupons worth ₹ 2000 on the premium couses of
              CODING NINJAS to all the participants!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
