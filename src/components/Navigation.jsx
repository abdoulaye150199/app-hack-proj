import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">⚓</span>
          <span className="logo-text">
            SEN-MOOL <span className="logo-protect">PROTECT</span>
          </span>
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/mool-safe" className="nav-link">
              Mool-Safe
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
        </ul>

        <div className="nav-flags">
          <span className="flag">🇸🇳</span>
          <span className="flag">🇫🇷</span>
        </div>
      </div>
    </nav>
  )
}
