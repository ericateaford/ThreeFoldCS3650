import {Link} from "react-router-dom" //Import link from react-router-dom

function Meditation() {
    return (
      
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
             <div> <h3 class="carouselheading text-start">Meditation</h3> </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">

      <Link to="/Meditate">
      <div class="card mb-5">
      <img src="/images/Meditate.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Meditation: Finding Inner Peace</div>
        </div>
      </div>
      </Link>

      <Link to="/Candle">
      <div class="card d-none d-md-block">
      <img src="/images/lotscandle.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">How Candle Magik Enhances Meditation</div>
        </div>
      </div>
      </Link>
      
      <Link to="/Movement">
      <div class="card d-none d-md-block">
      <img src="/images/Yoga.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Incorporating Movement Into Your Practice</div>
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

  export default Meditation;
        