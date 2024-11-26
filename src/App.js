
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home.js'; 
import Natal from './Natal.js';
import Notes from './Notes.js';
import Search from './Search.js';
import Splash from './Splash.js';
import Splashtwo from './Splashtwo.js';
// ... import other pages

import './index.css'; 
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Collection from './Collection.js';
import Crystals from "./Crystals.js";
import Intentions from "./Intentions.js";
import MoonSign from "./MoonSign.js";
import Meditate from "./Meditate.js";
import Nature from "./Nature.js";
import Sage from "./Sage.js";
import Citrine from "./Citrine.js";
import Candle from "./Candle.js";
import Routine from "./Routine.js";
import Cards from "./Cards.js";
import MoonMeaning from "./MoonMeaning.js";
import Pendulum from "./Pendulum.js";
import SpellJars from "./SpellJars.js";
import Journal from "./Journal.js";
import CandleColors from "./CandleColors.js";
import Yoga from "./Yoga.js";
import Movement from "./Movement.js";
import Compatibility from "./Compatibility.js";
import CrystalZodiac from "./CrystalZodiac.js";

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
          <Route path="/Collection" element={<Collection /> } />
          <Route path="/Crystals" element={<Crystals/>}/>
          <Route path="/Intentions" element={<Intentions/>}/>
          <Route path="/MoonSign" element={<MoonSign/>}/>
          <Route path="/Meditate" element={<Meditate/>}/>
          <Route path="/Nature" element={<Nature/>}/>
          <Route path="/Sage" element={<Sage/>}/>
          <Route path="/Citrine" element={<Citrine/>}/>
          <Route path="/Candle" element={<Candle/>}/>
          <Route path="/Routine" element={<Routine/>}/>
          <Route path="/Cards" element={<Cards/>}/>
          <Route path="/MoonMeaning" element={<MoonMeaning/>}/>
          <Route path="/Pendulum" element={<Pendulum/>}/>
          <Route path="/SpellJars" element={<SpellJars/>}/>
          <Route path="/Journal" element={<Journal/>}/>
          <Route path="/CandleColors" element={<CandleColors/>}/>
          <Route path="/Yoga" element={<Yoga/>}/>
          <Route path="/Movement" element={<Movement/>}/>
          <Route path="/Compatibility" element={<Compatibility/>}/>
          <Route path="/CrystalZodiac" element={<CrystalZodiac/>}/>


        </Routes>
     
    </Router>
  );
}

export default App;

