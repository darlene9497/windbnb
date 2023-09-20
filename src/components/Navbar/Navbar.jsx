import './Navbar.scss'
import logo from '../assets/logo.png'
import { BiSearchAlt2 } from'react-icons/bi'

function Navbar() {
  function onSearch() {
    console.log('search')
  }

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <div onClick={onSearch} className="search-bar">
        <span className="location">
          Helsinki, Finland
        </span>
        <span className="guests">
          Add guests
        </span>
          <BiSearchAlt2 className="search-icon" />
      </div>
    </div>
  )
}

export default Navbar