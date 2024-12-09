import React from "react";
import "./styles.css";
import rasm from "../../assets/section.png";
import rasm1 from "../../assets/section2.png";

function About() {
  return (
    <div>
      <div className="section1">
        <img src={rasm} alt="" />

        <div className="text">
          <h2>Put the human back in HR.</h2>
          <p>
            Your employees are the real stars. Show the love and help them
            perform!
          </p>
        </div>
      </div>

      <div className="section2">
        <div className="text">
          <h2>Put the human back in HR.</h2>
          <p>
            Your employees are the real stars. Show the love and help them
            perform!
          </p>
        </div>
        <img src={rasm1 } alt="" />
      </div>
    </div>
  );
}

export default About;
