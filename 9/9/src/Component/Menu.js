import React, { Component } from 'react';
import AddToDo from '../AddToDo';
class Menu extends Component {
    render() {
        return (
            <div className="Menu ">
                <h1>a</h1>
                {/* <AddToDo />
                {this.state.showAdd && <AddToDo onAdd={this.addTodo}></AddToDo>}
                <button onClick={() => this.setState({ showAdd: !this.state.showAdd })}>Toggle add</button> */}
            </div>
        )
    };
}
export default Menu;