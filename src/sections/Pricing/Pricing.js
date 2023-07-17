import './Pricing.css'
import {BigTitle, ButtonSlide, CardPricing, ListFeatures, SmallTitle} from '../../components'
import { FaArrowRight, FaCheck } from 'react-icons/fa'

const Pricing = () => {
  return (
   <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center">
                <SmallTitle title="Pricing Plan"/>
                <BigTitle title="Perfect Pricing Plan"/>
            </div>
            <div className="row g-4">
               <div className="col-md-6 col-lg-4">
                  <div className="price-item">
                     <CardPricing title="Basic Plan" currency="$" price="49.00" duration="Month">
                        <ListFeatures title="HTML5 & CSS3"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ListFeatures title="Bootstrap v6"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ListFeatures title="FontAwesome Icons"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ListFeatures title="Responsive Layout"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ListFeatures title="Cross-browser Support"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ButtonSlide text="Order Now"><FaArrowRight size={20} fill='white' width={40} height={40}/></ButtonSlide>
                     </CardPricing>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <div className="price-item">
                     <CardPricing title="Standard Plan" currency="$" price="99.00" duration="Month">
                        <ListFeatures title="HTML5 & CSS3"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ListFeatures title="Bootstrap v6"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ListFeatures title="FontAwesome Icons"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ListFeatures title="Responsive Layout"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ListFeatures title="Cross-browser Support"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ButtonSlide text="Order Now"><FaArrowRight size={20} fill='white' width={40} height={40}/></ButtonSlide>
                     </CardPricing>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <div className="price-item">
                     <CardPricing title="Advanced Plan" currency="$" price="149.00" duration="Month">
                        <ListFeatures title="HTML5 & CSS3"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ListFeatures title="Bootstrap v6"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ListFeatures title="FontAwesome Icons"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ListFeatures title="Responsive Layout"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ListFeatures title="Cross-browser Support"><FaCheck size={15} fill='green' className="text-success me-3"/> </ListFeatures>
                        <ButtonSlide text="Order Now"><FaArrowRight size={20} fill='white' width={40} height={40}/></ButtonSlide>
                     </CardPricing>
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing