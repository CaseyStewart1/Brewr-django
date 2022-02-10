import React from 'react';

function NavGuide() {
  return (
    <nav className="navGuide">
      <div className="navButton">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Find Us</Link>
        <Link to="/">Beer</Link>
        <Link to="/">Learn</Link>
      </div>
    </nav>
  );
}

export default NavGuide;
