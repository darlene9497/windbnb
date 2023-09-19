import './Home.scss';
import { AiFillStar } from 'react-icons/ai';
import { useEffect, useState } from 'react';

function Home() {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    fetch('/stays.json') /** stays.json is in the public directory */
      .then((response) => response.json())
      .then((data) => setStays(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); /** empty dependency array means this effect runs once when the component mounts*/ 

  return (
    <div className='home'>
      <div className='home-text'>
        <h2>Stays in Finland</h2>
        <span>12+ stays</span>
      </div>
      <div className="cards-container">
        {stays.map((stay, index) => (
          <div key={index} className="img-container">
            <img src={stay.photo} alt="" />
            <div className="image-text">
              {stay.superHost && <h6>Super host</h6>}
              <p>
                {stay.type === "Entire apartment" ? `${stay.type} . ${stay.beds} beds`: stay.type}
              </p>
              <div className="rating-container">
                <AiFillStar className='rating' />
                <span>{stay.rating}</span>
              </div>
            </div>
            <p>{stay.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

