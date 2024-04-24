import { FaUser, FaLock } from 'react-icons/fa';

import './LoginForm.css';

function LoginForm() {
  return (
    <div className="login-container">
      <div className="login-form">
        <form action="">
          <h1>Login</h1>
          <div className="login-input-box">
            <input type="text" placeholder="Sähköposti" required />
            <FaUser className="login-icon" />
          </div>
          <div className="login-input-box">
            <input type="password" placeholder="Salasana" required />
            <FaLock className="login-icon" />
          </div>

          <button type="submit">Kirjaudu sisään</button>

          <div className="login-forgot">
            <a href="#">Salasana unohtunut?</a>
          </div>

          <div className="login-register">
            <p>
              Ei vielä käyttäjätunnusta?
              <a href="#"> Luo käyttäjä</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
