import './Home.scss'
import image1 from '../assets/img.jpeg'
import { AiFillStar } from'react-icons/ai'

function Home() {
    return (
    <div className='home'>
        <div className='home-text'>
            <h2>Stays in Finland</h2>
            <span>12+ stays</span>
        </div>
        <div className="img-container">
            <img src={image1} alt="" />
            <div className="image-text">
                <h4>Super host</h4>
                <p>Entire apartment . 2 beds</p>
                <AiFillStar className='rating'/>
                <span>4.40</span>
            </div>
            <p>Stylish apartment in center of the city</p>
        </div>
    </div>
    )
}

export default Home
