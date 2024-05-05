import { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaUser, FaLock, FaPhone, FaEnvelope,
} from 'react-icons/fa';
import toast from 'react-hot-toast';
import { signUpUser, loginUser } from '../../api/users';
import { AuthContext } from '../context/authcontext';

import './SignupForm.css';

function SignupFrom() {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
    };

    try {
      await signUpUser(formData);
      toast.success('Rekisteröinti onnistui!');
      navigate('/login');
    } catch (err) {
      toast.error('Rekisteröiminen epäonnistui. Yritä myöhemmin uudelleen.', {
        id: 'signuperror',
      });
      throw new Error('signup + login fail', err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <form onSubmit={onSubmitHandler}>
          <h1>Sign up</h1>
          <div className="signup-input-box">
            <input ref={emailRef} type="text" placeholder="Sähköposti" required />
            <FaEnvelope className="signup-icon" />
          </div>
          <div className="signup-input-box">
            <input ref={nameRef} type="text" placeholder="Nimi" required />
            <FaUser className="signup-icon" />
          </div>
          <div className="signup-input-box">
            <input ref={phoneRef} type="number" placeholder="Puhelin" required />
            <FaPhone className="signup-icon" />
          </div>
          <div className="signup-input-box">
            <input ref={passwordRef} type="password" placeholder="Salasana" required />
            <FaLock className="signup-icon" />
          </div>
          <button type="submit">Rekisteröidy</button>
          <div className="signup-register">
            <p>
              Onko sinulla jo käyttäjätunnus?
              <Link to="/login">Kirjaudu</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupFrom;
