/* eslint-disable jsx-a11y/label-has-associated-control */
import {
    faCar,
    faHotel,
    faPersonWalkingLuggage,
    // eslint-disable-next-line prettier/prettier
    faSailboat
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Outlet } from 'react-router-dom';
import './bannerSearch.css';

function BannerSearch() {
    return (
        <div className="bannerBackImage">
            <div className="banner">
                <div className="iconContainer">
                    <div className="bannerSearchText">
                        <h1 className="bannerTitle">ADVENTURE</h1>
                        <p className="bannerDesc">THE WORLD YOU HAVE NEVER SEEN</p>
                    </div>
                    <div className="bannerSearch">
                        <div className="searchItem">
                            <Link to="/car" className="icon active">
                                <FontAwesomeIcon icon={faCar} />
                            </Link>

                            <Link to="/hotel" className="icon">
                                <FontAwesomeIcon icon={faHotel} />
                            </Link>
                            <Link to="people" className="icon">
                                <FontAwesomeIcon icon={faPersonWalkingLuggage} />
                            </Link>

                            <Link to="pCar" className="icon">
                                <FontAwesomeIcon icon={faCar} />
                            </Link>
                            <Link to="boat" className="icon">
                                <FontAwesomeIcon icon={faSailboat} />
                            </Link>
                        </div>

                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerSearch;
