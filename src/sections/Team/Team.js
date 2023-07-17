import { FaFacebookF, FaInstagram, FaShare, FaTwitter } from 'react-icons/fa'
import {BigTitle, SmallTitle,ButtonSlideSocial, CardImage} from '../../components'
import { Team1,Team2,Team3,Team4 } from '../../assets/images'
import { Link } from 'react-router-dom';

const Team = () => {
   return(
      <div className="container-xxl py-5">
         <div className="container py-5">
            <div className="text-center">
               <SmallTitle title="Our Team"/>
               <BigTitle title="Expert Team Members"/>
            </div>
            <div className="row g-4">
               <div className="col-lg-3 col-md-6">
                  <CardImage imagePath={Team1} title="Full Name" content="Designation">
                     <ButtonSlideSocial icoShare={<FaShare size={20} fill='white'/>}>
                        <Link to=""><FaFacebookF size={20} fill='white'/></Link>
                        <Link to=""><FaTwitter size={20} fill='white'/></Link>
                        <Link to=""><FaInstagram size={20} fill='white' /></Link>
                     </ButtonSlideSocial>
                  </CardImage>
               </div>
               <div className="col-lg-3 col-md-6">
                  <CardImage imagePath={Team2} title="Full Name" content="Designation">
                     <ButtonSlideSocial icoShare={<FaShare size={20} fill='white'/>} >
                        <Link to=""><FaFacebookF size={20} fill='white'/></Link>
                        <Link to=""><FaTwitter size={20} fill='white'/></Link>
                        <Link to=""><FaInstagram size={20} fill='white' /></Link>
                     </ButtonSlideSocial>
                  </CardImage>
               </div>
               <div className="col-lg-3 col-md-6">
                  <CardImage imagePath={Team3} title="Full Name" content="Designation">
                     <ButtonSlideSocial icoShare={<FaShare size={20} fill='white'/>}>
                        <Link to=""><FaFacebookF size={20} fill='white'/></Link>
                        <Link to=""><FaTwitter size={20} fill='white'/></Link>
                        <Link to=""><FaInstagram size={20} fill='white' /></Link>
                     </ButtonSlideSocial>
                  </CardImage>
               </div>
               <div className="col-lg-3 col-md-6">
                  <CardImage imagePath={Team4} title="Full Name" content="Designation">
                     <ButtonSlideSocial icoShare={<FaShare size={20} fill='white'/>}>
                        <Link to=""><FaFacebookF size={20} fill='white'/></Link>
                        <Link to=""><FaTwitter size={20} fill='white'/></Link>
                        <Link to=""><FaInstagram size={20} fill='white' /></Link>
                     </ButtonSlideSocial> 
                  </CardImage>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Team