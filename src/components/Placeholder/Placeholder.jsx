import './Placeholder.scss'
import { BiSearchAlt2 } from'react-icons/bi'

function Placeholder() {
  return (
    <div>
        <div className="placeholder">
            <div className="location">
                <h5>Location</h5>
                <span>Add location</span>
            </div>
            <div className="guests">
                <h5>Guests</h5>
                <span>Add guests</span>
            </div>
            <div className="search-button">
                <button><BiSearchAlt2 className='icon' />Search</button>
            </div>
        </div>
    </div>
  )
}

export default Placeholder