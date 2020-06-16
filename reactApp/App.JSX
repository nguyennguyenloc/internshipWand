import React from 'react';
import react from 'react';

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

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                <h3>Func: {this.props.propFunc(3)}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
                <h3>Object: {this.props.propObject.objectName1}</h3>
                <h3>Object: {this.props.propObject.objectName2}</h3>
                <h3>Object: {this.props.propObject.objectName3}</h3>
            </div>
        );
    }
}
App.protoTypes = {
    propArray: React.protoTypes.array.isRequired,
    propBool: React.protoTypes.bool.isRequired,
    propFunc: React.protoTypes.func,
    propNumber: React.protoTypes.number,
    propString: React.protoTypes.string,
    propObject: React.protoTypes.object
}
App.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (e) { return e },
    propNumber: 1,
    propString: "String value....",

    propObject: {
        objectName1: "objectValue1",
        objectName2: "objectValue2",
        objectName3: "objectValue3"
    }
}
export default App;