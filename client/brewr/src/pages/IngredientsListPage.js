import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function IngredientListPage(props) {
  const [del, setDel] = useState();

  async function deleteIngredient(id) {
    await axios.delete(`http://localhost:8000/ingredients/${id}`);
    setDel('Delete Done');
    window.location.reload();
  }
  useEffect(() => {}, [deleteIngredient]);

  // const handleNewIngredient = (e) => {
  //   setNewIngredient({ ...newIngredient, [e.target.name]: e.target.value });
  // };

  // const addIngredient = (e) => {
  //   e.preventDefault();
  //   const currentIngredients = beerData;
  //   const addedIngredient = {
  //     ...newIngredient,
  //     id: parseInt(beerData.length + 1)
  //   };
  //   currentIngredients.push(addedIngredient);
  //   setIngredientData(currentIngredients);
  //   setNewIngredient({ id: '', name: '', style: '', description: '' });
  // };

  return (
    <div className="IngredientPage">
      <div className="IngredientContainer">
        <h1>List of Ingredients</h1>
        {props.ingredients.map((ingredient) => (
          <div className="IngredientCard" key={ingredient.id}>
            <h3>{ingredient.name}</h3>
            <p>{ingredient.inType}</p>
            <p>{ingredient.description}</p>
            <button
              onClick={() => {
                deleteIngredient(ingredient.id);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IngredientListPage;
