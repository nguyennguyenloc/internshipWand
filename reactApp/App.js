import React, { Component } from 'react';
class App extends Component {
    render() {
        var hoho = {
            fontSize: 100,
            color: '#ff0000'
        }
        var i = 2;
        return (
            <div>
                <h1 style={hoho}>Hello Word</h1>
                <h2>Aloha</h2>
                <p>Ok Google</p>
                <p data-myattribute="somevalue">This is ReactJS program!!!!</p>
                <hr>
                </hr>
                <h1>{1 + 1}</h1>
                <hr></hr>
                <h1>{i == 1 ? 'True!' : 'False'}</h1>
            </div>
        );
    }
}
export default App;