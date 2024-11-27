import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Intro.js
const IntroTwo = () => {
    return (

        <div>
            <div class="textBlackBackgroundNatal">
                <h1 class="float-center mb-3">Progress your journey</h1>
                <h5 class="float-center mb-5">Dive further into your practice by reading articles that interest you</h5>
            </div>

            {/*<img src={PiscesNatal} class="piscesnatal" alt="logo" />*/}
            <Link to="/IntroThree"><button type="button" class="btn btn-dark btn-lg mt-3">Next</button></Link>


        </div>

    );
}

  export default IntroTwo;