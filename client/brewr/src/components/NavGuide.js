import React from 'react';
import { Link } from 'react-router-dom';

function NavGuide() {
  return (
    <nav className="navGuide">
      <div className="navButton">
        <Link to="/">Home</Link>
        <Link to="/ingredientsType">Ingredients Info</Link>
        <Link to="/ingredientsList">Ingredients list</Link>
        <Link to="/styles">Styles of Beer</Link>
        <Link to="/beerList">Beer Recipes</Link>
      </div>
    </nav>
  );
}

export default NavGuide;
