import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
// import App from './App.jsx';

//C1
// ReactDOM.render(<App headerProp="Header header header..." contentProp="conten conten conten..." />, document.getElementById('app'));
// export default App;

//C2
ReactDOM.render(<App />, document.getElementById('app'));

//life_cycle
setTimeout(
    () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    }, 10000
);
