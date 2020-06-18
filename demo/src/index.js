import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const user = {
  name: "Nguyen Loc",
  email: "nnloc123@gmail.com"
};

// const element = <h1>Hello World, my name is: {user.name}, and email: {user.email}</h1>
const element = (
  <div className="hello">
    <h1>Hello World</h1>
    <h2>Hello World, my name is: {user.name} and my email: {user.email}</h2>
  </div>
);
var numbers = [1, 2, 3, 4];
// var doubleNumbers = numbers.map(function (eachNumber) {
//   return eachNumber * 2 + ", ";
// });
var doubleNumbers = numbers.map((eachNumber) => eachNumber * 3 + ", ");
ReactDOM.render(<h1>doubleNumbers: {doubleNumbers}</h1>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
