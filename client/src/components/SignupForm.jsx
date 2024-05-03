import { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
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

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      password: passwordRef.current.value,
    };

    signUpUser(formData)
      .then((signUpResponse) => {
        console.log(signUpResponse);
        return loginUser(formData);
      })
      .then((loginResponse) => {
        console.log('User logged in successfully:', loginResponse);
        auth.login(loginResponse.id, loginResponse.token);
        toast.success('Rekisteröinti onnistui!');
        navigate('/');
        // catch try tähän error handle formiin ja toast kun success!
      })
      .catch((error) => {
        console.error('error: ', error);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <form onSubmit={onSubmitHandler}>
          <h1>Sign up</h1>
          <div className="signup-input-box">
            <input ref={emailRef} type="text" placeholder="Sähköposti" required />
            <FaUser className="signup-icon" />
          </div>
          <div className="signup-input-box">
            <input ref={nameRef} type="text" placeholder="Nimi" required />
            <FaUser className="signup-icon" />
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
