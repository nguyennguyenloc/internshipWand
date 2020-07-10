import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItems.css';
import doImg from '../img/do.svg';
import logoImg from '../img/logo.svg';
class TodoItems extends Component {
    render() {
        const { item, onClick } = this.props;
        let url = doImg;
        if (item.status) {
            url = logoImg;
        }
        return (
            <div className={classNames('section', 'TodoItem', {
                'todoItems-done': item.status
            })}>
                {/* <img onClick={onClick} src={url} width={32} height={32} /> */}
                {<img onClick={onClick} src={url} width={50} height={50} />}
                <h1>{this.props.item.title}</h1>
            </div>
        );
    }
}
export default TodoItems;
