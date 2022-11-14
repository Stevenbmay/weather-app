import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import LoginPage from './components/LoginPage';
import WeatherPage from './components/weatherPage';
import { LoginPageWithAuth, PrivateRoute, PublicRoute, WeatherPageWithAuth } from './shared/componets/AuthRoute';
import Menu from './shared/componets/Menu';
import { useUserContext } from './shared/context/UserContext';
function App() {
  const { setUser } = useUserContext();
  const [isFetched, setIsFetched] = useState(false);
  useQuery(["userInfo"], () => axios.get("/api/users/verify"), {
    onSettled: (res) => {
      setIsFetched(true);
      if (res?.data?.success) {
        setUser(res.data.data.user);
      }
    },
    enabled: !isFetched,
    retry: 0,
    staleTime: Infinity,
    refetchOnMount: false,
  });
  if (!isFetched) return <></>;

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/login" element={<PublicRoute component={<LoginPage />} />} />
        <Route path="/weather" element={<PrivateRoute component={<WeatherPage />} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
