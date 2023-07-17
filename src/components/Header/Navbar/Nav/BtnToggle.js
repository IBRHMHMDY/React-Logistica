const BtnToggle = (props) => {
  return (
   <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      {props.children}
   </button>
  )
}

export default BtnToggle