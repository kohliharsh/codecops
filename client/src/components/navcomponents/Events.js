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
import instagram from "../../img/instagram.svg";
import linkedin from "../../img/linkedin.svg";
import facebook from "../../img/facebook.svg";
import gstatic from "../../img/gstatic.png";
import sky from "../../img/skygoodies.png";
import certi from "../../img/certi.png";

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
            color: "#37626C",
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
            color: "black",
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
          <h3 style={{ color: "black", marginTop: "30px" }}>
            Enviornments to be Used
          </h3>
          <div className='enviornment container'>
            <Ideused />
          </div>
        </div>
        <Link to='/goc/exampleprojects'>
          <h3>Click here to see example projects!</h3>
        </Link>
        <div className='judgement container'>
          <h2
            style={{
              color: "black",
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
        <div className='container'>
          <h1
            style={{
              textAlign: "center",
              marginTop: "35px",
              marginBottom: "30px",
            }}
          >
            Abstract Submission Guidelines
          </h1>
          <p style={{ fontSize: "20px" }}>
            <span style={{ marginRight: "10px" }}>
              <b>Last date for submission:</b>
            </span>
            3rd August 2020
          </p>
          <h3 style={{ marginTop: "10px", marginBottom: "20px" }}>
            Abstract Format
          </h3>
          <p style={{ fontSize: "20px", margin: "10px" }}>
            <ol
              style={{
                textAlign: "left",
                fontSize: "20px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <li>Name Of the Project</li>
              <li>Domain of the Project</li>
              <li>Project Goal / Purpose and need</li>
              <li>Detailed Description</li>
              <ul>
                <li>Overview</li>
                <li>
                  Environment Used (Library / Language / IDE / Frameworks / API
                  / Engine / Database)
                  <ul>
                    <li>Front-end Technology Used</li>
                    <li>Back-end Technology Used</li>
                  </ul>
                  <li>Project Flow (In form of FlowChart)</li>
                  <li>Key Features of the project</li>
                </li>
              </ul>
              <li>Phases / Timeline (If any)</li>
              <li>Team Details (names, email)</li>
              <li>Abstract PDF Naming Convention:</li>
              <ul>
                <li>Indivdual: [github_username]-[domain].pdf</li>
                <li>Team: [team-name]-[domain].pdf</li>
              </ul>
            </ol>
            <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
              General Instructions for the Event{" "}
            </h3>
            <ol style={{ textAlign: "left" }}>
              <li>
                You must commit all of your code changes onto a github repo
                under your account (Use Leader's Github account if in a team).
              </li>
              <li> All the commits must be between 1-7 August.</li>
              <li>
                If the project contains less than 15 commits, you will be
                disqualified.
              </li>
              <li>
                Your project must contain logical comments explaining the
                functionality of code.
              </li>
            </ol>
            <h3 style={{ marginBottom: "20px", marginTop: "10px" }}>
              Final Project Submission
            </h3>
            <h5 style={{ textAlign: "left" }}>
              The project submission must contain the following:
            </h5>
            <ol style={{ textAlign: "left" }}>
              <li>
                APK / Link where the project is hosted / Executable File, from
                which we can directly run the project
              </li>
              <li>Link to Github Repo where source code is hosted</li>
              <li>
                Github Repo must have a README which must contain the steps to
                build and run your project and a list of dependencies to be
                installed.
              </li>{" "}
              <li>
                Screenshots of the project.
                <li> ScreenRecorded video of the project*</li>
              </li>
            </ol>
            <p style={{ textAlign: "left", fontSize: "18px" }}>
              * - The screen recorded video must comply with the following
            </p>
            <ul style={{ textAlign: "left", fontSize: "18px" }}>
              <li>
                Anyone from the team must execute and explain the functionality
              </li>
              <li>Explaination must be in English</li>
              <li>Video duration must be less than 10 minutes</li>
            </ul>
            <div style={{ textAlign: "left", marginBottom: "20px" }}>
              <strong style={{ textAlign: "left" }}>Note</strong> : All the
              projects will be made publicly available on our website/github.
            </div>
            <div style={{ textAlign: "left" }}>
              <strong>Rules:</strong>
              <p>
                By submitting an Entry in Game Of Codes, you represent: That
                you, your team and the Entry submitted complies with these
                Official Rules; That the entirety of the Entry is your/your
                team’s original work; That the demo submitted is solely the work
                of you or your team. That you/your team have obtained any and
                all consents, approvals, or licenses required for you to submit
                your Entry, and that your Entry will not violate anyone else’s
                rights or the law. Your project must be developed entirely
                during the development period (1-7 August). You may use open
                source libraries and other freely available systems / services
                such as Google Maps, Facebook Connect, Twitter feeds etc or
                publicly available commercial libraries. The decision of the
                Organizers on all matters relating to the event, including the
                eligibility of Participants and the selection of the winners, is
                final and no correspondence will be entertained. The Organizers
                reserve the right to amend these Conditions of Participation at
                any time at its absolute discretion without any further notice,
                including but not limited to the eligibility terms and criteria,
                the selection of winners, the timing of any act to be done and
                all Participants to this event shall be bound by these
                amendments. All changes will be posted on our telegram community
                / Instagram Page / Website.
              </p>
            </div>
          </p>
        </div>
        <h2
          data-aos='fade-left'
          data-aos-duration='1500'
          style={{
            color: "black",
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
            color: "black",
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

      <h1 style={{ color: "#37636F", marginBottom: "30px" }}>PRIZES</h1>
      <div>
        <Prize />
      </div>
      <h2 style={{ color: "#37626C", marginBottom: "30px" }}>Sponsored By -</h2>
      <div className='sponsers container'>
        <div style={{ textAlign: "left", marginRight: "180px" }}>
          <h4 style={{ color: "#37626C", margin: "0" }}>Event Sponsor-</h4>
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
          <h4 style={{ color: "#37626C", margin: "0" }}>
            Web Hosting Partner-
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
      <div className='sponsers container'>
        <div style={{ textAlign: "left", marginRight: "80px" }}>
          <h4
            style={{
              color: "#37626C",
              marginBottom: "20px",
            }}
          >
            Gifitng Partner-
          </h4>
          <a href='https://www.in.skygoodies.co/'>
            <img
              data-aos='zoom-in'
              src={sky}
              height='200px'
              width='300px'
            ></img>
          </a>
        </div>
        <div style={{ textAlign: "left" }}>
          <h4
            style={{
              color: "#37626C",
              marginBottom: "20px",
            }}
          >
            Certification Partner-
          </h4>
          <a href='https://givemycertificate.com/'>
            <img
              data-aos='zoom-in'
              src={certi}
              height='200px'
              width='300px'
            ></img>
          </a>
        </div>
      </div>

      <div
        style={{
          marginBottom: "50px",
          marginTop: "30px",
        }}
      >
        <h3 style={{ color: "black" }}>
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
        <a href='https://forms.gle/7vomJ2xQ19c8bLkw8' id='readmore'>
          Click Here to Submit Project!!
        </a>
      </h4>
    </div>
  );
};

export default Events;
