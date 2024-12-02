import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


// Intro.js
const IntroFive = () => {
    return (

        <div>
            <div class="textBlackBackgroundNatal">
                <img src="/images/takingnotes.png" class="splashlogo" alt="logo" />

                <h1 class="splashheader">Take Notes</h1>
                <h5 class="splashheader">Take notes in your vistual Book of Shadows for a comprehansive place to store your thoughts</h5>
            </div>

            {/*<img src={PiscesNatal} class="piscesnatal" alt="logo" />*/}
            <Link to = "/Splashtwo"><button type="button" class="btn btn-dark btn-lg mt-3">Next</button></Link>


        </div>

    );
}

  export default IntroFive;