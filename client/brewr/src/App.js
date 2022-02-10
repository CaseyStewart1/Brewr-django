import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import HomePage from './pages/HomePage';
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
  const [inTypes, setInTypes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const getStyles = async () => {
    const response = await axios.get('http://localhost:8000/styles/');
    setStyles(response.data[0]);
  };
  const getBeers = async () => {
    const response = await axios.get('http://localhost:8000/beers/');
    setBeers(response.data[0]);
  };
  const getInTypes = async () => {
    const response = await axios.get('http://localhost:8000/inTypes/');
    setInTypes(response.data[0]);
  };
  const getIngredients = async () => {
    const response = await axios.get('http://localhost:8000/ingredients/');
    setIngredients(response.data[0]);
  };
  //////////////////////////////////////
  useEffect(() => {
    getStyles();
    getBeers();
    getInTypes();
    getIngredients();
  }, []);
  ///////////////////////////////////////

  return (
    <div className="App">
      <h1>Hello</h1>
      <header className="App-header"></header>
      <main>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/beerList"
          component={(props) => <BeerListPage {...props} beers={beers} />}
        />
        <Route
          exact
          path="/beerRecipe/:id"
          component={(props) => <BeerRecipePage {...props} beers={beers} />}
        />
        <Route
          exact
          path="/ingredientsType"
          component={(props) => (
            <IngredientsTypePage {...props} inTypes={inTypes} />
          )}
        />
        <Route
          exact
          path="/ingredientsList"
          component={(props) => (
            <IngredientsListPage {...props} ingredients={ingredients} />
          )}
        />
        <Route
          exact
          path="/ingredient/:id"
          component={(props) => (
            <IngredientPage {...props} ingredients={ingredients} />
          )}
        />
        <Route
          exact
          path="/styleList"
          component={(props) => <StylePage {...props} styles={styles} />}
        />

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
