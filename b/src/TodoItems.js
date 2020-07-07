import React, { Component } from 'react'
class TodoItems extends Component {
    create = item => {
        return (
            <li key={item.key}>
                {item.value}
            </li >
        );
    }
    render() {
        const { entries } = this.props;
        var a = entries.map(this.create);
        return (
            <ul>{a}</ul>
        )
    }
}
export default TodoItems;