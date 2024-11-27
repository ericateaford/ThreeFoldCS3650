import { BrowserRouter, Link } from "react-router-dom";

function Footer() {
  return (

<div class="container">
<footer class="">
  <ul class="nav justify-content-center border-bottom pb-3">
    <Link to="/splash"></Link>
    <Link to="/splashtwo"></Link>
    <li class="nav-item"><Link to="/natal" class="nav-link px-2 text-body-secondary"><i class="icon bi bi-moon-fill"></i></Link><div class="iconWording">Natal</div></li>
    <li class="nav-item"><Link to="/notes" class="nav-link px-2 text-body-secondary"><i class="icon bi bi-book"></i></Link><div class="iconWording">Notes</div></li>
    <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary"><i class="icon bi bi-house-door-fill" ></i></Link><div class="iconWording">Home</div></li> 
    <li class="nav-item"><Link to="/collection" class="crystalnav nav-link px-2 text-body-secondary"><img src="/images/crystalwhite.png" height="65" width="65"/></Link><div class="iconWording">Collection</div></li>
    <li class="nav-item"><Link to="/search" class="nav-link px-2 text-body-secondary"><i class="icon bi bi-search"></i></Link><div class="iconWording">Search</div></li>
  </ul>
</footer>
</div> 

);
}

export default Footer;
      