import React from "react";

const Ideused = (props) => {
  return (
    <div className='container enviornment'>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-4'>
          <div className='envcard workevent'>
            <h5>Android Develpment</h5>
            <ul>
              <li>
                Frontend :
                <ul>
                  <li>Android Studio(Java/Kotlin/Flutter)</li>
                </ul>
              </li>
              <li>
                Backend :
                <ul>
                  <li>Nodejs / PHP / Firebase / Parse</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4'>
          <div className='envcard workevent'>
            <h5>Web Develpment</h5>
            <ul>
              <li>
                Frontend :
                <ul>
                  <li>React / Angular / Vue / Vanilla JS</li>
                </ul>
              </li>
              <li>
                Backend :
                <ul>
                  <li>Nodejs / PHP / Firebase / Parse</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4'>
          <div className='envcard workevent'>
            <h5>Game Develpment</h5>
            <ul>
              <li>Unreal Engine</li>
              <li>Unity</li>
              <li>OpenGL</li>
              <li>Console Based Games/or any other 2d enviornment</li>
            </ul>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4'>
          <div className='envcard workevent'>
            <h5>Console Based Programs</h5>
            <h6 style={{ textAlign: "center" }}>
              (Programing Language to be used)
            </h6>
            <ul>
              <li>Python</li>
              <li>C/C++</li>
              <li>Java</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4'>
          <div className='envcard workevent'>
            <h5>Machine Learning</h5>
            <ul>
              <li>Tensor Flow Model</li>
              <li>OpenCV</li>
              <li>Any other standard platform</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideused;
