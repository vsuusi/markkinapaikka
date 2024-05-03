import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authcontext';
import Listings from './Listings.jsx';

import avatar from '../../resources/avatar.png';

import './Profile.css';

function Profile() {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    auth.logout();
    navigate('/');
  };

  return (
    <div className="profile-container">
      <div className="profile-logout">
        <button onClick={handleLogOut}>Kirjaudu ulos</button>
      </div>
      <div className="profile-info">
        <div className="info-left">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="info-right">
          <p>Name: </p>
          <p>Email: </p>
          <p>Phone: </p>
          <p>Prefered contact: </p>
        </div>
      </div>
      <h3>Minun ilmoitukseni</h3>
      <Listings />
    </div>
  );
}

export default Profile;
