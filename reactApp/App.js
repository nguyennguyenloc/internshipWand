import React, { Component } from 'react';
// class App extends Component {
//     render() {
//         var hoho = {
//             fontSize: 100,
//             color: '#ff0000'
//         }
//         var i = 2;
//         return (
//             <div>
//                 <h1 style={hoho}>Hello Word</h1>
//                 <h2>Aloha</h2>
//                 <p>Ok Google</p>
//                 <p data-myattribute="somevalue">This is ReactJS program!!!!</p>
//                 <hr>
//                 </hr>
//                 <h1>{1 + 1}</h1>
//                 <hr></hr>
//                 <h1>{i == 1 ? 'True!' : 'False'}</h1>
//             </div>
//         );
//     }
// }

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
    };
    setNewNumber() {
        this.setState({ data: this.state.data + 1 })
    }
    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>Increment</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        );
    }
}
class Content extends React.Component {
    componentWillMount() {
        console.log('component will mount!')
    }
    componentDidMount() {
        console.log('component Did Mount')
    }
    componentWillReceiveProps(newProps) {
        console.log('component will ReceiveProps')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component Will Update!')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update')
    }
    componentWillUnmount() {
        console.log('Component Will Unmount!')
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }

}
export default App;