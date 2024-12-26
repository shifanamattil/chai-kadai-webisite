
import React from "react";
import "./Section6.css";
// import background from "../assets/bckground.png"
import foods from "../assets/foods.jpg";
import yellowbckground from "../assets/yellowbckground.png";


const Section6 = () => {
  return (
    <div className="container">
      <div className="left">
        {/* <img src={background} alt="nn" /> */}
        <div className="text">
          <p className="tagline">NEED ANY FOOD?</p>
          <h1 className="main-heading">LOOKING FOR BEST QUALITY FOOD FOR PARTY?</h1>
          <button className="quote-button">GET A QUOTE →</button>
        </div>
      </div>
      <div className="right">
        
        <img src={yellowbckground} alt="Quality Badge" className="quality-badge" />

        <img
          src={foods}
          alt="Food Spread"
          className="food-image"
        />
      </div>
    </div>
  );
};

export default Section6;