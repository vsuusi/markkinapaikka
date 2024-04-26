import { FaUser, FaLock } from 'react-icons/fa';

import './SignupForm.css';

function SignupFrom() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <form action="">
          <h1>Sign up</h1>
          <div className="signup-input-box">
            <input type="text" placeholder="Sähköposti" required />
            <FaUser className="signup-icon" />
          </div>
          <div className="signup-input-box">
            <input type="text" placeholder="Nimi" required />
            <FaUser className="signup-icon" />
          </div>
          <div className="signup-input-box">
            <input type="password" placeholder="Salasana" required />
            <FaLock className="signup-icon" />
          </div>

          <button type="submit">Rekisteröidy</button>
        </form>
      </div>
    </div>
  );
}

export default SignupFrom;
