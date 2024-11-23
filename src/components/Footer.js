import { BrowserRouter, Link } from "react-router-dom";

function Footer() {
  return (

<div class="container">
<footer class="py-3 my-4">
  <ul class="nav justify-content-center border-bottom pb-3">
    <Link to="/splash"></Link>
    <Link to="/splashtwo"></Link>
    <li class="nav-item"><Link to="/natal" class="nav-link px-2 text-body-secondary"><i class="icon bi bi-moon-fill"></i></Link></li>
    <li class="nav-item"><Link to="/notes" class="nav-link px-2 text-body-secondary"><i class="icon bi bi-book"></i></Link></li>
    <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary"><i class="icon bi bi-house-door-fill" ></i></Link></li> 
    <li class="nav-item"><Link to="/collection" class="nav-link px-2 text-body-secondary"><i class="icon bi bi-bookmark"></i></Link></li>
    <li class="nav-item"><Link to="/search" class="nav-link px-2 text-body-secondary"><i class="icon bi bi-search"></i></Link></li>
  </ul>
</footer>
</div> 

);
}

export default Footer;
      