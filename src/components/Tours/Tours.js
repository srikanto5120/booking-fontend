import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Tour from './Tour/Tour';
import './tours.css';

function Tours() {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/tours.json')
            .then((res) => res.json())
            .then((data) => setTours(data));
    }, []);
    return (
        <div className="toursContainer">
            <p className="toursText">
                PACK AND GO <FontAwesomeIcon icon={faPersonWalking} />
            </p>
            <div className="toursDesc"> AWESOME TOURS</div>
            <div className="tours">
                {tours.map((tour) => (
                    <Tour key={tour.id} tour={tour} />
                ))}
                <button className="moreBtn" type="button">
                    MORE TOURS
                </button>
            </div>
        </div>
    );
}

export default Tours;
