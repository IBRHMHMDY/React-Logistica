import {FaBars} from 'react-icons/fa'
import {BtnToggle, NavItem} from './Nav/index'

const Navbar = () => {
  return (
   <>
   <BtnToggle>
      <FaBars/>
   </BtnToggle>
   <NavItem/>
   </>
  )
}

export default Navbar