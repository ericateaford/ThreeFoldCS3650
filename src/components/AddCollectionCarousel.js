import React from "react";
import {Link} from "react-router-dom" //Import link from react-router-dom

function AddCollectionCarousel() {
    return (
      
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
           <div> <h3 class="carouselheading  text-start">Add to Your Collection</h3> </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">
        <Link to="/Sage">
      <div class="card mb-5">
        <img src="/images/Sage.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Sage Benefits</div>
        </div>
      </div>
      </Link>

      <Link to="/Citrine">
      <div class="card d-none d-md-block">
      <img src="/images/citrine.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Citrine and Mood Improvement</div>
        </div>
      </div>
      </Link>

      <Link to="/Candle">
      <div class="card d-none d-md-block">
      <img src="/images/candle.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Candles Colours and Their Meanings</div>
        </div>
      </div>
      </Link>


    </div>
    </div>
   
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" aria-label="Previous">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" aria-label="Next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
</div>
    
    );
  }

  export default AddCollectionCarousel;
        