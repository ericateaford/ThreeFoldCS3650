import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Splash = () => {
  return (

<div>
          <div class="loginform">
              <img src="/images/logo.png" class="splashlogo" alt="logo" />

              <div class="login-container">
              <h1 class = "login-label">Log in</h1>
              <input
                  className={'login-box'}
                  placeholder="Username"
              />
              <br />
              <input
                  className={'login-box'}
                  placeholder="Password"
                  />
              <br/>
                  <Link to="/Home"><button type="button" class="btn btn-dark btn-lg mt-3">Login</button></Link>
              </div>

            <p class="login-link">Sign Up</p>
        </div>
</div>

);
}
export default Splash;