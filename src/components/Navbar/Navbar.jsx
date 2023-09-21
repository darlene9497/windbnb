import './Navbar.scss'
import logo from '../assets/logo.png'
import { BiSearchAlt2 } from'react-icons/bi'
import { useState } from'react'
import Placeholder from '../Placeholder/Placeholder'

function Navbar() {
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  const handleSearchClick = () => {
    setShowPlaceholder(!showPlaceholder);
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <div onClick={handleSearchClick} className="search-bar">
        <span className="location">Helsinki, Finland</span>
        <span className="guests">Add guests</span>
        <BiSearchAlt2 className="search-icon" />
      </div>
      {showPlaceholder && <div className="blurred-background"><Placeholder /></div>}
    </div>
  )
}

export default Navbar