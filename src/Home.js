
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
      <img src="/images/mercuryretrograde.png" class="mercuryretrograde mt-4" alt="logo" />
      <DailyRitualCarousel /> 
      
      <div class="textBlackBackground mt-5 mb-5">
      <h1 class="float-center">DAILY AFFIRMATION</h1>
      <h5 class="float-center">The world guides you in order to complete your goals</h5>
      </div>

      <SuggestedArticlesCarousel />    
      <img src="/images/activity.png" class="activity mt-5" alt="logo" />

      <WorkshopsCarousel />    
      <AddCollectionCarousel />  

        
      <Footer /> 
    </div>
  );
}

export default Home;


