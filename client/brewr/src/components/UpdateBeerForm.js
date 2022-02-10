import react, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateBeer(props) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateBeer({
              ...updateBeer,
              name: e.target.value
            });
          }}
          name={'name'}
          placeholder={'name'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateBeer({
              ...updateBeer,
              style: e.target.value
            });
          }}
          name={'style'}
          placeholder={'style'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateBeer({
              ...updateBeer,
              abv: e.target.value
            });
          }}
          name={'abv'}
          placeholder={'abv'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateBeer({
              ...updateBeer,
              time: e.target.value
            });
          }}
          name={'time'}
          placeholder={'time'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateBeer({
              ...updateBeer,
              decription: e.target.value
            });
          }}
          name={'description'}
          placeholder={'description'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateBeer({
              ...updateBeer,
              prep: e.target.value
            });
          }}
          name={'prep'}
          placeholder={'prep'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateBeer({
              ...updateBeer,
              steep: e.target.value
            });
          }}
          name={'steep'}
          placeholder={'steep'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateBeer({
              ...updateBeer,
              boil: e.target.value
            });
          }}
          name={'boil'}
          placeholder={'boil'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateBeer({
              ...updateBeer,
              cooldown: e.target.value
            });
          }}
          name={'cooldown'}
          placeholder={'cooldown'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateBeer({
              ...updateBeer,
              pitch: e.target.value
            });
          }}
          name={'pitch'}
          placeholder={'pitch'}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>

      <h1>here</h1>
    </div>
  );
}

export default UpdateBeer;
