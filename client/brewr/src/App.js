import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Away from './components/Away';
import HomePage from './pages/HomePage';
import BeerListPage from './pages/BeerListPage';
import BeerRecipePage from './pages/BeerRecipePage';
import IngredientPage from './pages/IngredientPage';
import IngredientsListPage from './pages/IngredientsListPage';
import IngredientsTypePage from './pages/IngredientsTypePage';
import StylePage from './pages/StylePage';
// import RecipeCard from './components/RecipeCard';
// import UserPage from './pages/UserPage';
// import UserCard from './components/UserCard';
// import StyleCard from './components/StyleCard';
// import InTypeCard from './components/InTypeCard';
// import IngredientCard from './components/IngredientCard';
// import NewBeerForm from './components/NewBeerForm';
// import NavGuide from './components/NavGuide';

function App() {
  const [beers, setBeers] = useState([]);
  const [styles, setStyles] = useState([]);
  const [inTypes, setInTypes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [ingredientData, setIngredientData] = useState([]);
  const [newIngredient, setNewIngredient] = useState({
    name: '',
    inType: '',
    origin: '',
    description: '',
    beer: ''
  });

  const getStyles = async () => {
    const response = await axios.get('http://localhost:8000/styles/');
    setStyles(response.data);
    console.log(response);
  };
  /// Beers is broken on backEnd
  // const getBeers = async () => {
  //   const response = await axios.get('http://localhost:8000/beers/');
  //   setBeers(response.data[0]);
  //   ;
  // };
  const getInTypes = async () => {
    const response = await axios.get('http://localhost:8000/inTypes/');
    setInTypes(response.data);
    console.log(response);
  };
  const getIngredients = async () => {
    const response = await axios.get('http://localhost:8000/ingredients/');
    setIngredients(response.data);
    console.log(response);
  };
  //////////////////////////////////////
  useEffect(() => {
    getStyles();
    // getBeers();
    getInTypes();
    getIngredients();
  }, []);
  ///////////////////////////////////////

  return (
    <div className="App">
      <h1>yay</h1>
      <header className="App-header"></header>
      <main>
        <Route exact path="/" component={App} />
        <Route exact path="/away" component={Away} />
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
          path="/styles"
          component={(props) => <StylePage {...props} styles={styles} />}
        />
        <Route
          exact
          path="/newingredient"
          component={(props) => (
            <newIngredientForm
              {...props}
              ingredients={ingredients}
              addIngredients={addIngredients}
            />
          )}
        />
        <Route
          exact
          path="/updateingredient/:id"
          component={(props) => (
            <UpdateIngredientForm {...props} ingredients={ingredients} />
          )}
        />
      </main>

      <footer>
        <div className="footer"></div>
      </footer>
    </div>
  );
}

export default App;
