import React, { Component } from 'react'
class TodoItems extends Component {
    createTasks = item => {
        return (
            <li key={item.key}>
                {item.text}
            </li>
        )
    }
    render() {
        const todoEntries = [
            {
                key: 1,
                text: "task item a"
            },
            {
                key: 2,
                text: "text item b"
            },
            {
                key: 3,
                text: "text item c"
            }
        ];
        const listItems = todoEntries.map(this.createTasks)
        return <ul className="theList">{listItems}</ul>
    }
}
export default TodoItems