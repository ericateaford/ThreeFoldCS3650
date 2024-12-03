import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { json, redirect } from  'react-router-dom';
import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';



async function action({ request }) {
    // Get the form data from the request
    const data = await request.formData();
    const authData = {
        username: data.get("username"),
        password: data.get("password"),
    };

    // Post the data to the login route
    const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
    });

    // Error handling
    if (response.status === 422 || response.status === 401) {
        return response;
    }
    if (!response.ok) {
        throw json({ message: "Could not authenticate user." }, { status: 500 });
    }

    // Store the token and expiration 
    const resData = await response.json();
    const token = resData.token;
    localStorage.setItem("token", token);

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());

    return redirect("/home");
}

const Splash = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const redirection = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        console.log([formData.entries()]);

        try {
            const response = await action({ request: { formData } });

            if (response.ok) {
                redirection('/home');
            } else {
                setError("Invalid username or password. Please try again, or sign up.");
            }
        }
        catch (error) {
            setError("An error occurred.");
        }
    };


  return (

<div>
          <div class="loginform">
              <img src="/images/logo.png" class="splashlogo" alt="logo" />

              <div class="login-container">
                  <h1 class="login-label">Log in</h1>
                  <form onSubmit={handleSubmit}>
                      <label htmlFor="username">Username: </label>
                        <input
                          className={'login-box'}
                          placeholder="Username"
                          type="text"
                          value={username}
                          id="username"
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      <br />
                      <label htmlFor="password">Password: </label>
                        <input
                          className={'login-box'}
                          placeholder="Password"
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                  />
                      <br />
                      <Link to="/Home"><button type="submit" class="btn btn-dark btn-lg mt-3" onClick={action}>Login</button></Link>
                  </form>
              </div>

            <p class="login-link">Sign Up</p>
        </div>
</div>

);
}
export default Splash;