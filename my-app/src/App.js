import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Define a Component: Person
// Like you create a new Tag:
// <Person personNo='1' firstName='Bill' lastName='Gates' />
class Person extends React.Component {

  // Use the render function to return JSX component
  render() {
    return (
      <div className="person-info">
        <h3>Person {this.props.personNo}:</h3>
        <ul>
          <li>First Name: {this.props.firstName}</li>
          <li>Last Name: {this.props.lastName}</li>
        </ul>
      </div>
    );
  }
}

// Define a Component: App
// Like you create a new Tag: <App />
class App extends React.Component {

  // Use the render function to return JSX component
  render() {
    return (
      <div className="people">
        <Person personNo='1' firstName='Nguyễn' lastName='Văn A' />
        <Person personNo='2' firstName='Nguyễn' lastName='Văn B' />
        <Person personNo='3' firstName='Phạm' lastName="Nguyễn C" />
        <Person personNo='4' firstName='Phạm' lastName="Nguyễn D" />
        <Person personNo='5' firstName='Trần' lastName="Thị E" />
        <Person personNo='6' firstName='Trần' lastName="Thị F" />
      </div>
    );
  }
}

// Export App component.
export default App;