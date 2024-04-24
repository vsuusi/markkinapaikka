import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import NewListingPage from './pages/NewListingPage';
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';
import ErrorPage from './pages/ErrorPage';

import Header from './components/Header';
import Listings from './components/Listings';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Listings />
      <Footer />
    </>
  );
}

export default App;
