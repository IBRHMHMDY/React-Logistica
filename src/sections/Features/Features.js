import { SmallTitle, BigTitle, CardIcon, ImageFluid  } from '../../components'
import { FaGlobe, FaHeadphones } from 'react-icons/fa'
import { FaTruckFast } from 'react-icons/fa6'
import {imgFeature} from '../../assets/images/index'

const Features = () => {
  return (
    <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container feature py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
                <div className="col-lg-6 feature-text">
                  <SmallTitle title="Our Features"/>
                  <BigTitle title="We Are Trusted Logistics Company Since 1990"/>
                  <CardIcon 
                    title="Worldwide Service" 
                    text="Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet">
                      <FaGlobe size={60} fill='red'/>
                  </CardIcon>
                  <CardIcon 
                    title="On Time Delivery"
                    text="Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet">
                      <FaTruckFast size={60} fill='red'/>
                  </CardIcon>
                  <CardIcon 
                    title="24/7 Telephone Support"
                    text="Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet">
                      <FaHeadphones size={60} fill='red'/>
                  </CardIcon>
                </div>
                <div className="col-lg-6 pe-lg-0"  >
                  <ImageFluid imagePath={imgFeature}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features