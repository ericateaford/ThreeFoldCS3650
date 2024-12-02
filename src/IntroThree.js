import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Intro.js
const IntroThree= () => {
    return (

        <div>
            <div class="textBlackBackgroundNatal">
                <img src="/images/totalyoga.png" class="splashlogo" alt="logo" />
                <h1 class="splashheader">Understand yourself</h1>
                <h5 class="splashheader">Understand yourself by reviewing your natal chart</h5>
            </div>

            {/*<img src={PiscesNatal} class="piscesnatal" alt="logo" />*/}
            <Link to="/IntroFour"><button type="button" class="btn btn-dark btn-lg mt-3">Next</button></Link>


        </div>

    );
}

  export default IntroThree;