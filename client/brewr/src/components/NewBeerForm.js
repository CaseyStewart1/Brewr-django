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
              style: e.target.value
            });
          }}
          name={'style'}
          placeholder={'style'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setBeerState({
              ...beerState,
              abv: e.target.value
            });
          }}
          name={'abv'}
          placeholder={'abv'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setBeerState({
              ...beerState,
              time: e.target.value
            });
          }}
          name={'time'}
          placeholder={'time'}
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
        <input
          type="text-area"
          onChange={(e) => {
            setBeerState({
              ...beerState,
              prep: e.target.value
            });
          }}
          name={'prep'}
          placeholder={'prep'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setBeerState({
              ...beerState,
              steep: e.target.value
            });
          }}
          name={'steep'}
          placeholder={'steep'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setBeerState({
              ...beerState,
              boil: e.target.value
            });
          }}
          name={'boil'}
          placeholder={'boil'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setBeerState({
              ...beerState,
              cooldown: e.target.value
            });
          }}
          name={'cooldown'}
          placeholder={'cooldown'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setBeerState({
              ...beerState,
              pitch: e.target.value
            });
          }}
          name={'pitch'}
          placeholder={'pitch'}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default NewBeerForm;
