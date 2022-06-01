import { faPersonWalkingLuggage, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './explore.css';

function Explore() {
    return (
        <div className="explore">
            <h4>
                BE BORN AGAIN
                <FontAwesomeIcon className="exploreIcon" icon={faPersonWalkingLuggage} />
            </h4>

            <h1>WE ARE EXPLORE</h1>

            <div className="exploreContainer">
                <div className="exploreItem">
                    <p>
                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magn aliqua. Ut eim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex commodo consequat uisas aute irure.
                    </p>
                    <div className="exploreInfo">
                        <div className="exploreInfoItem">
                            <FontAwesomeIcon className="exploreDescIcon" icon={faSquareEnvelope} />
                            <div className="exploreDesc">
                                <a href="index.html">We Offer Daily Tours</a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                                    quo!
                                </p>
                            </div>
                        </div>
                        <div className="exploreInfoItem">
                            <FontAwesomeIcon className="exploreDescIcon" icon={faSquareEnvelope} />
                            <div className="exploreDesc">
                                <a href="index.html">Accessibility Manager</a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                                    quo!
                                </p>
                            </div>
                        </div>
                        <div className="exploreInfoItem">
                            <FontAwesomeIcon className="exploreDescIcon" icon={faSquareEnvelope} />
                            <div className="exploreDesc">
                                <a href="index.html">+120 Premium City</a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                                    quo!
                                </p>
                            </div>
                        </div>
                        <div className="exploreInfoItem">
                            <FontAwesomeIcon className="exploreDescIcon" icon={faSquareEnvelope} />
                            <div className="exploreDesc">
                                <a href="index.html">5 Starts Recomendtion</a>
                                <p>Lorem ipsum dolor sit adipisicing elit. Saepe, quo!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="exploreItem mobile">
                    <img
                        src="http://swlabs.co/exploore/html/assets/images/homepage/about-us-3.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Explore;
