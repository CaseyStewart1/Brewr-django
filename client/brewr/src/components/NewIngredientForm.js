import React, { useState } from 'react';
import axios from 'axios';

function NewIngredientForm(props) {
  const [ingredientState, setIngredientState] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIngredientState(ingredientState);
    console.log('hey');
    axios.post('`http://localhost:8000/ingredients', ingredientState);

    console.log(ingredientState);
    props.history.push('/ingredientslist');
  };

  return (
    <div>
      <h1>Add an Ingredient</h1>
      <form>
        <input
          type="text-area"
          onChange={(e) => {
            setIngredientState({
              ...ingredientState,
              name: e.target.value
            });
            console.log(ingredientState);
          }}
          name={'name'}
          placeholder={'name'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setIngredientState({
              ...ingredientState,
              name: e.target.value
            });
            console.log(ingredientState);
          }}
          name={'description'}
          placeholder={'description'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setIngredientState({
              ...ingredientState,
              name: e.target.value
            });
            console.log(ingredientState);
          }}
          name={'origin'}
          placeholder={'origin'}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewIngredientForm;
