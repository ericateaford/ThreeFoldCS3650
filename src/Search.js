
import Footer from './components/Footer.js'
import Header from './components/Header.js' 
import Meditation from './components/Meditation.js'
import Tarot from './components/Tarot.js'
import Guidance from './components/Guidance.js'
import WorkshopsCarousel from './components/WorkshopsCarousel.js'
import Quizzes from './components/Quizzes.js'
import Shopping from './components/Shopping.js'



const Search = () => {
  return (

<div>

<Header />
<div className="col-12 mx-auto">
<img src="/images/Searchbarsearch.png" class="logo mb-3 mt-5" alt="logo" />
<img src="/images/runessearch.png" class="runessearch mt-4" alt="logo" />
<button type="button" class="btn btn-dark btn-lg">Learn More</button>
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