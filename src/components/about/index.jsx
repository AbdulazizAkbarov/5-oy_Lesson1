import React from "react";
import "./styles.css";
import rasm from "../../assets/section.png";
import rasm1 from "../../assets/section2.png";
import text1 from "../../assets/text1.png";
import text2 from "../../assets/text2.png";
import text3 from "../../assets/text3.png";
import text4 from "../../assets/text4.png";
import text5 from "../../assets/text5.png";
import section1 from "../../assets/section3.1.png";
import section2 from "../../assets/section3.2.png";
import section3 from "../../assets/section3.3.png";
import section4 from "../../assets/section3.4.png";
import sec4 from "../../assets/sec4rasm.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import arrow from "../../assets/arrow.png";
import oval from "../../assets/aval.png";
import sec7 from "../../assets/sec7.png";
import photo1 from "../../assets/photo1.png";




function About() {
  return (
    <div className="container">
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
        <img src={rasm1} alt="" />
      </div>

      <div className="texts">
        <h2>We partner with the best</h2>
        <div className="img_wrapper">
          <img src={text1} alt="" />
          <img src={text2} alt="" />
          <img src={text3} alt="" />
          <img src={text4} alt="" />
          <img src={text5} alt="" />
        </div>
      </div>

      <div className="section3">
        <h2>HR Production of the Highest Quality</h2>

        <div className="cardWrapper">
          <div className="card1">
            <img src={section1} alt="" />
            <p>Educates & Informs</p>
            <p>Employee Expectations</p>
          </div>

          <div className="card1">
            <img src={section2} alt="" />
            <p>Protects Your Business</p>
            <p>Just in Case</p>
          </div>

          <div className="card1">
            <img src={section3} alt="" />
            <p>Manages & Stores</p>
            <p>Important Documents</p>
          </div>

          <div className="card1">
            <img src={section4} alt="" />
            <p>Create a Healthy</p>
            <p>Work Environment</p>
          </div>
        </div>
      </div>

      <div className="section4">
        <div className="sec4_text">
          <h2>Employees come in all shapes and sizes. Find the right f1t.</h2>
          <p>
            Focus on casting and screening. Let Clerksy handle contracts,
            resolve any on set-conflicts and make sure you are compliant with
            work and safety boards.
          </p>
        </div>

        <img className="rasm" src={sec4} alt="" />
      </div>

      <div className="section5">
        <div className="texxt">
          <h2>How the scenes f1t together</h2>
          <p>
            Employee Training & Development, Diversity & Inclusion Programs, and
            Conflict Resolution.
          </p>
        </div>

        <img src={rasm} alt="" />
      </div>

      <div className="section6">
        <div className="sec6">
          <h2>Consider everyone's best interest</h2>
          <p>HR is for everyone. Clerksy can help you.</p>
        </div>

        <div className="cards">
          <div className="cart">
            <img src={icon1} alt="" />
            <h2>Protect Your Company</h2>
            <ul>
              <li>Compliance Audits & Training</li>
              <li>Employee Data Storage</li>
              <li>Policy Drafting</li>
            </ul>
          </div>

          <div className="cart">
            <img src={icon2} alt="" />
            <h2>Protect Your Company</h2>
            <ul>
              <li>Compliance Audits & Training</li>
              <li>Employee Data Storage</li>
              <li>Policy Drafting</li>
              <li>Employee Performance</li>
            </ul>
          </div>

          <div className="cart">
            <img src={icon3} alt="" />
            <h2>Protect Your Company</h2>
            <ul>
              <li>Compliance Audits & Training</li>
              <li>Employee Data Storage</li>
              <li>Policy Drafting</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="info-content">
        <h2 className="info-title title">It's easy as 1, 2, 3</h2>
        <p className="info-desc">
          Clerksy can help use your unique business needs. Here's how:
        </p>
        <div className="info-cards">
          <div className="info-card">
            <p className="info-card_title">
              Fill out a form and tell us what you're looking for:
            </p>
            <span className="info-p title">5 minutes</span>
          </div>
          <img src={arrow} alt="" className="arrow arrow1" />
          <div className="info-card">
            <p className="info-card_title">
              Time it will take a Clerksy rep to follow up:
            </p>
            <span className="info-p title">24 hours</span>
          </div>
          <img src={arrow} alt="" className="arrow arrow2" />
          <div className="info-card info-card3">
            <p className="info-card_title">
              Take advantage of our monthly plans starting at:
            </p>
            <span className="info-p title">$969 USD</span>
          </div>
        </div>
        <button className="info-btn hero-btn">Book Free Discovery Call</button>
        <div className="pos-div">
          <img src={oval} alt="" className="position" />
        </div>
      </div>

      <div className="section7">
        <div className="sec7_text">
          <h2>Not just another HR resource.</h2>
          <p>Simple. Entertaining. Informative.</p>
          <button>Download E-book</button>
        </div>

        <img src={sec7} alt="" />
      </div>

      <div className="section8">
        <img className="position1" src={photo1} alt="" />

        <div className="section7_text">
          
         
          <button>Book a Free Discovery Call</button>

        </div>


      </div>

      <div className="section9">

        <div className="sec9_text">
          <h2>Stay up to date!</h2>
          <p>Sign up for the latest Clerksy news.</p>
        </div>

        <div className="inputt">

          <div className="div1">
            <button>Sing Up</button>

          </div>

          <p>By submitting your email you agree to receive updates about Clerksy. You can unsubscribe at any time. View our full <span>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  );
}

export default About;
