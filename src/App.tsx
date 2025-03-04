// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ResumeProvider } from './context/resumeContext'; // Import the ResumeProvider
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Templates from './pages/Templates';
import Editor from './pages/Editor';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <ResumeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <NavBar />

          {/* Main Content */}
          <div className="flex-grow p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/editor" element={<Editor />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ResumeProvider>
  );
};

export default App;