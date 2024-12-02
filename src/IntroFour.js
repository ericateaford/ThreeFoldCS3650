import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Intro.js
const IntroFour = () => {
    return (

        <div>
            <div class="textBlackBackgroundNatal">
                <img src="/images/Planner.png" class="splashlogo" alt="logo" />
                <h1 class="splashheader">Organize your collection</h1>
                <h5 class="splashheader">Organize your collection by adding items within the app</h5>
            </div>

            {/*<img src={PiscesNatal} class="piscesnatal" alt="logo" />*/}
            <Link to="/IntroFive"><button type="button" class="btn btn-dark btn-lg mt-3">Next</button></Link>


        </div>

    );
}

  export default IntroFour;