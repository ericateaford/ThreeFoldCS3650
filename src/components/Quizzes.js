import { Link } from "react-router-dom";


function Quizzes() {
    return (
      
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
             <div> <h3 class="carouselheading text-start">About Your Sign</h3> </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">
      <div class="card mb-5">
        <img src="/images/decor.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Which Witch Are You?</div>
        </div>
      </div>

<Link to="/Compatibility">
      <div class="card d-none d-md-block">
        <img src="/images/goat.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Your Zodiac Sign Compatibility</div>
        </div>
      </div>
      </Link>

      <Link to="/CrystalZodiac">
      <div class="card d-none d-md-block">
        <img src="/images/citrine.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Crystals to Compliment Your Zodiac Sign</div>
        </div>
      </div>
      </Link>
      
    </div>
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

  export default Quizzes;
        