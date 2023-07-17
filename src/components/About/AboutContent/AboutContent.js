import { VCard } from '../../index'
import { FaGlobe, FaShippingFast } from 'react-icons/fa'
import { ButtonPrimary } from '../../Button/Button'
import { SmallTitle, BigTitle } from '../../index'
import Paragraph from '../../Paragraph/Paragraph'

const AboutContent = () => {
  return (
   <div className='col-lg-6 about-text'>
      <SmallTitle title="ABOUT US"/>
      <BigTitle title="Quick Transport and Logistics Solutions"/>
      <Paragraph content="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet"/>
      <div className='row g-4 mb-5'>
         <VCard icon={<FaGlobe size='70' />} 
            title="Global Coverage" 
            text="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo."
         />
         <VCard icon={<FaShippingFast size='70'/>} 
            title="On Time Delivery" 
            text="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo."
         />
      </div>
      <ButtonPrimary URL="" title="Explore More"/>
   </div>
  )
}

export default AboutContent