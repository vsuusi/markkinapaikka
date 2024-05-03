import { useState, useCallback, useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './context/authcontext';

import './App.css';

import NewListingPage from './pages/NewListingPage';
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';
import ErrorPage from './pages/ErrorPage';
import Rootlayout from './pages/Rootlayout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  const [token, setToken] = useState(false);
  const [userId, setuser] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setuser(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setuser(null);
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/signup', element: <SignupPage /> },
        { path: '/user', element: <UserPage /> },
        { path: '/new', element: <NewListingPage /> },
      ],
    },
  ]);

  return useMemo(() => (
    <>
      <Toaster />
      <AuthContext.Provider value={{
        isLoggedIn: !!token,
        token,
        userId,
        login,
        logout,
      }}
      >
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </>
  ), [token, userId, login, logout, router]);
}

export default App;
