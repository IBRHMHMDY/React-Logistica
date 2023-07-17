import { Link } from 'react-router-dom'

const Brand = (props) => {
  return (
    <Link to={props.URL} className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
      {props.children}
    </Link>
  )
}

export default Brand