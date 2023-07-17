import { ButtonPrimary,ButtonSecondary } from '../Button/Button'
import './CarouselItem.css'

const CarouselItem = (props) => {
   return (
      <div className="carousel-item active">
         <img src={props.imagePath} className="d-block w-100" alt="..."/>
         <div className="layer-cover position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
            <div className="container">
               <div className="row justify-content-center justify-content-md-start">
                  <div className="col-10 col-lg-8">
                     <h5 className="text-white text-uppercase mb-3">{props.subTitle}</h5>
                     <h1 className="display-3 text-white mb-4">#1 Place For Your<span className="text-primary fw-bold"> {props.title} </span>Solution</h1>
                     <p className="fs-5 fw-medium text-white mb-4 pb-2 d-none d-md-block d-sm-none">{props.content}</p>
                     <ButtonPrimary URL="" title="Read More"/>
                     <ButtonSecondary URL="" title="Free Quote"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CarouselItem