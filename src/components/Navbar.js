import { Link } from 'react-router-dom';
import logo from '../assets/FBI-logo.png';

const Navbar = () => (
  <nav className="navbar ">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item logo" href="/">
          <img src={logo} style={{ minWidth: 80, minHeight: 80 }} />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
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
