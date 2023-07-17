import { BigTitle, SmallTitle,CardImage, ButtonSlide } from '../../components'
import { FaArrowRight } from 'react-icons/fa';
import { Service1,Service2,Service3,Service4,Service5,Service6 } from '../../assets/images';
const Services = () => {
  return (
   <div className="container-xxl py-5">
      <div className="container py-5">
         <div className="text-center" >
            <SmallTitle title="Our Services"/>
            <BigTitle title="Explore Our Services"/>
         </div>
         <div className="row g-4">
            <div className="col-md-6 col-lg-4" >
               <CardImage imagePath={Service1} 
                  title="Air Freight"
                  content="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.">
                     <ButtonSlide URL="" text="Read more">
                        <FaArrowRight size={20} fill="white"/>
                     </ButtonSlide>
               </CardImage>
            </div>
            <div className="col-md-6 col-lg-4" >
               <CardImage imagePath={Service2} 
                  title="Ocean Freight"
                  content="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.">
                     <ButtonSlide URL="" text="Read more">
                        <FaArrowRight size={20} fill="white"/>
                     </ButtonSlide>
                  </CardImage>
            </div>  
            <div className="col-md-6 col-lg-4" >
               <CardImage imagePath={Service3} 
                  title="Road Freight"
                  content="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.">
                     <ButtonSlide URL="" text="Read more">
                        <FaArrowRight size={20} fill="white"/>
                     </ButtonSlide>
               </CardImage>
            </div>  
            <div className="col-md-6 col-lg-4" >
               <CardImage imagePath={Service4} 
                  title="Train Freight"
                  content="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.">
                  <ButtonSlide URL="" text="Read more">
                     <FaArrowRight size={20} fill="white"/>
                  </ButtonSlide>
               </CardImage>
            </div>  
            <div className="col-md-6 col-lg-4" >
               <CardImage imagePath={Service5} 
                  title="Customs Freight"
                  content="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.">
                  <ButtonSlide URL="" text="Read more">
                     <FaArrowRight size={20} fill="white"/>
                  </ButtonSlide>
               </CardImage>
            </div>  
            <div className="col-md-6 col-lg-4" >
               <CardImage imagePath={Service6} 
                  title="Warehouse Freight"
                  content="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.">
                  <ButtonSlide URL="" text="Read more">
                     <FaArrowRight size={20} fill="white"/>
                  </ButtonSlide>
               </CardImage>
            </div>  
         </div>
      </div>
   </div>
  )
}

export default Services