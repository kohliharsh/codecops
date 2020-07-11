import React from "react";
import logo from "./logo.png";
import web from "../../img/webd.png";

const About = () => {
  return (
    <div>
      <div className='abouthead'>
        <p data-aos='fade-left' data-aos-duration='800'>
          About Us
        </p>
        <p
          data-aos='zoom-in-down'
          data-aos-duration='1900'
          className='container'
        >
          Code Cops is one of the clubs of IIIT Una in Transit Campus-II. We
          conduct events and workshops, hold lectures and talks, and even host
          coding competitions and hackathons. We organize activities related to
          Development (Web Development, Open Source, Game/App Development,
          Machine Learning), programming contests, hackathons, etc..
        </p>
        <p data-aos='fade-left' data-aos-duration='2600'>
          Domains We Offer
        </p>
      </div>

      <div className='container' id='domains'>
        <div className='row'>
          <div class='col-md-6 col-lg-4'>
            <div
              data-aos='zoom-out-left'
              data-aos-duration='1000'
              className='feature-block'
              style={{ height: "450px" }}
            >
              <img
                src='https://cdn.iconscout.com/icon/premium/png-256-thumb/machine-learning-13-902561.png'
                className='img-fluid'
                height='100px'
                width='100px'
              ></img>
              <h4>Machine Learning </h4>
              <p>
                “Artificial intelligence will reach human levels by around 2029.
                Follow that out further to, say, 2045, we will have multiplied
                the intelligence, the human biological machine intelligence of
                our civilization a billion-fold.” ~Ray Kurzweil.
              </p>
            </div>
          </div>
          <div class='col-md-6 col-lg-4'>
            <div
              data-aos='zoom-out-left'
              data-aos-duration='1800'
              className='feature-block'
            >
              <img
                src='https://www.virtualintelligenceonline.com/img/app-development-icon-png-1.png'
                className='img-fluid'
                height='200px'
                width='100px'
              ></img>
              <h4>Mobile App Development</h4>
              <p>
                “The rich and interactive experiences we have come to expect on
                mobile apps have created new standards and expectations for all
                digital media including the web. The result is websites are
                evolving to become more app-like in their rich functionality.”
                ~Raj Aggarwal, CEO of Localytics
              </p>
            </div>
          </div>
          <div class='col-md-6 col-lg-4'>
            <div
              data-aos='zoom-out-left'
              data-aos-duration='2500'
              className='feature-block'
              style={{ height: "450px" }}
            >
              <img
                src='https://www.pinclipart.com/picdir/big/54-544830_svg-library-stock-clipart-game-controller-game-developer.png'
                className='img-fluid'
                height='100px'
                width='100px'
              ></img>
              <h4>Game Development</h4>
              <p>
                "I get to do something that millions of people across the world
                are going to see and enjoy and have fun with. People I'm never
                going to meet, people I'm never going to see, but when they
                finish their job tonight, they're going to be playing one of my
                games and that makes me feel good." ~Pat Lawlor
              </p>
            </div>
          </div>
          <div class='col-md-6 col-lg-4'>
            <div
              data-aos='zoom-out-left'
              data-aos-duration='2900'
              className='feature-block'
            >
              <img
                src={web}
                className='img-fluid'
                height='120px'
                width='100px'
              ></img>
              <h4>Web Development</h4>
              <p>
                “Your website is the center of your digital eco-system, like a
                brick and mortar location, the experience matters once a
                customer enters, just as much as the perception they have of you
                before they walk through the door.” ~Leland Dieno
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
