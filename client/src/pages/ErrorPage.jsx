import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function ErrorPage() {
  return (
    <>
      <Navbar />
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh',
      }}
      >
        <h2>Oh no, seems like you are lost...</h2>
        <p>
          Click
          <span>
            {' '}
            <Link to="/">here</Link>
            {' '}
          </span>
          to return to the main page.
        </p>
      </div>
    </>
  );
}

export default ErrorPage;
