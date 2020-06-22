import React from 'react';
import DisplayItem from './DisplayItem'
export default class DisplayList extends React.Component {
    // constructor() {
    //     super();
    //     this.state = { done: false };
    // }
    // handleOnChange() {
    //     var _done = !this.state.done;
    //     this.setState({ done: _done });
    // }
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo, i) => {
                        // return <li key={item}>
                        //     <input
                        //         checked={this.state.done}
                        //         onChange={this.handleOnChange.bind(this)}
                        //         type="checkbox"
                        //         style={{ fontSize: "x-large" }} />
                        //     {item}
                        //     <button className="but1" onClick={this.props.handleDelete.bind(null, item)} >
                        //         Delete
                        //     </button>
                        // </li>
                        return <DisplayItem
                            key={todo.title}
                            handleDone={this.props.handleDone}
                            handleDelete={this.props.handleDelete.bind(null, todo.title)}
                            todo={todo} />
                    })}
                </ul>
                {/* <h1>alololololo</h1> */}
                {/* <DisplayItem /> */}
            </div >
        )
    };
}
