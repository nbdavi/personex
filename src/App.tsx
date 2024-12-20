import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar apenas para rotas públicas
import Homepage from './pages/Homepage';
import LoginSignup from './pages/LoginSignup';
import Dashboard from './pages/Dashboard/Dashboard';
import Campaigns from './pages/Campaigns/Campaigns';

const App: React.FC = () => {
  return (
    <div>
      {/* Rotas Públicas */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <LoginSignup />
            </>
          }
        />

        {/* Rotas Privadas */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campaigns" element={<Campaigns />} />
      </Routes>
    </div>
  );
};

export default App;
