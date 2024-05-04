import {
  useState, useCallback, useMemo, useEffect,
} from 'react';
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

  const login = useCallback((uid, loginToken) => {
    setToken(loginToken);
    setuser(uid);
    localStorage.setItem(
      'userData',
      JSON.stringify({ userId: uid, token }),
    );
  }, [token]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.token) {
      login(storedData.userId, storedData.token);
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
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/signup', element: <SignupPage /> },
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
