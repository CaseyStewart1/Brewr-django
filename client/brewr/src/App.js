import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

import HomePage from './pages/Home';
import BeerListPage from './pages/BeerListPage';
import BeerRecipePage from './pages/BeerRecipePage';
import IngredientPage from './pages/IngredientPage';
import IngredientsListPage from './pages/IngredientsListPage';
import IngredientsTypePage from './pages/IngredientsTypePage';
import StylePage from './pages/StylePage';
import RecipeCard from './components/RecipeCard';
import UserPage from './pages/UserPage';
import UserCard from './components/UserCard';
import StyleCard from './components/StyleCard';
import InTypeCard from './components/InTypeCard';
import IngredientCard from './components/IngredientCard';
import NewBeerForm from './components/NewBeerForm';
import NavGuide from './components/NavGuide';


function App() {

  const [beers, setBeers] = useState([]);
  const [styles, setStyles] = useState([]);


  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beerList" component={} />
        <Route exact path="/beerRecipe/:id" component={} />
        <Route exact path="/ingredientsType" component={} />
        <Route exact path="/ingredientsList" component={} />
        <Route exact path="/ingredient/:id" component={} />
        <Route exact path="/styleList" component={} />
        <Route exact path="/userPage" component={} />
        {/* <Route exact path="/" component={(props) => < {...} ={} />}
 /> */}
        
      </main>
      <footer>
        <div className="footer"></div>
      </footer>
    </div>
  );
}

export default App;
