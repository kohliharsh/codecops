import React from "react";

const Judgebox = () => {
  return (
    <div className="criteriabox">
      <div className="row workevent" style={{ marginTop: "20px" }}>
        <div className="col-lg-6">
          <ul>
            <li>
              <h4>Android Development</h4>
              <ul className="judgeli">
                <li>UI & UX: 40 points. Quality of design & visual impact</li>
                <li>
                  Innovation: 25 points. New or unique technological application
                </li>
                <li>
                  Content: 20 points. Relevance to needs of target audience
                </li>
                <li>Longevity: 15 points.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul>
            <li>
              <h4>Web Development</h4>
              <ul className="judgeli">
                <li>UI & UX: 30 points. Quality of design & visual impact</li>
                <li>
                  Innovation: 25 points. New or unique technological application
                </li>
                <li>
                  Content: 20 points. Relevance to needs of target audience
                </li>
                <li>Cross-Browser Compatibility: 15 points</li>
                <li>Longevity: 10 points.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul>
            <li>
              <h4>Game Development</h4>
              <ul className="judgeli">
                <li>Programming: 25 points</li>
                <li>Gameplay: 25 points</li>
                <li>Graphics: 30 points</li>
                <li>Sound: 20 points</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul>
            <li>
              <h4>Console Based Applications</h4>
              <ul className="judgeli">
                <li>Innovation: 30 points</li>
                <li>UX: 20 points</li>
                <li>Time/Space Complexity: 20 points</li>
                <li>Problem Solving: 15 points</li>
                <li>Exception Handling: 15 points</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul>
            <li>
              <h4>Machine Learning</h4>
              <ul className="judgeli">
                <li>Innovation: 30 points</li>
                <li>Need/Usefulness: 25 points</li>
                <li>Accuracy: 15 points</li>
                <li>Precision: 15 points</li>
                <li>Recall: 15 points</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Judgebox;
