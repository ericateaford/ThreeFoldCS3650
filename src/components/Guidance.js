import {Link} from "react-router-dom" //Import link from react-router-dom


function Guidance() {
    return (
      
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
             <div> <h3 class="carouselheading text-start">Guidance</h3> </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">

        <Link to="/Pendulum">
      <div class="card mb-5">
      <img src="/images/necklace.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">The Power of Pendulums</div>
        </div>
      </div>
      </Link>

  <div class="d-flex flex-row">
  <div class="p-2">

  <Link to="/SpellJars">
      <div class="card">
      <img src="/images/rose.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Spell Jars and Letting Go</div>
        </div>
      </div>
      </Link>
  </div>
  <div class="p-2">
     

  <Link to="/Citrine">
      <div class="card ">
      <img src="/images/Rocks.png" class="card-img-top" alt="..."/>
        <div class="card-body">
        <div class="carouselTitles">Your Guide to Crystals</div>
        </div>
      </div>
      </Link>
    </div>
    </div>
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

  export default Guidance;
        