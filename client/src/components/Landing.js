import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import one from "../img/1.jpg";
import CountdownTimer from "./Timer";
import ShortCountdownTimer from "./ShortTimer";
import git from "../img/git.png";
import github from "../img/github1.png";
import java from "../img/java.png";
import se from "../img/se.png";
import kotlin from "../img/kotlin.png";
import android from "../img/android.png";
import chatbot from "../img/chatbot.png";
import opencv from "../img/opencv.png";
//import se from "../img/se.png";
const Landing = () => {
  const str1 =
    "In an effort to preserve this spirit, we, the volunteers of CODE COPS, are organizing a coding event titled as, “GAME OF CODES”. In this event, we will ask students to use their coding skills to develop creative and innovative projects pertaining to their respective field of interest. These projects shall be developed in a period of one week. We have shortlisted some key areas of developments.";
  const str2 =
    "In an effort to preserve this spirit, we, the volunteers of CODE COPS";
  return (
    <section className='landing' style={{ marginBottom: "1050px" }}>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <div className='landinghead'>
            <p>
              <img
                data-aos='fade-up-right'
                data-aos-duration='1800'
                className='img1'
                src={logo}
                alt='#'
              ></img>
              <span data-aos='zoom-in-right' className='long'>
                Welcome to CodeCops
              </span>
              <span className='short'>CodeCops</span>
              <img
                data-aos='fade-up-left'
                data-aos-duration='1800'
                src='https://upload.wikimedia.org/wikipedia/en/c/cf/Iiit-una-logo.png'
                alt='#'
                className='img2'
              ></img>
            </p>
          </div>
          <div className='subhead'>
            <p data-aos='fade-left' data-aos-duration='2000'>
              Code Community of IIIT Una
            </p>
          </div>
        </div>
      </div>
      <div className='container' style={{ border: "3px white solid" }}></div>
      <br />
      <div className='upcoming container'>
        <h1 data-aos='fade-right' data-aos-duration='2800'>
          Upcoming Events
        </h1>
      </div>
      <div className='grid-container container' style={{ color: "white" }}>
        <div class='grid-1' data-aos='zoom-out'>
          <img alt='' src={one}></img>
        </div>
        <div class='grid-2' data-aos='zoom-in'>
          <span className='longevent'>{str1}</span>
          <span className='shortevent'>{str2}</span>
          <Link id='readmore' to='/events'>
            ...Readmore
          </Link>
          <span className='long'>
            <CountdownTimer />
          </span>
          <span className='short'>
            <ShortCountdownTimer />
          </span>
        </div>
      </div>
      <div className='workshop container'>
        <h1 data-aos='fade-up' data-aos-duration='1000'>
          <span>Work Shops</span>
        </h1>
      </div>

      <p
        data-aos='fade-right'
        className='workshop-para'
        className='container'
        style={{ color: "white", wordSpacing: "5px", fontSize: "20px" }}
      >
        "Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book."
      </p>
      <h4
        data-aos='fade-up'
        data-aos-duration='3000'
        className='container'
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "30px",
          marginBottom: "20px",
        }}
      >
        <u>Topics Covered So Far</u>
      </h4>
      <div className='container' style={{ textAlign: "center" }}>
        <div className='row'>
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='workevent'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png'
                height='120px'
                width='120px'
                className='topic'
              ></img>
              <p
                data-aos='fade-up'
                data-aos-duration='800'
                style={{ color: "white", textAlign: "center" }}
              >
                Linux
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='workevent'>
              <img
                src={git}
                height='120px'
                width='120px'
                className='topic'
              ></img>
              <p
                data-aos='fade-up'
                data-aos-duration='1000'
                style={{ color: "white", textAlign: "center" }}
              >
                Git
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='workevent'>
              <img
                className='topic'
                src={github}
                height='120px'
                width='120px'
              ></img>
              <p
                data-aos='fade-up'
                data-aos-duration='1200'
                style={{ color: "white", textAlign: "center" }}
              >
                Github
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='workevent'>
              <img
                className='topic'
                src={se}
                height='120px'
                width='120px'
              ></img>
              <p
                data-aos='fade-up'
                data-aos-duration='1400'
                style={{ color: "white", textAlign: "center" }}
              >
                Selenium Automation Testing
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='workevent'>
              <img
                className='topic'
                src={java}
                height='120px'
                width='120px'
              ></img>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='workevent'>
              <img
                className='topic'
                src={kotlin}
                height='120px'
                width='120px'
              ></img>
              <p
                data-aos='fade-up'
                data-aos-duration='1600'
                style={{ color: "white", textAlign: "center" }}
              >
                Kotlin
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='workevent'>
              <img
                className='topic'
                src={android}
                height='120px'
                width='220px'
              ></img>
              <p
                data-aos='fade-up'
                data-aos-duration='1800'
                style={{ color: "white", textAlign: "center" }}
              >
                Android App Development
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='workevent'>
              <img
                className='topic'
                src={chatbot}
                height='120px'
                width='120px'
              ></img>
              <p
                data-aos='fade-up'
                data-aos-duration='2000'
                style={{ color: "white", textAlign: "center" }}
              >
                Chatbot
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='workevent'>
              <img
                className='topic'
                src={opencv}
                height='140px'
                width='120px'
              ></img>
              <p style={{ color: "white", textAlign: "center" }}></p>
            </div>
          </div>
        </div>
      </div>
      <p
        data-aos='fade-up'
        data-aos-duration='2900'
        className='container'
        style={{
          color: "white",
          wordSpacing: "5px",
          fontSize: "25px",
          textAlign: "center",
        }}
      >
        For Future Topics and Discussions Stay Tuned...
      </p>
    </section>
  );
};

export default Landing;
