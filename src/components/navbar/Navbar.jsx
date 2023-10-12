import Logo from '../../image/logo.png';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
        HomeCloud
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Main</Link>
        <Link to="/registration" className="nav-link">Sign-Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
