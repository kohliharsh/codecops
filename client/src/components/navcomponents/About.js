import React from "react";
import logo from "./logo.png";
import web from "../../img/webd.png";

const About = () => {
  return (
    <div>
      <div className='abouthead'>
        <p data-aos='fade-left' data-aos-duration="800">About Us</p>
        <p data-aos='zoom-in-down' data-aos-duration="1900" className='container'>
          Code Cops is one of the biggest clubs of IIIT Una in Transit
          Campus-II. We conduct events and workshops, hold lectures and talks,
          and even host coding competitions and hackathons. We organize
          activities related to Development (Web Development, Open Source,
          Game/App Development), programming contests, hackathons, etc..
        </p>
        <p data-aos='fade-left'data-aos-duration="2600">Domains We Offer</p>
      </div>

      <div className='container' id='domains'>
        <div className='row'>
          <div class='col-md-6 col-lg-4'>
            <div data-aos='zoom-out-left' data-aos-duration="1000" className='feature-block'>
              <img
                src='https://cdn.iconscout.com/icon/premium/png-256-thumb/machine-learning-13-902561.png'
                className='img-fluid'
                height='100px'
                width='100px'
              ></img>
              <h4>Machine Learning </h4>
              <p>
                I am telling you, the world’s first trillionaires are going to
                come from somebody who masters AI and all its derivatives,and
                applies it in ways we never thought of.”
              </p>
            </div>
          </div>
          <div class='col-md-6 col-lg-4'>
            <div data-aos='zoom-out-left' data-aos-duration="1800"className='feature-block'>
              <img
                src='https://www.virtualintelligenceonline.com/img/app-development-icon-png-1.png'
                className='img-fluid'
                height='200px'
                width='100px'
              ></img>
              <h4>Mobile App Development</h4>
              <p>
                I am telling you, the world’s first trillionaires are going to
                come from somebody who masters AI and all its derivatives,and
                applies it in ways we never thought of.”
              </p>
            </div>
          </div>
          <div class='col-md-6 col-lg-4'>
            <div data-aos='zoom-out-left' data-aos-duration="2500" className='feature-block'>
              <img
                src='https://www.pinclipart.com/picdir/big/54-544830_svg-library-stock-clipart-game-controller-game-developer.png'
                className='img-fluid'
                height='100px'
                width='100px'
              ></img>
              <h4>Game Development</h4>
              <p>
                I am telling you, the world’s first trillionaires are going to
                come from somebody who masters AI and all its derivatives,and
                applies it in ways we never thought of.”
              </p>
            </div>
          </div>
          <div class='col-md-6 col-lg-4'>
            <div data-aos='zoom-out-left' data-aos-duration="2900"className='feature-block'>
              <img
                src={web}
                className='img-fluid'
                height='120px'
                width='100px'
              ></img>
              <h4>Web Development</h4>
              <p>
                I am telling you, the world’s first trillionaires are going to
                come from somebody who masters AI and all its derivatives,and
                applies it in ways we never thought of.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
