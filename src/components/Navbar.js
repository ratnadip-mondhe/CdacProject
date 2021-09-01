import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  crossorigin="anonymous"
/>
import {Link} from 'react-router-dom';

const Navbar = () =>{
    
return(
<>

<nav className="navbar">
<div className="navbar-container">

<nav className="nav">
     
     <ul className="nav-links mt-3 ">
       <Link  class="badge rounded-pill bg-secondary" to="/Request"><li>Request</li></Link>
        
    <Link  class="badge rounded-pill bg-secondary" to="/Profile" >   <li>Profile</li> </Link> 
    <Link  class="badge rounded-pill bg-secondary" to="/Invoice" >   <li>Invoice</li> </Link>
    <Link  class="badge rounded-pill bg-secondary" to="/EditProfile" >   <li>EditProfile</li> </Link>
    <Link  class="badge rounded-pill bg-secondary" to="/Registration" >   <li>Registration</li> </Link>
    <Link  class="badge rounded-pill bg-secondary" to="/CustomerRegister" >   <li>CustomerRegister</li> </Link>
    {/* <Link  class="badge rounded-pill bg-secondary" to="/Approve" >   <li>Approve</li> </Link> */}
  
    
     </ul>
    </nav>


</div>
  
</nav>



</>
)

}
export default Navbar;