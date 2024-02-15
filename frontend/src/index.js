import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home />
      <Router>
        <Routes>
        
        <Route path="/" element={<Profile />} /> 
        </Routes>
      </Router>
  </React.StrictMode>
);