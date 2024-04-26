import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import NewListingPage from './pages/NewListingPage';
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';
import ErrorPage from './pages/ErrorPage';
import Rootlayout from './pages/Rootlayout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/signup', element: <SignupPage />},
        { path: '/user', element: <UserPage /> },
        { path: '/new', element: <NewListingPage /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
