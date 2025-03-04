import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import styles if needed

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">Resume Builder</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/templates">Templates</Link></li>
      </ul>
      <Link to="/editor">
        <button className="resume-btn">Create My Resume</button>
      </Link>
    </nav>
  );
};

export default NavBar;
