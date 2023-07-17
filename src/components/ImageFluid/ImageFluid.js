import React from 'react'

const ImageFluid = (props) => {
  return (
   <div className="position-relative h-100">
      <img className="position-absolute img-fluid w-100 h-100" src={props.imagePath}  alt=""/>
   </div>
  )
}

export default ImageFluid