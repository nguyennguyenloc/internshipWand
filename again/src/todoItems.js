import React, { Component } from 'react'
class todoItems extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            todos: [
                { title: "mot", isComplete: false },
                { title: "hai", isComplete: true },
                { title: "ba", isComplete: true },
                { title: "tu", isComplete: false }
            ]
        }
    }
    handleDone(idToBeMarkedAsDone) {
        var _todo = this.state.todos;
        var todo = _todo.filter((todo) => {
            return todo.id === idToBeMarkedAsDone;
        })[0];
    }
    render() {
        return (
            <div>
                <h1>AAAAAAAAAAAAA</h1>
            </div>
        )
    };
}
export default todoItems;