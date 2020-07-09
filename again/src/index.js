import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Info from './Info';
import All from './All';
import Form from './Form';

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
ReactDOM.render(
  <All />,
  document.getElementById('element')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
