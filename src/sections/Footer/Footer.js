import { FaAngleRight, FaEnvelope, FaFacebookF, FaLinkedin, FaMapMarkedAlt, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   <div className="container-fluid bg-dark text-light footer pt-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Address</h4>
                    <p className="mb-2"><FaMapMarkedAlt size={20} fill='white' className='me-3'/>123 Street, New York, USA</p>
                    <p className="mb-2"><FaPhoneAlt size={20} fill='white' className='me-3'/>+012 345 67890</p>
                    <p className="mb-2"><FaEnvelope size={20} fill='white' className='me-3'/>info@example.com</p>
                    <div className="d-flex pt-2">
                        <Link className="btn btn-outline-light btn-social" to=""><FaFacebookF size={15} /></Link>
                        <Link className="btn btn-outline-light btn-social" to=""><FaYoutube size={15} /></Link>
                        <Link className="btn btn-outline-light btn-social" to=""><FaTwitter size={15} /></Link>
                        <Link className="btn btn-outline-light btn-social" to=""><FaLinkedin size={15} /></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Services</h4>
                    <Link className="btn btn-link" to=""><FaAngleRight size={20} fill='white'/> Air Freight</Link>
                    <Link className="btn btn-link" to=""><FaAngleRight size={20} fill='white'/> Sea Freight</Link>
                    <Link className="btn btn-link" to=""><FaAngleRight size={20} fill='white'/> Road Freight</Link>
                    <Link className="btn btn-link" to=""><FaAngleRight size={20} fill='white'/> Logistic Solutions</Link>
                    <Link className="btn btn-link" to=""><FaAngleRight size={20} fill='white'/> Industry solutions</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <Link className="btn btn-link" to=""><FaAngleRight size={20} fill='white'/> About Us</Link>
                    <Link className="btn btn-link" to=""><FaAngleRight size={20} fill='white'/> Contact Us</Link>
                    <Link className="btn btn-link" to=""><FaAngleRight size={20} fill='white'/> Our Services</Link>
                    <Link className="btn btn-link" to=""><FaAngleRight size={20} fill='white'/> Terms & Condition</Link>
                    <Link className="btn btn-link" to=""><FaAngleRight size={20} fill='white'/> Support</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto">
                        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright py-4">
                <div className="row ">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <Link className="border-bottom btn-bottom-bar" to="#">Logistica</Link>, All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end ">
                        Designed By <Link className="border-bottom btn-bottom-bar" to="https://ibrahimhamdy.net">IbrahimHamdy</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
}

export default Footer