import './Placeholder.scss'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Placeholder({ onSearchClick }) {
    const [showLocations, setShowLocations] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('Add location');
    const [locations, setLocations] = useState([]);
    const [guests, setGuests] = useState(false);
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    useEffect(() => {
    fetch('/stays.json')
        .then((response) => response.json())
        .then((data) => setLocations(data))
        .catch((error) => console.error('Error fetching locations:', error));
    }, []);

    const handleLocationClick = () => {
        setShowLocations(!showLocations);
    };

    const handleLocationSelect = (location) => {
        const formattedLocation = `${location.city}, ${location.country}`;
        setSelectedLocation(formattedLocation);
        setShowLocations(false);
    };

    const handleGuestClick = () => {
        setGuests(!guests);
    };

    // filter out duplicate locations
    const uniqueLocations = locations.filter((value, index, self) => {
    return (
        self.findIndex((location) => location.city === value.city) === index
    );
    });

    const incrementAdults = () => {
        setAdultCount(adultCount + 1);
    };
    
    const decrementAdults = () => {
        if (adultCount > 0) {
            setAdultCount(adultCount - 1);
        }
    };
    
    const incrementChildren = () => {
        setChildCount(childCount + 1);
    };
    
    const decrementChildren = () => {
        if (childCount > 0) {
            setChildCount(childCount - 1);
        }
    };

    const totalGuests =  adultCount + childCount;

    const searchLocations = () => {
        const filteredLocations = locations.filter((location) => {

            const cityMatch = location.city.toLowerCase() === selectedLocation.toLowerCase();
    
            const maxGuestsMatch = location.maxGuests >= totalGuests;
    
            return cityMatch && maxGuestsMatch;
        });

        console.log (filteredLocations);
    }

    const handleSearchClick = () => {
        if (onSearchClick) {
            onSearchClick();
        }
        searchLocations();
    };
    
    return (
    <div>
    <div className="placeholder">
        <div className="location" onClick={handleLocationClick}>
            <h5>Location</h5>
            <span>{selectedLocation}</span>
        </div>

        <>
        {guests ? (
        <div className="guests" onClick={handleGuestClick}>
            <h5>Guests</h5>
                {<span>{totalGuests} guests</span>}
            </div>
        ) : (
        <div className="guests" onClick={handleGuestClick}>
            <h5>Guests</h5>
            <span>Add guests</span>
        </div>
        )}      
        </>
        
        <div>
            <button className="search-button" onClick={handleSearchClick}>
                <BiSearchAlt2 className='icon' />Search
            </button>
        </div>
    </div>
        {showLocations && (
            <ul className="location-list">
                {uniqueLocations.map((location) => (
                <li key={location.city} onClick={() => handleLocationSelect(location)}>
                    <FontAwesomeIcon icon={faLocationDot} className="location-icon" /> {location.city}, {location.country}
                </li>
            ))}
            </ul>
        )}

        {guests && (
        <div className="add-guests">
        <div>
            <h4>Adults</h4>
            <span>Ages 13 or above</span>
            <button onClick={decrementAdults}>-</button>
            {adultCount}
            <button onClick={incrementAdults}>+</button>
        </div>
        <div>
            <h4>Children</h4>
            <span>Ages 2-12</span>
            <button onClick={decrementChildren}>-</button>
            {childCount}
            <button onClick={incrementChildren}>+</button>
        </div>
        </div>
        )}
    </div>
    );
}

export default Placeholder;
