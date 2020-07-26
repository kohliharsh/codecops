import React from "react";
import CountdownTimer from "../Timer";
import banner from "../img/banner.png";
import CountdownTimerStops from "../Timerclose";
import ShortCountdownTimerClose from "../ShortTimerClose";

const ExampleProjects = () => {
  return (
    <div
      className='events'
      style={{ marginBottom: "20px", marginTop: "130px", overflow: "hidden" }}
    >
      <div className='banner'>
        <img data-aos='zoom-out' data-aos-duration='500' src={banner} />
      </div>
      <div
        className='container timer'
        data-aos='fade-left'
        data-aos-duration='1000'
        id='timer'
        className='longtimerevent'
      ></div>
      <div className='upcoming container'>
        <h1 data-aos='fade-right' data-aos-duration='2800'>
          Example Projects
        </h1>
      </div>
    </div>
  );
};

export default ExampleProjects;
