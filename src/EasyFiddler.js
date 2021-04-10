import React from 'react';
import { AddRegex } from './components/AddRegex';
import './App.css';

function EasyFiddler() {

  return (
    <div className="App">
      <h1>Easy Fiddler</h1>
      <h2>Ingresa tu REGEX</h2>
      <AddRegex />
    </div>
  );
}

export default EasyFiddler;
