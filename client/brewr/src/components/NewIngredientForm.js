import React from 'react';

function NewBeerForm() {
  return (
    <div>
      <h1>Write Your Recipe!</h1>
      <form>
        <input
          type="text-area"
          onChange={(e) => {
            setBeerState({
              ...beerState,
              name: e.target.value
            });
          }}
          name={'name'}
          placeholder={'name'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setBeerState({
              ...beerState,
              InType: e.target.value
            });
          }}
          name={'InType'}
          placeholder={'InType'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setBeerState({
              ...beerState,
              origin: e.target.value
            });
          }}
          name={'origin'}
          placeholder={'origin'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setBeerState({
              ...beerState,
              decription: e.target.value
            });
          }}
          name={'description'}
          placeholder={'description'}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default NewBeerForm;
