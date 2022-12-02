import { Link } from 'react-router-dom';
import logo from '../assets/FBI-logo.png';

const Navbar = () => (
  <nav className="navbar ">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} width="200" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <Link to="/" className="navbar-item has-text-white">
            Home
          </Link>
          <Link to="/wantedList" className="navbar-item has-text-white">
            Wanted List
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
