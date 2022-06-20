import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-items-container">
      <div className="img-wave-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-img"
        />
        <p className="wave-heading">Wave</p>
      </div>
      <div>
        <ul className="link-lists">
          <li>
            <Link className="list-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="list-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="list-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
