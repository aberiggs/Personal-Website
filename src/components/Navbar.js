import {Link} from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    return (
        <div className="Navbar">
            <header className="Navbar-header">
                <nav className="Navbar-nav">
                    <ul>
                        <li className="Navbar-home"><Link to="/" className="Navbar-home-link">Abe Riggs</Link></li>
                        <li><Link to="/projects">Projects</Link></li> 
                    </ul>
                </nav>
            </header>
        </div>
    );

}

export default Navbar;