
import Footer from './components/Footer.js'
import Header from './components/Header.js' 
import Meditation from './components/Meditation.js'
import Tarot from './components/Tarot.js'
import Guidance from './components/Guidance.js'
import WorkshopsCarousel from './components/WorkshopsCarousel.js'
import Quizzes from './components/Quizzes.js'
import Shopping from './components/Shopping.js'
import SearchBar from './components/SearchBar.js'



const Search = () => {
  return (

<div>

<Header />
<div className="col-12 mx-auto">
<SearchBar />
<img src="/images/runessearch.png" class="runessearch mt-4" alt="logo" />
<div class="runesgraybox">
  <button type="button" class="learnmorebutton btn btn-dark btn-lg">Learn More</button>
</div>
<div class="runestext">
<h2>Runes</h2>
  <h6>Connected to Norse Mythology, runes may be your next divination tool.</h6>
</div>

<Meditation />
<Tarot />
<Guidance />
<WorkshopsCarousel />
<Quizzes />
<Shopping />
</div>
<Footer />
</div>



);
}
export default Search;