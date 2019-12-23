import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <h1>Designs By LeaLyn</h1>
        <div>
          <Link to="/Works">Home</Link>
          <Link to="/Artist">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
    </div>
  );
};

export default Navbar;