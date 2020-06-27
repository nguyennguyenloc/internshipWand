import React from 'react';
// import logo from './logo.svg';
import './App.css';

// function Name() {
//   return (
//     <div>
//       <p>Name: Lộc</p>
//       <p>Gender: Male</p>
//     </div>
//   );
// }
function Name(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Gender: {props.gender}</p>
    </div>
  );
}

// function Study() {
//   return (
//     <div>
//       <p>IT</p>
//       <p>VietNam</p>
//     </div>
//   );
// }

function Study(props) {
  return (
    <div>
      <p>Study: {props.study}</p>
      <p>Country: {props.country}</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>hiuhihihiu</h1>
      <Name name="Loc" gender="Male" />
      <Study study="It" country="Viet Nam" />
    </div>
  );
}

export default App;
