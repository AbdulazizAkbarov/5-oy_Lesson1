import React from 'react'
import "./style.css"
import logo from "../../assets/logo.png"
import hero from "../../assets/hero.png"


function Hero() {
  return (
    <div className='container'>

        <nav>
            <img src={logo} alt="" />

            <ul>
                <li><a href="">Log In</a></li>
                <li><a href="">844-332-6440</a></li>
                <li><button>Get Started</button></li>
            </ul>
        </nav>

        <div className="hero">
            <div className="heroText">
                <h1>Running the show has never been so easy.</h1>
                <p>Ready to put the human back in HR? Clerksy helps you set the stage with an inclusive and compliant workplace.</p>
            </div>
            <img src={hero} alt="" />
        </div>

    </div>
  )
}

export default Hero