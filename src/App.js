import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';
import TecnicoPage from './pages/TecnicoPage';
import ClientePage from './pages/ClientePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/tecnico" element={<TecnicoPage />} />
        <Route path="/cliente" element={<ClientePage />} />
      </Routes>
    </Router>
  );
}

export default App;
