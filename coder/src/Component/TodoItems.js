import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItems.css';
class TodoItems extends Component {
    // constructor(props) {
    //     super(props);
    //     this.onItemClick = this.onItemClick.bind(this);
    // }
    // onItemClick() {
    //     console.log(this.props.item);
    // }
    render() {
        const { item, onClick } = this.props;
        // let className = "todoItems";
        // if (item.isComplete) {
        //     className += " todoItems-done"
        // }
        return (
            <div onClick={onClick} className={classNames('TodoItem', {
                'todoItems-done': item.isComplete
            })}>
                <h1>{this.props.item.title}</h1>
            </div>
        )
    };
}
export default TodoItems;
