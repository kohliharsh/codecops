import React from "react";
import CountdownTimer from "../Timer";
import banner from "../img/banner.png";
import CountdownTimerStops from "../Timerclose";
import ShortCountdownTimerClose from "../ShortTimerClose";
import cm from "../img/cm1.png";
import sb from "../img/sb.png";
import is from "../img/is.png";
import mg from "../img/mg.png";
import srp from "../img/srp.png";
import logo from "../img/logo.png";
import mer from "../img/mer.png";
import car from "../img/car.png";
import tetris1 from "../img/tetris1.png";
import { Link } from "react-router-dom";

const ExampleProjects = () => {
  return (
    <div
      className='events'
      style={{ marginBottom: "20px", marginTop: "130px", overflow: "hidden" }}
    >
      <div className='banner'>
        <Link to='/goc'>
          <img data-aos='zoom-out' data-aos-duration='500' src={banner} />
        </Link>
      </div>
      <div
        className='container timer'
        data-aos='fade-left'
        data-aos-duration='1000'
        id='timer'
        className='longtimerevent'
      ></div>
      <h2 style={{ marginTop: "20px", color: "#36626c", marginBottom: "20px" }}>
        <a href='https://forms.gle/PkhLsDNwYSWzDjj76' id='readmore'>
          Click Here to Register!!
        </a>
      </h2>
      <div className='upcoming container'>
        <h1>Example Projects</h1>
      </div>
      <div className='container'>
        <div className='row' style={{ marginLeft: "20px" }}>
          <div className='col-md-6 col-lg-4'>
            <div className='card' style={{ width: "18rem" }}>
              <img className='card-img-top' src={cm} alt='Card image cap' />
              <div className='card-body'>
                <h5 className='card-title'>Connect Me Messenger</h5>
                <p className='card-text'>
                  A Whatsapp Like messenger including videocalls and phone calls
                </p>
                <a
                  href='https://play.google.com/store/apps/details?id=com.techno.connectme'
                  className='btn btn-primary'
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='card' style={{ width: "18rem", marginTop: "20px" }}>
              <img className='card-img-top' src={sb} alt='Card image cap' />
              <div className='card-body'>
                <h5 className='card-title'>Sky Beat</h5>
                <p className='card-text'>
                  A music player for playing your favourite music.
                </p>
                <a
                  href='https://play.google.com/store/apps/details?id=com.techno.connectme'
                  className='btn btn-primary'
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='card' style={{ width: "18rem", marginTop: "20px" }}>
              <img className='card-img-top' src={is} alt='Card image cap' />
              <div className='card-body'>
                <h5 className='card-title'>India Share</h5>
                <p className='card-text'>A sharing app made in india!</p>
                <a
                  href='https://play.google.com/store/apps/details?id=com.techno.connectme'
                  className='btn btn-primary'
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='card' style={{ width: "18rem", marginTop: "20px" }}>
              <img className='card-img-top' src={srp} alt='Card image cap' />
              <div className='card-body'>
                <h5 className='card-title'>SRP Browser</h5>
                <p className='card-text'>
                  A chrome like browser with vpn enabled.
                </p>
                <a
                  href='https://play.google.com/store/apps/details?id=com.sharmaumang001.srpbrowser'
                  className='btn btn-primary'
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='card' style={{ width: "18rem", marginTop: "20px" }}>
              <img className='card-img-top' src={mg} alt='Card image cap' />
              <div className='card-body'>
                <h5 className='card-title'>Multiplayer Gaming Zone</h5>
                <p className='card-text'>
                  A Multiplayer gaming app including chess, chain reaction and
                  more games.
                </p>
                <a
                  href='https://play.google.com/store/apps/details?id=com.mpgames.zone'
                  className='btn btn-primary'
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='card' style={{ width: "18rem", marginTop: "20px" }}>
              <img
                className='card-img-top'
                src={logo}
                alt='Card image cap'
                height='250px'
              />
              <div className='card-body'>
                <h5 className='card-title'>Code Cops Website</h5>
                <p className='card-text'>
                  A Website for you club, technical events etc.
                </p>
                <a href='https://codecops.web.app' className='btn btn-primary'>
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='card' style={{ width: "18rem", marginTop: "20px" }}>
              <img
                className='card-img-top'
                src={mer}
                alt='Card image cap'
                height='250px'
              />
              <div className='card-body'>
                <h5 className='card-title'>Meraki</h5>
                <p className='card-text'>
                  Website for techfest of your college.
                </p>
                <a
                  href='https://iiitu-meraki.github.io/'
                  className='btn btn-primary'
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='card' style={{ width: "18rem", marginTop: "20px" }}>
              <img
                className='card-img-top'
                src={car}
                alt='Card image cap'
                height='280px'
              />
              <div className='card-body'>
                <h5 className='card-title'>2D car racing game</h5>
                <p className='card-text'>A simple 2D car racing game.</p>
                <a
                  href='https://github.com/Mankumanki/2D-Car-Game-Open-GL'
                  className='btn btn-primary'
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='card' style={{ width: "18rem", marginTop: "20px" }}>
              <img
                className='card-img-top'
                src={tetris1}
                alt='Card image cap'
                height='280px'
              />
              <div className='card-body'>
                <h5 className='card-title'>Tetris Game</h5>
                <p className='card-text'>A console based tetris game.</p>
                <a
                  href='https://github.com/Mankumanki/Tetriz-game'
                  className='btn btn-primary'
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2 style={{ marginTop: "30px", color: "#36626c" }}>
          <a href='https://forms.gle/PkhLsDNwYSWzDjj76' id='readmore'>
            Click Here to Register!!
          </a>
        </h2>
      </div>
    </div>
  );
};

export default ExampleProjects;
