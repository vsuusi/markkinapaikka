import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUser, FaPhone, FaEnvelope, FaRegClock,
} from 'react-icons/fa';
import { AuthContext } from '../context/authcontext';
import Listings from './Listings.jsx';
import { getUserById } from '../../api/users.js';

import avatar from '../../resources/avatar.png';

import './Profile.css';

function Profile() {
  const [userData, setUserData] = useState([]);
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    auth.logout();
    navigate('/');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserById(auth.userId);
        setUserData(data);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchUserData();
  }, [auth.userId]);

  const dateParser = (dateString) => {
    const date = new Date(dateString);
    const currentDate = new Date();
    const differenceInMilliseconds = currentDate - date;
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const daysSince = Math.floor(differenceInMilliseconds / millisecondsInADay);

    return daysSince;
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
          <p>
            <FaUser className="login-icon" />
            {' '}
            {userData.name}
          </p>
          <p>
            <FaEnvelope className="login-icon" />
            {' '}
            {userData.email}
          </p>
          <p>
            <FaPhone className="login-icon" />
            {' '}
            {userData.phone}
          </p>
          <p>
            <FaRegClock className="login-icon" />
            {' '}
            Markkinapaikalla
            {' '}
            {dateParser(userData.date_created)}
            {' '}
            päivää!
          </p>
        </div>
      </div>
      <h3>Minun ilmoitukseni</h3>
      <Listings userid={auth.userId} />
    </div>
  );
}

export default Profile;
