import { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { loginUser } from '../../api/users';
import { AuthContext } from '../context/authcontext';

import './LoginForm.css';

function LoginForm() {
  const auth = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const resp = await loginUser(formData);
      auth.login(resp.id, resp.token);
      console.log('logged in!:', resp);
      toast.success('Kirjauduttu sisään!');
      navigate('/');
    } catch (err) {
      toast.error('Kirjautuminen epäonnistui. Yritä myöhemmin uudelleen.', {
        id: 'loginerror',
      });
      console.log(err);
    }

    // catch try tähän error handle formiin ja toast kun success!
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
            <a href="/login">Salasana unohtunut?</a>
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
