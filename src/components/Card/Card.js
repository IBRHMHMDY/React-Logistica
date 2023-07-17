import './Card.css'

const VCard = (props) => {
  return (
    <div className='col-sm-6'>
      <div className='text-primary mb-3'>{props.icon}</div>
      <h5 className='mb-3'>{props.title}</h5>
      <p className='mb-5'>{props.text}</p>
    </div>
  )
}

const HCard = (props) => {
  return (
    <div className="d-flex align-items-center">
      <div className={`flex-shrink-0 ${props.bgColor} p-3 text-white`}>{props.icon}</div>
      <div className="ps-4">
        <h6>{props.text}</h6>
        <h3 className="text-primary m-0">{props.title}</h3>
      </div>
    </div>
  )
}

const CardSpecial = (props) => {
  return (
    <div className={`${props.bgColor} p-4 mb-4`}>
      <div className="text-white mb-3">{props.icon}</div>
      <h2 className="text-white mb-2">{props.title}</h2>
      <p className="text-white mb-0">{props.text}</p>
    </div>
  )
}

const CardImage = (props) => {
  return (
    <div className="card-item p-4">
        <div className="overflow-hidden mb-4">
          <img className="img-fluid" src={props.imagePath} alt=""/>
        </div>
        <h4 className="mb-3">{props.title}</h4>
        <p>{props.content}</p>
        {props.children}
    </div>
  )
}

const CardIcon = (props) => {
  return (
    <div className="d-flex mb-5">
      {props.children}
      <div className="ms-4 ">
          <h5>{props.title}</h5>
          <p className="mb-0 text-muted">{props.text}</p>
      </div>
    </div>
  )
}

const CardPricing = (props) => {
  return (
    <>
      <div className="border-bottom p-4 mb-4">
        <h5 className="text-primary mb-1">{props.title}</h5>
        <h1 className="display-5 mb-0">
          <small className="align-top">{props.currency}</small>
          {props.price}
          <small className="align-bottom" >/ {props.duration}</small>
        </h1>
      </div>
      <div className="p-4 pt-0">
        {props.children}
      </div>
    </>
  )
}

const ListFeatures = (props) => {
  return(
    <div className="p-4 pt-0">
      <p>{props.children}{props.title}</p>
    </div>
  )
}

export default VCard
export {HCard, CardSpecial, CardImage, CardIcon, CardPricing, ListFeatures }

