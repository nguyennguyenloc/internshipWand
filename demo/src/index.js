import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// const user = {
//   name: "Nguyen Loc",
//   email: "nnloc123@gmail.com"
// };

// const element = <h1>Hello World, my name is: {user.name}, and email: {user.email}</h1>
// const element = (
//   <div className="hello">
//     <h1>Hello World</h1>
//     <h2>Hello World, my name is: {user.name} and my email: {user.email}</h2>
//   </div>
// );
// var numbers = [1, 2, 3, 4];
// var doubleNumbers = numbers.map(function (eachNumber) {
//   return eachNumber * 2 + ", ";
// });
// var doubleNumbers = numbers.map((eachNumber) => eachNumber * 3 + ", ");
// ReactDOM.render(<h1>doubleNumbers: {doubleNumbers}</h1>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

//Render
// c1:
// var counter = 0;
// setInterval(function () {
//   counter += 1;
//   console.log("updating....", counter)
// }, 1000);
// C2
// var counter = 0;
// function updaTimer() {
//   counter += 1;
//   console.log("hehehehe....", counter)
// }
// setInterval(updaTimer, 1000);

// function updateTime() {
//   const element = (
//     <div div >
//       <h1>Timer update example</h1>
//       <h2>Current time is: {new Date().toLocaleTimeString()}</h2>
//     </div >
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(updateTime, 1000);

//component + props
//props
// function UserInfo(props) {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Email: {props.email}</p>
//     </div>
//   );
// }
//component
// class UserDetail extends React.Component {
//   render() {
//     return (
//       <div className="UserDetail">
//         <h1>Name: {this.props.name}</h1>
//         <h1>Email: {this.props.email}</h1>
//       </div>
//     );
//   }
// }
// class UserDetail1 extends React.Component {
//   render() {
//     return (
//       <div className="UserDetail1">
//         <h1>Information: {this.props.info}</h1>
//       </div>
//     );
//   }
// }
// class UserInfo extends React.Component {
//   render() {
//     return (
//       <div>
//         <UserDetail name={this.props.name} email={this.props.email} />
//         <UserDetail1 info={this.props.info} />
//       </div>
//     );
//   }
// }
// const element = <UserInfo name="loc" email="nnloc123@gmail.com" info="ahihi" />;
// ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(< UserInfo name="loc" email="nnloc123@gmail.com" />, document.getElementById('root'));

// class Couter extends React.Component {
//   constructor(props) { //khoi tao
//     super(props);
//     this.state = { seconds: 0 };
//   }
//   incrementCounter() {
//     this.setState(
//       (prevState, props) => ({
//         seconds: prevState.seconds + 1
//       })
//     );
//   }
//   componentDidMount() {
//     this.timerID = setInterval(() => this.incrementCounter(), 1000);
//   }
//   componentWillMount() {
//     clearInterval(this.timerID);
//   }
//   render() {
//     return (
//       <div>
//         <h1>This is a counting machine!</h1>
//         <h2>Second: {this.state.seconds} s</h2>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Couter />, document.getElementById('root'));

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick() {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }
    ));
  }
  // buttonClick = () => {
  //   this.setState(prevState => ({
  //     isOn: !prevState.isOn
  //   })
  //   );
  // }
  render() {
    return (
      <button class="toggleButton" onClick={this.buttonClick}>
        This is a toggle button:
        {this.state.isOn ? " turning On" : " turning Off"}
      </button>
    );
  }
}
ReactDOM.render(<ToggleButton />, document.getElementById('root'));