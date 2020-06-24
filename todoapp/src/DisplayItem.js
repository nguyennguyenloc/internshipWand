import React from 'react';

export default class DisplayItem extends React.Component {
    render() {
        var todo = this.props.todo;
        // var title = todo.title;
        return <li>
            <input
                checked={todo.done}
                onChange={this.props.handleDone.bind(null, todo.id)}
                type="checkbox"
                style={{ fontSize: "x-large" }}
            />
            {todo.title}
            <button className="but1" onClick={this.props.handleDelete.bind(null, todo.id)} >
                Delete
            </button>
        </li>
    };
}

// DisplayItem.propTypes = {
//     todo: React.PropTypes.object.isRequired,
//     handleDone: React.PropTypes.func.isRequired,
//     handleDelete: React.PropTypes.func.isRequired
// }