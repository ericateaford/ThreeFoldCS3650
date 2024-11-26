
import {Link} from "react-router-dom" //Import link from react-router-dom

function WorkshopsCarousel() {
    return (
      
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
             <div> <h3 class="carouselheading text-start">Workshops</h3> </div>
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

      <Link to="/Nature">
      <div class="card d-none d-md-block">
      <img src="/images/Tree.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Your Connection to Mother Nature</div>
        </div>
      </div>
      </Link>

<Link to="/Yoga">
      <div class="card d-none d-md-block">
      <img src="/images/Yoga.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Yoga Poses for a Deeper Connection</div>
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

  export default WorkshopsCarousel;
        