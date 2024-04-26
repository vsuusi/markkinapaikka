import './Profile.css';

import Listings from './Listings.jsx';

function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-info">
                <div className="info-left">
                </div>
                <div className="info-right">
                    <p>Name: </p>
                    <p>Email: </p>
                    <p>Phone: </p>
                    <p>Prefered contact: </p>
                </div>
            </div>
            <h3>My listings</h3>
            <Listings />
        </div>
    );
};

export default Profile;