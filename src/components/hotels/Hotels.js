import { useEffect, useState } from 'react';
import Hotel from './hotel/Hotel';
import './hotels.css';

function Hotels() {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/hotels.json')
            .then((res) => res.json())
            .then((data) => setHotels(data));
    }, []);
    return (
        <div className="hotelsContainer">
            <div className="hotelsHeading">
                <p className="hotelsText">GUARANTEED QUALITY</p>
                <h1 className="hotelsHeading">recommended hotels</h1>
            </div>
            {hotels.map((hotel) => (
                <Hotel hotel={hotel} />
            ))}
        </div>
    );
}

export default Hotels;
