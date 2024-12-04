
import SuggestedArticlesCarousel from './components/SuggestedArticlesCarousel.js'
import WorkshopsCarousel from './components/WorkshopsCarousel.js'
import AddCollectionCarousel from './components/AddCollectionCarousel.js'
import DailyRitualCarousel from './components/DailyRitualCarousel.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'




import React from 'react';

const Home = () => { 
  return (
    
    <div>
      <Header />
      <img src="/images/bigmoon.png" class="mercuryretrograde mt-4" alt="logo" />
      <div class="homegraybox">
  <button type="button" class="buttonhome btn btn-dark btn-lg">Learn More</button>
      </div>
      <div class="hometext">
<h2>Mercury in Retrograde</h2>
  <h6>You may experience a series of shifts incommunication and technology</h6>
</div> <br></br> <br></br> <br></br> <br></br>
      <DailyRitualCarousel /> 
      
      <div class="textBlackBackground mt-5 mb-5">
      <h1 class="float-center">DAILY AFFIRMATION</h1>
      <h5 class="float-center">The world guides you in order to complete your goals</h5>
      </div>

      <SuggestedArticlesCarousel />    
      <img src="/images/moons.png" class="activity mt-5" alt="logo" />

      <WorkshopsCarousel />    
      <AddCollectionCarousel />  

        
      <Footer /> 
    </div>
  );
}

export default Home;


