import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function IngredientListPage(props) {
  const [del, setDel] = useState();

  async function deleteIngredient(id) {
    await axios.delete(`http://localhost:8000/ingredients/${id}`);
    setDel('Delete Done');
    window.location.reload();
  }
  useEffect(() => {}, [deleteIngredient]);

  return (
    <div className="IngredientPage">
      <div className="IngredientContainer">
        <h1>List of Ingredients</h1>
        {props.ingredients.map((ingredient) => (
          <div className="IngredientCard" key={ingredient.id}>
            <h3>{ingredient.name}</h3>
            <p>{ingredient.origin}</p>
            <p>{ingredient.description}</p>
            <Link to={`/updateingredient/${ingredient.id}`}>
              <button>Update</button>
            </Link>
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
