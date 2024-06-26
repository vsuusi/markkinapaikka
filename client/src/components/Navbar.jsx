import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authcontext';

import './Navbar.css';
import logo from '../../resources/logo.png';

function Navbar() {
  const auth = useContext(AuthContext);

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
        {auth.isLoggedIn && (
          <Link to="/new">
            <button>+ Uusi ilmoitus</button>
          </Link>
        )}
        {auth.isLoggedIn && (
          <Link to="/user">
            <button>Profiili</button>
          </Link>
        )}
        {!auth.isLoggedIn && (
          <Link to="/login">
            <button>Kirjaudu</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
