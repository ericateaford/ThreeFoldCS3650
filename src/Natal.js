import SuggestedArticlesCarousel from './components/SuggestedArticlesCarousel.js'
import Footer from './components/Footer.js'
// import Header from './components/Header.js' 
import PiscesNatal from "./piscesnatal.png";





const Natal = () => {
    return (

<div>
{/* <Header /> */}
<h5 class="float-center mb-2">As a</h5>
<h1 class="float-center mb-3">Pisces Sun</h1>
<h5 class="float-center mb-5">take special note to your dreams and emotions today</h5>

<img src={PiscesNatal} class="piscesnatal" alt="logo" />
<button type="button" class="btn btn-dark btn-lg mt-3">Discover More</button>

<h1 class="float-center mt-5">Taurus Rising</h1>
<h5 class="float-center mt-4">Today is April 25th in Taurus season, you may feel more grounded during chaotic situations. You can help other feel the same way.</h5>
<SuggestedArticlesCarousel />        
<Footer /> 
</div>

);
}
export default Natal;