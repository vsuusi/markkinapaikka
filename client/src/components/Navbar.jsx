import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../resources/logo.png';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-title">
        <Link to="/">
          <button>
            <img className="navbar-logo" src={logo} alt="MarkkinaPaikka" />
          </button>
        </Link>
      </div>
      <div className="navbar-buttons">
        <Link to="/new">
          <button>+ Uusi ilmoitus</button>
        </Link>
        <Link to="/user">
          <button>Profiili</button>
        </Link>
        <Link to="/login">
          <button>Kirjaudu</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
