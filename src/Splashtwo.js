
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Splashtwo = () => {
  return (

<div>


<img src="/images/logo.png" class="splashlogo" alt="logo" />

<h1 class="splashheader">Three Fold</h1>
<h4 class="splashheader">Your guide to revolutionize your spiritual journey</h4>
<Link to = "/Splash"><button type="button" class="btn btn-dark btn-lg mt-3">Next</button></Link>



</div>



);
}
export default Splashtwo;