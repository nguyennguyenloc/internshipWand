import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItems.css';
import doImg from '../img/do.svg';
// import logoImg from '../img/logo.svg';
import tickImg from '../img/tick.svg';
class TodoItems extends Component {
    render() {
        const { item, onClick } = this.props;
        let url = doImg;
        if (item.status) {
            url = tickImg;
        }
        return (
            <div className={classNames('section', 'todoItems', {
                'todoItems-done': item.status
            })}>
                {<img onClick={onClick} src={url} width={50} height={50} />}
                <h1>{this.props.item.title}</h1>
            </div>
        );
    }
}
export default TodoItems;
