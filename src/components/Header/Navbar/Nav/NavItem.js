import { Link } from "react-router-dom"
import Phone from './Phone/Phone'
import {FaHeadphones} from 'react-icons/fa6'

const NavItem = () => {
   return (
      <div className="collapse navbar-collapse" id="navbarCollapse">
         <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="about.html" className="nav-item nav-link">About</Link>
            <Link to="service.html" className="nav-item nav-link">Services</Link>
            <div className="nav-item dropdown">
               <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
               <div className="dropdown-menu fade-up m-0">
                     <Link to="price.html" className="dropdown-item">Pricing Plan</Link>
                     <Link to="feature.html" className="dropdown-item">Features</Link>
                     <Link to="quote.html" className="dropdown-item">Free Quote</Link>
                     <Link to="team.html" className="dropdown-item">Our Team</Link>
                     <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                     <Link to="404.html" className="dropdown-item">404 Page</Link>
               </div>
            </div>
            <Link to="contact.html" className="nav-item nav-link">Contact</Link>
         </div>
         <Phone>
            <FaHeadphones/> <span className="ms-2">+012 345 6789</span>
         </Phone>
      </div>
      
   )
}

export default NavItem