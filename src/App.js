


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home.js'; 
import Natal from './Natal.js';
import Notes from './Notes.js';
import Search from './Search.js';
import Splash from './Splash.js';
import Splashtwo from './Splashtwo.js';
// ... import other pages
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';





function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/natal">Natal</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/splash">Splash</Link>
            </li>
            <li>
              <Link to="/splash">Splashtwo</Link>
            </li>
            {/* ... other links */}
          </ul>
        </nav>
      </div>
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/natal" element={<Natal />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/search" element={<Search />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/splashtwo" element={<Splashtwo />} />
          {/* ... other routes */}
        </Routes>
     
    </Router>
  );
}

export default App;

