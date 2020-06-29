import React from 'react';
// import logo from './logo.svg';
import './App.css';
function Wel(props) {
  return (
    <div>
      <p>Text: {props.intro}</p>
    </div>
  );
}
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
      <p>Name: {props.info.name}</p>
      <p>Gender: {props.info.gender}</p>
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
      <p>Study: {props.info.study}</p>
      <p>Country: {props.info.country}</p>
    </div>
  );
}

const obj = {
  intro: "hello",
  info: {
    name: "Loc",
    gender: "Male",
    study: "IT",
    country: "Viet Nam"
  }
}
// function App() {
//   return (
//     <div>
//       <h1>hiuhihihiu</h1>
//       <Name name="Loc" gender="Male" />
//       <Study study="It" country="Viet Nam" />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <h1>Gioi thieu</h1>
      <Wel intro={obj.intro} />
      <Name info={obj.info} />
      <Study info={obj.info} />
    </div>
  );
}

// function Dicho() {
//   return (
//     <div>
//       <p>Mua: bot mi</p>
//       <p>Phu gia: dau</p>
//     </div>
//   );
// }

// function Lambanh() {
//   return (
//     <div>
//       <p>Tron bot: do bot vao bat</p>
//       <p>Ran: cho bot vao chao ran</p>
//     </div>
//   )
// };

// function Baybien() {
//   return (
//     <div>
//       <p>Trang tri: bay do an vao dia</p>
//       <p>An: an</p>
//     </div>
//   )
// };

// function App() {
//   return (
//     <div>
//       <h1>Chao mung den bua an</h1>
//       <Dicho />
//       <Lambanh />
//       <Baybien />
//     </div>
//   )
// };
export default App;
