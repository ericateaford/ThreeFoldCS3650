

import {Link} from "react-router-dom" //Import link from react-router-dom

function SuggestedArticlesCarousel() {
    return (
 
 <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div> <h3 class="carouselheading text-start">Suggested Articles</h3> </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">

      <Link to="/Crystals">
      <div class="card mb-5">
      <img src="/images/Rocks.png" class="planner card-img-top"  alt="..."/>
        <div class="card-body">
        </div>
      </div>

      </Link>     


      <Link to="/MoonSign">
      <div class="card d-none d-md-block">
      <img src="/images/Stars.png" class="planner card-img-top" alt="..." />
        <div class="card-body">
        </div>
      </div>
      </Link>

      <Link to="/Intentions">
      <div class="card d-none d-md-block">
      <img src="/images/Moon.png" class="planner card-img-top" alt="..." />
        <div class="card-body">
         
        </div>
      </div>
      </Link>    </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
</div>
    
    );
  }

  export default SuggestedArticlesCarousel;