import { faComment, faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './tour.css';

function Tour({ tour }) {
    const { img, name, like, share, comments } = tour;
    return (
        <div className="tour">
            <div className="tourImg">
                <img src={img} alt="" />
                <div className="placeName">
                    <h2 className="tourName">{name}</h2>
                    <h1>
                        <FontAwesomeIcon icon={faCirclePlus} />
                    </h1>
                </div>
            </div>
            <div className="list-info">
                <div className="list-item">
                    <FontAwesomeIcon className="list-icon" icon={faHeart} />
                    {like}
                </div>
                <div className="list-item share">
                    <FontAwesomeIcon className="list-icon" icon={faEye} />
                    {share}
                </div>
                <div className="list-item">
                    <FontAwesomeIcon className="list-icon" icon={faComment} />
                    {comments.user}
                </div>
            </div>
            <div className="tour-info">
                <div className="tourDetails">
                    <sup className="usd">$</sup>
                    <span className="price">350</span> <sub>2days 3nights</sub>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, aspernatur?</p>
                <button className="tourBtn bookingBtn" type="button">
                    Book Now
                </button>
                <button className="tourBtn addListBtn" type="button">
                    Add To List
                </button>
            </div>
        </div>
    );
}

export default Tour;
