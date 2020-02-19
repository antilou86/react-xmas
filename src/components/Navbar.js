import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
const Navbar = () => {
  return (
    <div className="navBar">
        <div className="navItems">
          <Link to="/works" className="link">Works</Link>
          <Link to="/" className="link">About</Link>
          <Link to="/contact" className="link">Contact</Link>
        </div>

    </div>
  );
};

export default Navbar;