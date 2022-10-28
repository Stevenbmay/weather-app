import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import LoginPage from './components/LoginPage';
import WeatherPage from './components/weatherPage';
import { PrivateRoute, PublicRoute } from './shared/componets/AuthRoute';
import Menu from './shared/componets/Menu';

function App() {
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
