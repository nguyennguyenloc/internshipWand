import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="">
      <header className="">
        <h1>{props.text}</h1>
      </header>
    </div>
  );
}

export default App;
