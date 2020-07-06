import React from "react";
import logo from "../img/logo.png";
const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <div className='landinghead'>
            <p>
              <img data-aos="fade-up-right" src={logo} height='150px' width='150px'></img>
              Welcome to CodeCops
              <img data-aos="fade-up-left"
                src='https://upload.wikimedia.org/wikipedia/en/c/cf/Iiit-una-logo.png'
                height='150px'
                width='150px'
              ></img>
            </p>
          </div>
          <div className='subhead'>
            <p data-aos ="fade-left">Code Community of IIIT Una</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
