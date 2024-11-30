

import {Link} from "react-router-dom" //Import link from react-router-dom

function SuggestedArticlesCarousel() {
    return (
 
 <div id="carouselExampleControls" className="carousel slide mb-5" data-bs-ride="carousel">
  <div> <h3 class="carouselheading text-start">Suggested Articles</h3> </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* <div class="cards-wrapper"> */}
      <div className="cards-wrapper d-flex justify-content-center flex-wrap">

      <Link to="Crystals">
      <div class="card mb-5">
      <img src="/images/Rocks.png" class="planner card-img-top"  alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Your Guide to Crystals</div>
        </div>
      </div>
    </Link> 

     

      <div className="carousel-item">
      <div className="cards-wrapper d-flex justify-content-center">
      <Link to="MoonSign">
      <div class="card mb-5">
      <img src="/images/Stars.png" class="planner card-img-top" alt="..." />
        <div class="card-body">
        <div class="carouselTitles">The Meaning of Your Moon Sign</div>
        </div>
      </div>
      </Link>
      </div>
      </div>

      <div className="carousel-item">
          <div className="cards-wrapper d-flex justify-content-center">
      <Link to="Intentions">
      <div class="card mb-5">
      <img src="/images/Moon.png" class="planner card-img-top" alt="..." />
        <div class="card-body">
        <div class="carouselTitles">Moon Magic</div>
        </div>
      </div>
      </Link>    
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" data-bs-target="#carouselExampleControls" type="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
  <button className="carousel-control-next" data-bs-target="#carouselExampleControls" type="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>

</div>
</div>
    </div>
    );
  }

  export default SuggestedArticlesCarousel;