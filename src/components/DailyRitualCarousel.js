import {Link} from "react-router-dom" //Import link from react-router-dom

function DailyRitualCarousel() {
    return (

<div id="carouselExampleControls" className="dailyRitual carousel slide mb-5" data-bs-ride="carousel">
  <div> <h3 class="carouselheading text-start">Daily Ritual</h3> </div>
  <div class="carousel-inner">

    <div class="carousel-item active">
     {/* <div class="cards-wrapper">*/}

      <div className="cards-wrapper d-flex justify-content-center flex-wrap">

      <Link to="/Journal">
      <div class="card mb-5">
      <img src="/images/Planner.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">How Journaling Can Transform Your Practice</div>
        </div>
      </div>
      </Link>
      </div>
      </div>

      <div className="carousel-item">
      <div className="cards-wrapper d-flex justify-content-center">
           
      <Link to="Citrine">
      <div class="card mb-5">
      <img src="/images/citrine.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Citrine and It's Benefits</div>
        </div>
      </div>
      </Link>
      </div>
      </div>

      <div className="carousel-item">
          <div className="cards-wrapper d-flex justify-content-center">
      <Link to="Routine">
      <div class="card mb-5">
      <img src="/images/tree.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Your Connection to Mother Nature</div>
        </div>
      </div>
      </Link>

    </div>
    </div>
  </div>

  <button
  className="carousel-control-prev" data-bs-target="#carouselExampleControls" type="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>

  </button>

  <button
  className="carousel-control-next" data-bs-target="#carouselExampleControls" type="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
  <div>

  </div>
</div>


    );
  }

  export default DailyRitualCarousel;
        