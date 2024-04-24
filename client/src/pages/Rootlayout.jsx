import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

function Rootlayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Rootlayout;
