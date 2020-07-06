import React from "react";
import one from "../img/1.jpg";
import two from "../img/2.jpg";

const Slider = () => {
  return (
    <header>
      <div id='slider'>
        <img src='https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg' />
        <img src={one} />
        <img src={two} />
        <img src='https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg' />
        <img src={two} />
      </div>
    </header>
  );
};

export default Slider;
