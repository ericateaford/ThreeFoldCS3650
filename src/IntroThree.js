import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Intro.js
const IntroThree= () => {
    return (

        <div>
            <div class="textBlackBackgroundNatal">
                <h1 class="float-center mb-3">Understand yourself</h1>
                <h5 class="float-center mb-5">Understand yourself by reviewing your natal chart</h5>
            </div>

            {/*<img src={PiscesNatal} class="piscesnatal" alt="logo" />*/}
            <Link to="/IntroFour"><button type="button" class="btn btn-dark btn-lg mt-3">Next</button></Link>


        </div>

    );
}

  export default IntroThree;