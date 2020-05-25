import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CardContainer from './components/cardContainer';


function App() {

  
  return (
    <div className="App">
      <div className='header'>
        <h1>Baeow</h1>
      </div>
   <CardContainer />
    </div>
  );
}

export default App;
