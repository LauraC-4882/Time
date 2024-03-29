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
import About from './pages/about/About';
// import About from "./pages/about/About"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <About />
    <Home />
      <Router>
        <Routes>
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         </Routes>
      </Router> 
  </React.StrictMode>
);