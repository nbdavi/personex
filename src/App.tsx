import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar apenas para rotas públicas
import Homepage from './pages/Homepage';
import LoginSignup from './pages/LoginSignup';
import Dashboard from './pages/Dashboard/Dashboard';
import Campaigns from './pages/Campaigns/Campaigns';
import PrivateLayout from './components/PrivateLayout'; // Layout para rotas privadas

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        {/* Rotas públicas */}
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
        <Route
          path="/product"
          element={
            <>
              <Navbar />
              <div>
                <h1>Produto</h1>
                <p>Detalhes sobre o produto.</p>
              </div>
            </>
          }
        />
        <Route
          path="/integrations"
          element={
            <>
              <Navbar />
              <div>
                <h1>Integrações</h1>
                <p>Informações sobre integrações.</p>
              </div>
            </>
          }
        />
        <Route
          path="/cases"
          element={
            <>
              <Navbar />
              <div>
                <h1>Cases</h1>
                <p>Exemplos de casos de sucesso.</p>
              </div>
            </>
          }
        />
        <Route
          path="/academy"
          element={
            <>
              <Navbar />
              <div>
                <h1>Academy</h1>
                <p>Recursos educacionais para aprender mais.</p>
              </div>
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
              <Navbar />
              <div>
                <h1>Pricing</h1>
                <p>Detalhes sobre planos e preços.</p>
              </div>
            </>
          }
        />

        {/* Rotas privadas */}
        <Route
          path="/dashboard"
          element={
            <PrivateLayout>
              <Dashboard />
            </PrivateLayout>
          }
        />
        <Route
          path="/campaigns"
          element={
            <PrivateLayout>
              <Campaigns />
            </PrivateLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
