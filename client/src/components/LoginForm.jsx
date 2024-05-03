import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { loginUser } from '../../api/users';

import './LoginForm.css';

function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    loginUser(formData)
      .then((resp) => {
        console.log(resp);
        navigate('/');
        // catch try tähän error handle formiin ja toast kun success!
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={onSubmitHandler}>
          <h1>Login</h1>
          <div className="login-input-box">
            <input ref={emailRef} type="text" placeholder="Sähköposti" required />
            <FaUser className="login-icon" />
          </div>
          <div className="login-input-box">
            <input ref={passwordRef} type="password" placeholder="Salasana" required />
            <FaLock className="login-icon" />
          </div>

          <button type="submit">Kirjaudu sisään</button>

          <div className="login-forgot">
            <a href="#">Salasana unohtunut?</a>
          </div>

          <div className="login-register">
            <p>
              Ei vielä käyttäjätunnusta?
              <Link to="/signup">Luo käyttäjä </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
