import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// serviceWorker.unregister();
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    this.setState({ term: event.target.value });
  }
  // onChange = (event) => {
  //   this.setState({ term: event.target.value });
  // }
  onSubmit(event) {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }
  // onSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     term: '',
  //     items: [...this.state.items, this.state.term]
  //   });
  // }
  render() {
    return (
      <div className="App">
        <h1>To do list</h1>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button className="but">AddList</button>
        </form>
        <App items={this.state.items} />
      </div >
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));