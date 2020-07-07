import React from "react";

const Team = () => {
  return (
    <div className='team'>
      <h1 style={{ color: "white" }}>Start from here!</h1>

    <div className ='begin'>
        <div className="box">
            <div className="bg">
              <div className='dp'>
                 <img src="dp.png" alt=""/>
              </div>
            </div>
            <div class="name" >
                <h2 data-aos="fade-left" data-aos-duration ="1000">Vanshika Pandey</h2>
                <h5 data-aos="fade-left" data-aos-duration ="3000"><hr class="mlline"></hr>ML Enthusiast<hr class="mlline"></hr></h5>
            </div>
           
            <div className="skills">
                <ul>
                    <li className="html">HTML 70%</li>
                    <li clclassNameass="css">CSS  80%</li>
                    <li className="javascript">JAVASCRIPT 90%</li>
                    <li className="react">REACT 60%</li>
                </ul>
            </div>
            <div className="move">
            <div className="bluebox">
                    <div className="icons">
                        <div class="i" >
                            <a href="#" class="fa fa-linkedin-square"></a>
                        </div>
                        <div className="i" >
                            <a href="#" class="fa fa-instagram"></a>
                        </div>
                        <div className="i" >
                            <a href="#" class="fa fa-facebook-official"></a>
                        </div>
                        <div className="i" >
                            <a href="#" class="fa fa-github"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    

    </div>
  );
};

export default Team;
