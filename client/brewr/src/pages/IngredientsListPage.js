import React from 'react';

function IngredientListPage(props) {
  return (
    <div className="IngredientPage">
      <div className="IngredientContainer">
        <h1>List of Ingredients</h1>
        {props.ingredients.map((ingredient) => (
          <div className="IngredientCard">
            <h3>{ingredient.name}</h3>
            <p>{ingredient.inType}</p>
            <p>{ingredient.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IngredientListPage;
