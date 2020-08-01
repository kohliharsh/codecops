import React from "react";
import logo from "../../img/logo.png";
import paramjeet from "../../img/paramjeet.jpg";
import abhimanyu from "../../img/abhimanyu.jpeg";
import sarvesh from "../../img/sarvesh.jpeg";
import piyush from "../../img/piyush.jpeg";
import sarthak from "../../img/sarthak.jpeg";
import harsh from "../../img/harsh.jpeg";
import avi from "../../img/avi.jpeg";
import umang from "../../img/umang.jpeg";
import minakshimaam from "../../img/minakshimaam.jpg";

const Team = () => {
  return (
    <div className='team'>
      <div class='teamhead'>
        <div className='landinghead'>
          <p className='ourteampara'>
            <img
              data-aos='fade-up-left'
              data-aos-duration='1800'
              src='https://upload.wikimedia.org/wikipedia/en/c/cf/Iiit-una-logo.png'
              alt='#'
              className='img2'
            ></img>
            <span data-aos='zoom-in-right' style={{ color: "#356D6C" }}>
              Our Team
            </span>
            <img
              data-aos='fade-up-right'
              data-aos-duration='1800'
              className='img1'
              src={logo}
              alt='#'
            ></img>
          </p>
        </div>
      </div>
      <div class='container'>
        <div class='our-team' data-aos='zoom-out'>
          <div class='picture'>
            <img class='img-fluid' src={minakshimaam} />
          </div>
          <div class='team-content'>
            <h2 class='name'>Minakshi Shastri</h2>
            <p
              style={{
                fontSize: "20px",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#2ecc71",
              }}
            >
              Faculty Mentor
            </p>
            <h4 class='title'>@IIIT Una</h4>
          </div>
          <ul class='social'>
            <li>
              {/* <a
                href='https://facebook.com/iampjeetsingh'
                class='fa fa-facebook'
                aria-hidden='true'
              ></a> */}
            </li>
            <li>
              {/* <a
                href='https://github.com/iampjeetsingh'
                class='fa fa-github'
                aria-hidden='true'
              ></a> */}
            </li>
            <li>
              {/* <a
                href='https://instagram.com/param.git'
                class='fa fa-instagram'
                aria-hidden='true'
              ></a> */}
            </li>
            <li>
              {/* <a
                href='https://www.linkedin.com/in/iampjeetsingh'
                class='fa fa-linkedin'
                aria-hidden='true'
              ></a> */}
            </li>
          </ul>
        </div>
        <div class='our-team' data-aos='zoom-out'>
          <div class='picture'>
            <img class='img-fluid' src={paramjeet} />
          </div>
          <div class='team-content'>
            <h2 class='name'>Paramjeet Singh</h2>
            <p
              style={{
                fontSize: "20px",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#2ecc71",
              }}
            >
              Student President
            </p>
            <h4 class='title'>Android Development</h4>
          </div>
          <ul class='social'>
            <li>
              <a
                href='https://facebook.com/iampjeetsingh'
                class='fa fa-facebook'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://github.com/iampjeetsingh'
                class='fa fa-github'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://instagram.com/https://www.instagram.com/psycho.programmer/'
                class='fa fa-instagram'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/iampjeetsingh'
                class='fa fa-linkedin'
                aria-hidden='true'
              ></a>
            </li>
          </ul>
        </div>
        <div class='our-team' data-aos='zoom-out'>
          <div class='picture'>
            <img class='img-fluid' src={abhimanyu} />
          </div>
          <div class='team-content'>
            <h2 class='name'>Abhimanyu Deswal</h2>
            <p
              style={{
                fontSize: "20px",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#2ecc71",
              }}
            >
              Student Manager
            </p>
            <h4 class='title'>Android Development</h4>
          </div>
          <ul class='social'>
            <li>
              <a
                href='https://facebook.com/DeswalAbhimanyu'
                class='fa fa-facebook'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://github.com/AbhimanyuDeswal'
                class='fa fa-github'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://instagram.com/_.abhiimanyu._'
                class='fa fa-instagram'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/abhimanyu-deswal'
                class='fa fa-linkedin'
                aria-hidden='true'
              ></a>
            </li>
          </ul>
        </div>
        <div class='our-team' data-aos='zoom-out'>
          <div class='picture'>
            <img class='img-fluid' src={umang} />
          </div>
          <div class='team-content'>
            <h2 class='name'>Umang Sharma</h2>
            <p
              style={{
                fontSize: "20px",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#2ecc71",
              }}
            >
              Volunteer | Event Manager
            </p>
            <h4 class='title'>Android Development | Marketing</h4>
          </div>
          <ul class='social'>
            <li>
              <a
                href='https://github.com/sharmaumang001'
                class='fa fa-github'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://instagram.com/iumang._'
                class='fa fa-instagram'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/0729/'
                class='fa fa-linkedin'
                aria-hidden='true'
              ></a>
            </li>
          </ul>
        </div>
        <div class='our-team' data-aos='zoom-out'>
          <div class='picture'>
            <img class='img-fluid' src={harsh} />
          </div>
          <div class='team-content'>
            <h2 class='name'>Harsh Kohli</h2>
            <p
              style={{
                fontSize: "20px",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#2ecc71",
              }}
            >
              Volunteer
            </p>
            <h4 class='title'>Web Development</h4>
          </div>
          <ul class='social'>
            <li>
              <a
                href='https://facebook.com/kohliharsh033'
                class='fa fa-facebook'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://github.com/kohliharsh'
                class='fa fa-github'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://instagram.com/kohli_27'
                class='fa fa-instagram'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/harsh-kohli-bb1229191/'
                class='fa fa-linkedin'
                aria-hidden='true'
              ></a>
            </li>
          </ul>
        </div>
        <div class='our-team' data-aos='zoom-out'>
          <div class='picture'>
            <img class='img-fluid' src={sarvesh} />
          </div>
          <div class='team-content'>
            <h2 class='name'>Sarvesh Singh</h2>
            <p
              style={{
                fontSize: "20px",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#2ecc71",
              }}
            >
              Volunteer
            </p>
            <h4 class='title'>Game Developement & Machine Learning </h4>
          </div>
          <ul class='social'>
            <li>
              <a
                href='https://github.com/Sarvesh326'
                class='fa fa-github'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://instagram.com/_sarvesh_2420'
                class='fa fa-instagram'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/sarvesh-singh-310a4718b'
                class='fa fa-linkedin'
                aria-hidden='true'
              ></a>
            </li>
          </ul>
        </div>

        <div class='our-team' data-aos='zoom-out'>
          <div class='picture'>
            <img class='img-fluid' src={sarthak} />
          </div>
          <div class='team-content'>
            <h2 class='name'>Sarthak Mehta</h2>
            <p
              style={{
                fontSize: "20px",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#2ecc71",
              }}
            >
              Volunteer
            </p>
            <h4 class='title'>Game Developement</h4>
          </div>
          <ul class='social'>
            <li>
              <a
                href='https://github.com/sarthakmehta9999'
                class='fa fa-github'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/sarthakmehta92'
                class='fa fa-instagram'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/sarthak-mehta-a42183191'
                class='fa fa-linkedin'
                aria-hidden='true'
              ></a>
            </li>
          </ul>
        </div>
        <div class='our-team' data-aos='zoom-out'>
          <div class='picture'>
            <img class='img-fluid' src={avi} />
          </div>
          <div class='team-content'>
            <h2 class='name'>Avi Singh</h2>
            <p
              style={{
                fontSize: "20px",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#2ecc71",
              }}
            >
              Volunteer
            </p>
            <h4 class='title'>Android Development</h4>
          </div>
          <ul class='social'>
            <li>
              <a
                href='https://github.com/DarksterTwilight'
                class='fa fa-github'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/avi.singh.3'
                class='fa fa-instagram'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/avi-singh-b56181191'
                class='fa fa-linkedin'
                aria-hidden='true'
              ></a>
            </li>
          </ul>
        </div>
        <div class='our-team' data-aos='zoom-out'>
          <div class='picture'>
            <img class='img-fluid' src={piyush} />
          </div>
          <div class='team-content'>
            <h2 class='name'>Piyush Agarwal</h2>
            <p
              style={{
                fontSize: "20px",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#2ecc71",
              }}
            >
              Volunteer
            </p>
            <h4 class='title'>Machine Learning & Competetive Coding</h4>
          </div>
          <ul class='social'>
            <li>
              <a
                href='https://www.facebook.com/profile.php?id=100040415340962'
                class='fa fa-facebook'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://github.com/piyushag21'
                class='fa fa-github'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://instagram.com/piyush__bansal21?igshid=11x561728hmba'
                class='fa fa-instagram'
                aria-hidden='true'
              ></a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/piyush-agarwal-a77182191'
                class='fa fa-linkedin'
                aria-hidden='true'
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
