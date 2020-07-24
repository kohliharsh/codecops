import React from "react";
import one from "../../img/1.jpg";
import CountdownTimer from "../Timer";
import { Link } from "react-router-dom";
import teaser from "../../img/teaser.mp4";
import "../../../node_modules/video-react/dist/video-react.css";
import banner from "../../img/banner.png";
import codingninja from "../../img/codingninja.svg";
import ReactPlayer from "react-player";
import Ideused from "../navcomponents/Ideused";
import Judgebox from "../navcomponents/Judgebox";
import Prize from "../navcomponents/Prize";
import ShortCountdownTimerClose from "../../ShortTimerClose";
import CountdownTimerStops from "../../Timerclose";
import github from "../../img/github.png";
import instagram from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
import facebook from "../../img/facebook.png";
import gstatic from "../../img/gstatic.png";

const Events = () => {
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
      >
        <div className='timer'>
          <CountdownTimer />
        </div>
        <div className='timerstops'>
          <CountdownTimerStops />
        </div>
      </div>
      <div
        className='container timer'
        data-aos='fade-left'
        data-aos-duration='1000'
        className='shorttimerevent'
      >
        <CountdownTimer />
        <div>
          <ShortCountdownTimerClose />
        </div>
      </div>
      <div className='workshop container'>
        <h1 data-aos-duration='2000' style={{ marginTop: "20px" }}>
          <span>About Event</span>
        </h1>
      </div>
      <div>
        <h2
          data-aos='fade-left'
          data-aos-duration='1300'
          style={{
            color: "#2ecc71",
            textAlign: "left",
            marginLeft: "10px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          1. Game Of Codes
        </h2>
        {/* <div className="conatiner video">
          <ReactPlayer height={272} width={480} url={teaser} controls={true} />
          <ReactPlayer height={272} width={480} url={final} controls={true} />
        </div> */}
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
          }}
        >
          During this pandemic, students have utilised their spare time
          improving their competitive and functional coding skills. We at CODE
          COPS appreciate this dedication of students and want to encourage
          furthermore students to sharpen and develop their skills. In an effort
          to preserve this spirit, we, the volunteers of CODE COPS, are
          organizing a coding event titled as, “GAME OF CODES”. In this event,
          we will ask students to use their coding skills to develop creative
          and innovative projects pertaining to their respective field of
          interest. These projects shall be developed in a period of one week.
          We have shortlisted some key areas of developments.
          <ul style={{ marginTop: "15px" }} className='schedule'>
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
        <div>
          <h3 style={{ color: "white", marginTop: "30px" }}>
            Enviornments to be Used
          </h3>
          <div className='enviornment container'>
            <Ideused />
          </div>
        </div>
        <div className='judgement container'>
          <h2
            style={{
              color: "white",
              textAlign: "center",
              marginTop: "15px",
              marginBottom: "20px",
            }}
          >
            JUDGEMENT PROCESS
          </h2>
          <h4 style={{ textAlign: "left", marginBottom: "30px" }}>
            There are two phases for Judgement:
          </h4>
          <ul>
            <li>
              <h5>
                <u style={{ marginBottom: "30px" }}>
                  Feature/bug Testing Phase:{" "}
                </u>
                <p style={{ marginBottom: "30px " }}>
                  In this phase the participants will submit there projects and
                  those projects will be tested by the experts for checking out
                  different features of that project as well as to check out if
                  there are any bugs and how optiized the code is.
                </p>
              </h5>
              <li>
                <h5>
                  <u>Online Interaction Phase:</u>
                  <p>
                    In this phase the participant will be connected to Judging
                    Panel through a google meeting, where he/she will be asked
                    questions related to the project and will be asked to alter
                    few features of the project as per the choice of Judging
                    Panel. The participant will have to make the changes on the
                    spot, he/she will have to present his/her screen while doing
                    so.
                  </p>
                </h5>
              </li>
            </li>
          </ul>
        </div>
        <div className='criteria container'>
          <h2
            style={{
              textAlign: "center",
              marginTop: "35px",
              marginBottom: "30px",
            }}
          >
            JUDGING CRITERIA
          </h2>
          <p style={{ marginBottom: "30px" }}>
            We have laid down 4-5 pillars per development on the basis of which
            the contestants will be ranked. Each pillar consists of specified
            points which adds up to 100 points. They are listed below: -
          </p>
          <Judgebox />
        </div>
        <h2
          data-aos='fade-left'
          data-aos-duration='1500'
          style={{
            color: "white",
            textAlign: "left",
            marginLeft: "10px",
            marginTop: "40px",
            marginBottom: "30px",
          }}
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
          <ul style={{ marginBottom: "30px" }} className='schedule'>
            <li>
              Registration - <b>10th July’20 to 31st July'20</b>
            </li>

            <li>
              Project Submission­ - <b>1st August’20 to 7th August’20</b>
            </li>

            <li>
              Source Code Submission­ - <b>8th August’20</b>
            </li>
            <li>
              Bug & Feature Testing - <b>9th August’20 - 13th August’20</b>
            </li>
            <li>
              Online Interaction - <b>14th August’20 - 20th August’20</b>
            </li>

            <li>
              Result Declaration - <b>25th August’20</b>
            </li>
          </ul>
        </p>
      </div>
      <div>
        <Prize />
      </div>
      <div className='sponsers container'>
        <div style={{ textAlign: "left" }}>
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
        <div style={{ textAlign: "left" }}>
          <h4 style={{ color: "#2ecc71", margin: "0" }}>
            Web Hosting Sponser-
          </h4>
          <a href='http://www.gstatic.tech/'>
            <img
              data-aos='zoom-in'
              src={gstatic}
              height='200px'
              width='300px'
            ></img>
          </a>
        </div>
      </div>
      <div
        style={{
          marginBottom: "50px",
        }}
      >
        <h3 style={{ color: "white" }}>
          For more information stay connected to our social handles!
        </h3>
        <a href='https://www.instagram.com/codecops.iiitu/' class='github'>
          <img
            data-aos='flip-right'
            src={instagram}
            style={{ borderRadius: "50%", padding: "5px" }}
            height='70px'
            width='70px'
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
            height='70px'
            width='70px'
          ></img>
        </a>
        <a href='https://www.facebook.com/codecops.iiitu/' class='github'>
          <img
            data-aos='flip-right'
            src={facebook}
            style={{ borderRadius: "50%", padding: "5px" }}
            height='70px'
            width='70px'
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
