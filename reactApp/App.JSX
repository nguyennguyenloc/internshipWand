import React from 'react';
import react from 'react';
//import ReactDOM when u use Find Dom Node
import ReactDOM from 'react-dom';

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header />
//                 <Content />
//             </div>
//         );
//     }
// }
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Header</h1>
//             </div>
//         );
//     }
// }
// class Content extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>Content</h2>
//                 <p>The content text!!!</p>
//             </div>
//         )
//     }
// }

//Component
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             data:
//                 [
//                     {
//                         "id": 1,
//                         "name": "Foo",
//                         "age": "20"
//                     },
//                     {
//                         "id": 2,
//                         "name": "Bar",
//                         "age": "40"
//                     },
//                     {
//                         "id": 3,
//                         "name": "Baz",
//                         "age": "40"
//                     }
//                 ]
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <Header />
//                 <table>
//                     <tbody>
//                         {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Header</h1>
//             </div>
//         );
//     }
// }
// class TableRow extends React.Component {
//     render() {
//         return (
//             <tr>
//                 <td>{this.props.data.id}</td>
//                 <td>{this.props.data.name}</td>
//                 <td>{this.props.data.age}</td>
//             </tr>
//         );
//     }
// }

//State
// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             header: "Header from state...",
//             content: "Content from state..."
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.header}</h1>
//                 <h1>{this.state.content}</h1>
//             </div>
//         );
//     }
// }

//Props Overview

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.headerProp}</h1>
//                 <h1>{this.props.contentProp}</h1>
//             </div>
//         )
//     }
// }

//State and props
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             header: " Header from props...",
//             content: " Content from props..."
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <Header headerProp={this.state.header} />
//                 <Content contentProp={this.state.content} />
//             </div>
//         );
//     }
// }
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.headerProp}</h1>
//             </div>
//         );
//     }
// }
// class Content extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>{this.props.contentProp}</h2>
//             </div>
//         );
//     }
// }

//props Validation

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h3>Array: {this.props.propArray}</h3>
//                 <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
//                 <h3>Func: {this.props.propFunc(3)}</h3>
//                 <h3>Number: {this.props.propNumber}</h3>
//                 <h3>String: {this.props.propString}</h3>
//                 <h3>Object: {this.props.propObject.objectName1}</h3>
//                 <h3>Object: {this.props.propObject.objectName2}</h3>
//                 <h3>Object: {this.props.propObject.objectName3}</h3>
//             </div>
//         );
//     }
// }
// App.protoTypes = {
//     propArray: React.protoTypes.array.isRequired,
//     propBool: React.protoTypes.bool.isRequired,
//     propFunc: React.protoTypes.func,
//     propNumber: React.protoTypes.number,
//     propString: React.protoTypes.string,
//     propObject: React.protoTypes.object
// }
// App.defaultProps = {
//     propArray: [1, 2, 3, 4, 5],
//     propBool: true,
//     propFunc: function (e) { return e },
//     propNumber: 1,
//     propString: "String value....",

//     propObject: {
//         objectName1: "objectValue1",
//         objectName2: "objectValue2",
//         objectName3: "objectValue3"
//     }
// }

//set state
// class App extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             data: []
//         }

//         this.setStateHandler = this.setStateHandler.bind(this);
//     };
//     setStateHandler() {
//         var item = "setState..."
//         var myArray = this.state.data.slice();
//         myArray.push(item);
//         this.setState({ data: myArray })
//     };
//     render() {
//         return (
//             <div>
//                 <button onClick={this.setStateHandler}>Set State</button>
//                 <h4>State Array: {this.state.data}</h4>
//             </div>
//         );
//     }
// }

//Force Update
// class App extends React.Component {
//     constructor() {
//         super();
//         this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
//     };
//     forceUpdateHandler() {
//         this.forceUpdate();
//     };
//     render() {
//         return (
//             <div>
//                 <button onClick={this.forceUpdateHandler}></button>
//                 <h4>Random number:{Math.random()}</h4>
//             </div>
//         );
//     }
// }

//Find Dom Node
// class App extends React.Component {
//     constructor() {
//         super();
//         this.findDomNodeHander = this.findDomNodeHander.bind(this);
//     };
//     findDomNodeHander() {
//         var myDiv = document.getElementById('myDiv');
//         ReactDOM.findDOMNode(myDiv).style.color = 'green';
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.findDomNodeHander}>Find Dome Node</button>
//                 <div id="myDiv">Node</div>
//             </div>
//         );
//     }
// }

//Forms Basic
// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             data: 'Initial data....'
//         }
//         this.updateState = this.updateState.bind(this);
//     };
//     updateState(e) {
//         this.setState({ data: e.target.value });
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" value={this.state.data} onChange={this.updateState} />
//                 <h4>{this.state.data}</h4>
//             </div>
//         );
//     }
// }

//Form Complex
// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             data: 'Initial data into.........'
//         }
//         this.updateState = this.updateState.bind(this);
//     };
//     updateState(e) {
//         this.setState({ data: e.target.value });
//     }
//     render() {
//         return (
//             <div>
//                 <Content myDataProp={this.state.data}
//                     updateStateProp={this.updateState}></Content>
//             </div>
//         );
//     }
// }
// class Content extends React.Component {
//     render() {
//         return (
//             <div>
//                 <input type="text" value={this.props.myDataProp}
//                     onChange={this.props.updateStateProp} />
//                 <h3>{this.props.myDataProp}</h3>
//             </div>
//         );
//     }
// }

//Events
//Basic Events
// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             data: "initial data......"
//         }
//         this.updateState = this.updateState.bind(this);
//     };
//     updateState() {
//         this.setState({ data: 'Data update...' })
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.updateState}>CLICK</button>
//                 <h4>{this.state.data}</h4>
//             </div>
//         );
//     }
// }

//Even Child
// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             data: 'Initial data....'
//         }
//         this.updateState = this.updateState.bind(this);
//     };
//     updateState() {
//         this.setState({ data: 'Data update from the child component...' })
//     }
//     render() {
//         return (
//             <div>
//                 <Content myDataProp={this.state.data}
//                     updateStateProp={this.updateState}>
//                 </Content>
//             </div>
//         );
//     }
// }
// class Content extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.updateStateProp}>Click</button>
//                 <h3>{this.props.myDataProp}</h3>
//             </div>
//         );
//     }
// }

//Refs

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             data: ' '
//         }
//         this.updateState = this.updateState.bind(this);
//         this.clearInput = this.clearInput.bind(this);
//     };
//     updateState(e) {
//         this.setState({ data: e.target.value });
//     }
//     clearInput() {
//         this.setState({ data: ' ' });
//         ReactDOM.findDOMNode(this.refs.myInput).focus();
//     }
//     render() {
//         return (
//             <div>
//                 <input value={this.state.data} onChange={this.updateState} ref="myInput" />
//                 <button onClick={this.clearInput}>Clear</button>
//                 <h4>{this.state.data}</h4>
//             </div>
//         );
//     }
// }

//Keys
class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [
                {
                    component: 'First...',
                    id: 1
                },
                {
                    component: 'Second...',
                    id: 2
                },
                {
                    component: 'Third...',
                    id: 3
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.data.map((dynamicComponent, i) =>
                        <Content key={i} componentData={dynamicComponent} />)}
                </div>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.componentData.component}</div>
                <div>{this.props.componentData.id}</div>
            </div>
        );
    }
}
export default App;