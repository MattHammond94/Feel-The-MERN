import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignUp from './components/SignUp'
import SignIn from './components/auth/SignIn'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);