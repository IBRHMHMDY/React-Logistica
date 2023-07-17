import {BigTitle,SmallTitle,Paragraph,HCard} from '../../components'
import { FaHeadphones } from 'react-icons/fa'
import ContactForm from '../../components/ContactForm/ContactForm'
 
const Quote = () => {
  return (
    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-5" >
                    <SmallTitle title="Get A Quote"/>
                    <BigTitle title="Request A Free Quote!"/>
                    <Paragraph content="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet"/>
                    <HCard icon={<FaHeadphones size={40} fill="White"/>} bgColor="bg-primary" title="+012 345 6789" text="Call for any query!"/>
                </div>
                <div className="col-lg-7">
                    <div className="bg-light text-center p-5" >
                      <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quote