// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ResumeProvider } from './context/resumeContext'; // Import the ResumeProvider
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Templates from './pages/Templates';
import Editor from './pages/Editor';

const App: React.FC = () => {
  return (
    <ResumeProvider>
      <Router>
        {/* Navbar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/templates">Templates</Link></li>
            <li><Link to="/editor"><button>Create My Resume</button></Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </Router>
    </ResumeProvider>
  );
};

export default App;
