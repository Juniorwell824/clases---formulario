// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FormularioPublico from './components/FormularioPublico';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormularioPublico />} />
        <Route path="/inscripcion" element={<FormularioPublico />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
