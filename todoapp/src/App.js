import React from 'react';
import ReactDOM from 'react-dom';

// import logo from './logo.svg';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       {/* <p>To Do List</p>
//       <form >
//         <input />
//         <button>Susssssbmit</button>
//       </form> */}
//     </div>
//   );
// }

// export default App;
// class DisplayList extends React.Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.items.map((item, i) => {
//             return <li key={item}>{item}</li>
//           })}
//         </ul>
//       </div>
//     )
//   };
// }
// ReactDOM.render(<DisplayList />, document.getElementById('root'));

const App = props => (
  <div>
    <div>
      <ul>
        {this.props.items.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul>
    </div>
  </div >
);

export default App;
