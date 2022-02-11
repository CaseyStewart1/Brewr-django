import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function StylePage(props) {
  console.log(props.styles);
  return (
    <div className="StylePage">
      <div className="StyleContainer">
        <h1>Styles of Beer</h1>
        <div className="StyleCard">
          {props.styles.map((style) => (
            <div className="styleCard-hidden">
              <h3>{style.name}</h3>
              <p>{style.description}</p>
              <img src={style.image_url} alt={style.name} height={'200px'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StylePage;
