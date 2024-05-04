import {
  useState, useCallback, useMemo, useEffect,
} from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './context/authcontext';

import './App.css';

import NewListingPage from './pages/NewListingPage';
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';
import Rootlayout from './pages/Rootlayout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  const [token, setToken] = useState(false);
  const [userId, setuser] = useState(false);

  const login = useCallback((uid, loginToken) => {
    setToken(loginToken);
    setuser(uid);
    localStorage.setItem(
      'userData',
      JSON.stringify({ userId: uid, loginToken }),
    );
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.loginToken) {
      login(storedData.userId, storedData.loginToken);
    }
  }, [login]);

  const logout = useCallback(() => {
    setToken(null);
    setuser(null);
    localStorage.removeItem('userData');
  }, []);

  const authContextValue = useMemo(() => ({
    isLoggedIn: !!token,
    token,
    userId,
    login,
    logout,
  }), [token, userId, login, logout]);

  if (token) {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Rootlayout />,
        children: [
          { path: '/', element: <LandingPage /> },
          { path: '/login', element: <LoginPage /> },
          { path: '/signup', element: <SignupPage /> },
          { path: '/user', element: <UserPage /> },
          { path: '/new', element: <NewListingPage /> },
          { path: '*', element: <Navigate to="/" replace /> },
        ],
      },
    ]);

    return (
      <>
        <Toaster />
        <AuthContext.Provider value={authContextValue}>
          <RouterProvider router={router} />
        </AuthContext.Provider>
      </>
    );
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/signup', element: <SignupPage /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ]);

  return (
    <>
      <Toaster />
      <AuthContext.Provider value={authContextValue}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </>
  );
}

export default App;
