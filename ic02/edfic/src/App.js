// src/App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import PrivateRoute from './components/PrivateRoutes';
import CadastroProfessores from './components/CadastroProfessores';
import CoordenacaoHome from './components/CoordenacaoHome/CoordenacaoHome';

function App() {
    return (
        <Router>
     
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route 
          path="/cadastrar-prof" 
          element={
            <PrivateRoute>
              <CadastroProfessores />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/coordenacao-home" 
          element={
            <PrivateRoute>
              <CoordenacaoHome />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>       
    );
}

export default App;
