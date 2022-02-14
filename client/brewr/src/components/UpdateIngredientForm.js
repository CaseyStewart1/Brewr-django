import react, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateIngredientForm(props) {
  const id = props.match.params.id;
  console.log(props.match.params.id);
  const [updateIngredient, setUpdateIngredient] = useState();

  useEffect(() => {
    const setEf = async () => {
      const result = await axios.get(`http://localhost:8000/ingredients/${id}`);
      const ingredientObject = result.data.ingredient;
      console.log(ingredientObject);
      setUpdateIngredient(ingredientObject);
    };
    setEf();
  }, []);

  const handleSubmit = async () => {
    console.log('hey', updateIngredient);
    await axios
      .put(`http://localhost:8000/ingredients/${id}`, updateIngredient)
      .then((res) => console.log(res.data.Ingredient))
      .catch((error) => alert(error));
    props.history.push('/ingredientslist');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateIngredient({
              ...updateIngredient,
              name: e.target.value
            });
          }}
          name={'name'}
          placeholder={'name'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateIngredient({
              ...updateIngredient,
              decription: e.target.value
            });
          }}
          name={'description'}
          placeholder={'description'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateIngredient({
              ...updateIngredient,
              prep: e.target.value
            });
          }}
          name={'origin'}
          placeholder={'origin'}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>

      <h1>here</h1>
    </div>
  );
}

export default UpdateIngredientForm;
