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
// function Name(props) {
//   return (
//     <div>
//       <Wel intro={obj.intro} />
//       <p>Name: {props.Name.name}</p>
//       <p>Gender: {props.Name.gender}</p>
//     </div>
//   );
// }
// var Name = (props) => {
//   return (
//     <div>
//       <Wel intro={obj.intro} />
//       <p>Name: {props.Name.name}</p>
//       <p>Gender: {props.Name.gender}</p>
//     </div>
//   );
// }

class Name extends React.Component {
  render() {
    return (
      <div>
        <Wel intro={obj.intro} />
        <p>Name: {this.props.Name.name}</p>
        <p>Gender: {this.props.Name.gender}</p>
      </div>
    );
  }
}
// function Study() {
//   return (
//     <div>
//       <p>IT</p>
//       <p>VietNam</p>
//     </div>
//   );
// }

// function Study(props) {
//   return (
//     <div>
//       <Name Name={props.Study} />
//       <p>Study: {props.Study.study}</p>
//       <p>Country: {props.Study.country}</p>
//     </div>
//   );
// }
// var Study = (props) => {
//   return (
//     <div>
//       <Name Name={props.Study} />
//       <p>Study: {props.Study.study}</p>
//       <p>Country: {props.Study.country}</p>
//     </div>
//   );
// }

class Study extends React.Component {
  render() {
    return (
      <div>
        <Name Name={this.props.Study} />
        <p>Study: {this.props.Study.study}</p>
        <p>Country: {this.props.Study.country}</p>
      </div>
    );
  }
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
      <Study Study={obj.info} />
    </div>
  );
}
// function App(props) {
//   return (
//     <div>
//       <h1>Gioi thieu</h1>
//       <Study Study={props.info} />
//     </div>
//   );
// }
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
