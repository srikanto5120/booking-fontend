/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { faArrowLeft, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import MenuItem from '../../NavbarItem';
import './navbar.css';

function Navbar() {
    const [open, setOpen] = useState(true);

    return (
        <div className="navbar">
            <ul className={open ? 'navbarContainer' : 'navbar-mobile'}>
                <div className="navIcon">
                    <input type="text" className="navInput" placeholder="search here" />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                {MenuItem.map((item, index) => (
                    <li key={index} className="navItem">
                        <a href={item.link}>{item.title}</a>
                        <hr className="linkHr" />
                    </li>
                ))}
            </ul>
            <div className="bars" onClick={() => setOpen(!open)}>
                {open ? (
                    <FontAwesomeIcon className="barIcon" icon={faBars} />
                ) : (
                    <FontAwesomeIcon className="barIcon" icon={faArrowLeft} />
                )}
            </div>
        </div>
    );
}

export default Navbar;
