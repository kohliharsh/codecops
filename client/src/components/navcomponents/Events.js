import React from "react";
import one from "../../img/1.jpg";
import CountdownTimer from "../Timer";
import { Link } from "react-router-dom";
import teaser from "../../img/teaser.mp4";
import "../../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import banner from "../../img/banner.png";
import codingninja from "../../img/codingninja.svg";
import ReactPlayer from "react-player";

const Events = () => {
  return (
    <div
      className='events'
      style={{ marginBottom: "20px", marginTop: "130px" }}
    >
      <div className='banner'>
        <img data-aos='zoom-out' data-aos-duration='500' src={banner} />
      </div>
      <div data-aos='fade-left' data-aos-duration='1000' id='timer'>
        <CountdownTimer />
      </div>
      <div className='workshop container'>
        <h1 data-aos-duration='2000'>
          <span>About Event</span>
        </h1>
      </div>
      <div>
        <h2
          data-aos='fade-left'
          data-aos-duration='1300'
          style={{ color: "#2ecc71", textAlign: "left", marginLeft: "10px" }}
        >
          1. Game Of Codes
        </h2>
        {/* <div
          className='video'
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        ></div> */}
        <p
          data-aos='zoom-in-down'
          data-aos-duration='2000'
          className='workshop-para'
          className='container'
          style={{
            color: "white",
            wordSpacing: "5px",
            fontSize: "20px",
            textAlign: "left",
            width: "fit-content",
          }}
        >
          In an effort to preserve this spirit, we, the volunteers of CODE COPS,
          are organizing a coding event titled as, “GAME OF CODES”. In this
          event, we will ask students to use their coding skills to develop
          creative and innovative projects pertaining to their respective field
          of interest. These projects shall be developed in a period of one
          week. We have shortlisted some key areas of developments.
          <ul>
            <li>Android Development</li>
            <li>Web Development</li>
            <li>Game Development</li>
            <li>Console-Based Applications</li>
            <li>Machine Learning Algorithims</li>
          </ul>
          Contestants are allowed to choose their field of interest. After the
          completion of the time period, the completed projects would be
          submitted and assessed on the basis of certain criteria pertaining to
          the respective developments. Upon evaluation, a winner and a runner up
          will be chosen per field of interest. They will further be examined
          and cross questioned by our judges for the final evaluation.
        </p>
        <h2
          data-aos='fade-left'
          data-aos-duration='1500'
          style={{ color: "white", textAlign: "left", marginLeft: "10px" }}
        >
          Schedule:
        </h2>
        <p
          data-aos='zoom-in-down'
          data-aos-duration='2000'
          className='container'
          style={{
            color: "white",
            wordSpacing: "5px",
            fontSize: "20px",
            textAlign: "left",
          }}
        >
          <ul>
            <li>
              Registration - <b>10th July’20 to 25th July'20</b>
            </li>

            <li>
              Project Submission­ - <b>26th July’20 to 1st August’20</b>
            </li>

            <li>
              Source Code Submission­ - <b>1st August’20</b>
            </li>
            <li>
              Bug & Feature Testing - <b>2nd August’20 - 5th August’20</b>
            </li>
            <li>
              Online Interaction - <b>6th August’20 - 10th August’20</b>
            </li>

            <li>
              Result Declaration - <b>14th August’20</b>
            </li>
          </ul>
        </p>
      </div>
      <div className='sponsers container' style={{ textAlign: "left" }}>
        <h4 style={{ color: "#2ecc71", margin: "0" }}>Sponsored By-</h4>
        <a href='https://www.codingninjas.com/'>
          <img
            data-aos='zoom-in'
            src={codingninja}
            height='200px'
            width='300px'
          ></img>
        </a>
      </div>
      <h4>
        <a href='https://forms.gle/PkhLsDNwYSWzDjj76' id='readmore'>
          Click Here to Register!!
        </a>
      </h4>
    </div>
  );
};

export default Events;
