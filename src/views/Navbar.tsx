/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from "react-router-dom"


const Navbar = () => {

    return(
        // Basic Bulma navbar
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">Home</Link>
                    <Link to="/calc" className="navbar-item">FFC</Link>
                    <Link to="/" className="navbar-item">Autograd</Link>
                    <Link to="/cityinfo" className="navbar-item">City Info</Link>
                </div>

                <div className="navbar-end mx-3">
                    <a className="navbar-item">
                        About
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar