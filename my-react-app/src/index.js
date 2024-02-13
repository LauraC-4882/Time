import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import Nav from './components/Nav.jsx';
import About from './components/about.jsx';
import Letter from './components/letter.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
