
const BigTitle = (props) => {
  return (
   <h1 className='mb-5'>{props.title}</h1>
  )
}


const SmallTitle = (props) => {
  return (
    <h6 className='text-secondary text-uppercase mb-3 '>{props.title}</h6>
  )
}
  
export default BigTitle
export {SmallTitle}