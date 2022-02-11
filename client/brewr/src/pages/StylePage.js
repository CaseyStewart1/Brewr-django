import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function StylePage(props) {
  console.log(props.styles);
  return (
    <div className="StylePage">
      <div className="StyleContainer">
        <h1>Styles of Beer</h1>
        {props.styles.map((style) => (
          <div className="styleCard">
            <h3>{style.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StylePage;
