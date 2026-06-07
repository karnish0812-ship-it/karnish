import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="container">
                <li className="link"><Link className="link" to="">Home</Link></li>
                <li className="link"><Link className="link" to="/about">About</Link></li>
                <li className="link"><Link className="link" to="/contact">Contact</Link></li>
                <li className="link"><Link className="link" to="/service">Service</Link></li>
                <li className="link">
                <Link className="Link"to="/parent">prop</Link>
                </li>
                <li className="link">
                <Link className="Link"to="/useState">useState</Link>
                </li>
                <li className="link">
                <Link className="Link"to="/useEffect">useEffect</Link>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default Navbar