import React from "react";
import logo from "../img/logo.png";
const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <div className='landinghead'>
            <p>
              <img src={logo} height='150px' width='150px' alt='#'></img>
              Welcome to CodeCops
              <img
                src='https://upload.wikimedia.org/wikipedia/en/c/cf/Iiit-una-logo.png'
                height='150px'
                width='150px'
                alt='#'
              ></img>
            </p>
          </div>
          <div className='subhead'>
            <p>Code Community of IIIT Una</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
