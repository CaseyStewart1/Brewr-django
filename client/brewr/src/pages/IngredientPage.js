import React from 'react';
//////// maybe just delete this page

function IngredientPage(props) {
  return (
    <div className="IngredientPage">
      <div className="IngredientPageContainer">
        <h1>1 Ingredient</h1>
        <div className="IngredientSolo">{props.ingredients}</div>
      </div>
    </div>
  );
}

export default IngredientPage;
