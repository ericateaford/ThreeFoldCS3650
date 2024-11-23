
import {Link} from "react-router-dom" //Import link from react-router-dom

function Tarot() {
    return (
      
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
             <div> <h3 class="carouselheading text-start">Tarot</h3> </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">

        <Link to="/Cards">
      <div class="card mb-5">
        <img src="/images/Journal.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Finding The Right Tarot Deck</div>
        </div>
      </div>
      </Link>

      <Link to="/MoonMeaning">
      <div class="card d-none d-md-block">
        <img src="/images/Sky.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">The Moon and Her Meaning In Tarot</div>
        </div>
      </div>
      </Link>

      <Link to="/MoonSign">
      <div class="card d-none d-md-block">
        <img src="/images/Stars.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Your Meaning in the Universe</div>
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

  export default Tarot;
        