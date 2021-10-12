import {Link} from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar-home">
                <ul>
                    <li><Link to="/" className="Navbar-home-link">Abe Riggs</Link></li>
                </ul>
            </div>
            <div className="Navbar-main">
                <ul>
                    <li><Link to="/projects">Projects</Link></li> 
                    <li><Link to="/contact">Contact Me</Link></li> 
                </ul>
            </div>     
        </div>
    );

}

export default Navbar;