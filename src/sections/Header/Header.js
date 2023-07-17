import { Brand, Navbar } from '../../components/index'
import './Header.css'

const Header = () => {
  return (
    <nav className='header navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0'>
      <Brand URL="/">
        <h2 className="mb-2 text-white">Logistica</h2>
      </Brand>
      <Navbar/>
    </nav>
  )
}

export default Header