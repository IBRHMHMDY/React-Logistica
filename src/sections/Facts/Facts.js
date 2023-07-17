import { FaHeadphones, FaShip, FaStar, FaUsers } from "react-icons/fa"
import { BigTitle, CardSpecial, HCard, Paragraph, SmallTitle } from "../../components"

const Facts = () => {
   return (
      <div className="container-xxl py-5">
         <div className="container py-5">
            <div className="row g-5">
               <div className="col-lg-6">
                  <SmallTitle title="Some Facts"/>
                  <BigTitle title="#1 Place To Manage All Of Your Shipments"/>
                  <Paragraph content="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet"/>
                  <HCard icon={<FaHeadphones size={40} fill="White"/>} bgColor="bg-primary" title="+012 345 6789" text="Call for any query!"/>
               </div>
               <div className="col-lg-6">
                  <div className="row g-4 align-items-center">
                     <div className="col-sm-6">
                        <CardSpecial bgColor="bg-primary" icon={<FaUsers size={70} fill="white"/>} title="1234" text="Happy Clients"/>
                        <CardSpecial bgColor="bg-secondary" icon={<FaShip size={70} fill="white"/>} title="1234" text="Complete Shipments"/>
                     </div>
                     <div className="col-sm-6">
                        <CardSpecial bgColor="bg-success" icon={<FaStar size={70} fill="white"/>} title="1234" text="Customer Reviews"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Facts