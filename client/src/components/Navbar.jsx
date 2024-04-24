import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-title">
        <Link to="/">
          <h3>Markkinapaikka</h3>
        </Link>
      </div>
      <div className="navbar-buttons">
        <Link to="/new">
          <button>+ Uusi ilmoitus</button>
        </Link>
        <Link to="/user">
          <button>Profiili</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
