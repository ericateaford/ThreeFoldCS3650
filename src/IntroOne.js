import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Intro.js
const IntroOne = () => {
    return (

        <div>
            <div class="textBlackBackgroundNatal">
                <img src="/images/lotus.png" class="splashlogo" alt="logo" />

                <h1 class="splashheader">Connect with yourself</h1>
                <h5 class="splashheader">Discover who you are with daily affirmations and rituals tailored to your practice</h5>
            </div>

            {/*<img src={PiscesNatal} class="piscesnatal" alt="logo" />*/}
            <Link to ="/IntroTwo"><button type="button" class="btn btn-dark btn-lg mt-3">Next</button></Link>

          
        </div>

    );
}

  export default IntroOne;