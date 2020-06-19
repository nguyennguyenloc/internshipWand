import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = props => (
  <div>
    {/* <table>
      <tr>
        <th><ol>
          {
            props.items.map((item, index) => <li key={index}>{item}</li>)
          }
        </ol ></th>
        <th><button>Edit</button></th>
        <th><button>Delete</button></th>
      </tr>
    </table> */}

    <ol>
      {
        props.items.map((item, index) => <li key={index}>
          {item}  <button className="but1">Edit</button>
          <button className="but2">Delete</button></li>)
      }
    </ol >
  </div >
);

export default App;

