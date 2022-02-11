import React from 'react';

function IngredientsTypePage(props) {
  return (
    <div className="IngredientsTypePage">
      <div className="IngredientsTypeContainer">
        <h1>Types of Ingredients</h1>
        {props.inTypes.map((inType) => (
          <div className="IngredientCard">
            <h3>{inType.name}</h3>
            <div className="IngredientCard-hidden">
              <p>{inType.description}</p>
              <img src={inType.image_url} alt={inType.name} height={'200px'} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IngredientsTypePage;
