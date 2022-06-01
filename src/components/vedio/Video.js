/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/media-has-caption */
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../images/video-bg.jpg';
import './video.css';

function Video() {
    return (
        <div className="videoContainer">
            <div className="videoTitle">
                <div className="videoDesc">
                    <h1 className="videoHeading">IT’S A BIG WORLD OUT THERE</h1>
                    <p className="videoText">
                        There are many variations of passages of. Lorem Ipsum available, <br /> but
                        the majority have suffered.
                    </p>
                </div>
            </div>
            <div className="videoImg">
                <img src={img} alt="" />
                <FontAwesomeIcon className="videoIcon" icon={faCirclePlay} />
            </div>
        </div>
    );
}

export default Video;
