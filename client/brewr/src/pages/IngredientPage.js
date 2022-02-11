import React from 'react';
//////// maybe just delete this page

function IngredientPage(props) {
  const [del, setDel] = useState();
  async function deleteIngredient(id) {
    await axios.delete(`http://localhost:3000/beers/${id}`);
    setDel('Delete Done');
    window.location.reload();
  }
  useEffect(() => {}, [deleteIngredient]);

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
