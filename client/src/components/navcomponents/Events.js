import React from "react";
import one from "../../img/1.jpg";
import CountdownTimer from "../Timer";

const Events = () => {
  return (
    <div className='events' style={{ marginBottom: "20px" }}>
      <div className='banner'>
        <img src={one} />
      </div>
      <div id='timer'>
        <CountdownTimer />
      </div>
      <div className='workshop container'>
        <h1>
          <span>About Events</span>
        </h1>
      </div>
      <div>
        <h2 style={{ color: "#2ecc71", textAlign: "left", marginLeft: "10px" }}>
          1. Game Of Codes
        </h2>
        <p
          className='workshop-para'
          className='container'
          style={{
            color: "white",
            wordSpacing: "5px",
            fontSize: "20px",
            textAlign: "left",
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
        <h2 style={{ color: "white", textAlign: "left", marginLeft: "10px" }}>
          Schedule:
        </h2>
        <p
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
              Registration - <b>10th July’20 to 20th July'20</b>
            </li>

            <li>
              Project Submission­ - <b>21st July’20 to 27th July'20</b>
            </li>

            <li>
              Online Interaction - <b>30th July’20 & 31st July'20</b>
            </li>
            <li>
              Result Declaration - <b>5th August’20</b>
            </li>
          </ul>
        </p>
      </div>
      <div className='container grid-events'></div>
    </div>
  );
};

export default Events;
