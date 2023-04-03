import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFontAwesome, faFacebook, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons'
import { Route, Routes, Link } from "react-router-dom";
import GroceryBud from "../GroceryBud";

import './Navbar.css'

function Navbar() {
    return ( 
        <div className="navbar">
                <div className="navbar__width">
                    <div className="navbar__title">
                        <h2 className="navbar__title-code">Coding</h2>
                        <h2 className="navbar__title-addict">Addict</h2>
                    </div>
                    <div className="navbar__navigation">
                        <Link to={'/about'} className="navbar__navigation-item">Home</Link>
                        <Link to={'/about'} className="navbar__navigation-item">About</Link>
                        <Link to={'/about'} className="navbar__navigation-item">Project</Link>
                        <Link to={'/about'} className="navbar__navigation-item">Contact</Link>
                        <Link to={'/about'} className="navbar__navigation-item">Profile</Link>
                    </div>
                    <div className="navbar__social">
                        <a className="navbar__social-icon" href="https://twitter.com/"><FontAwesomeIcon  icon={faTwitter} /></a>
                        <a className="navbar__social-icon" href="https://twitter.com/"><FontAwesomeIcon  icon={faFacebook} /></a>
                        <a className="navbar__social-icon" href="https://twitter.com/"><FontAwesomeIcon  icon={faLinkedin} /></a>
                        <a className="navbar__social-icon" href="https://twitter.com/"><FontAwesomeIcon  icon={faBehance} /></a>
                    </div>
                <Routes>
                     <Route path="/about" element={<GroceryBud />} />
                </Routes>
                </div>
        </div>


     );
}

export default Navbar;