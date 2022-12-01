import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar is-dark">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Home
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
