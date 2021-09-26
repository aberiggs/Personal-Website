import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="Navbar">
            <header className="Navbar-header">
                <nav className="Navbar-nav">
                    <li>
                        <Link to="/" className="Navbar-home-link">Abe Riggs</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>    
                </nav>
            </header>
        </div>
    );

}

export default Navbar;