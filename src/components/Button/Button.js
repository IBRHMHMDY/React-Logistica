import './Button.css'
import { Link } from 'react-router-dom'

const ButtonPrimary = (props) => {
  return (
    <Link to={props.URL} className="btn btn-primary py-3 px-5 me-3">{props.title}</Link>
  )
}
const ButtonSecondary = (props) => {
   return (
    <Link to={props.URL} className="btn btn-secondary py-3 px-5">{props.title}</Link>
   )
 }
 
const ButtonSlide = (props) => {
  return(
    <Link className="btn-slide" to={props.URL}>
      <div>{props.children}</div>
      <span>{props.text}</span>
    </Link>
  )
}
const ButtonSlideSocial = (props) => {
  return(
    <div className="btn-slide mt-1">
      <div>{props.icoShare}</div>
      <span className='link-social'>
          {props.children}
      </span>
    </div>
  )
}

export default ButtonSlide
export {ButtonPrimary,ButtonSecondary,ButtonSlideSocial}

