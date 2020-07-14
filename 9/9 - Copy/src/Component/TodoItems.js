import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItems.css';
import circleImg from '../img/circle.svg';
import tickImg from '../img/tick.svg';
class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { title: '', status: true }
            ]
        }
    }
    deleteToDo = (todo) => {
        const filtereditems = this.state.todos.filter(x => x.title !== todo.title);
        this.setState({
            todos: filtereditems
        })
    }

    editToDo = (x) => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.title === x.title) {
                    return {
                        ...todo,
                        status: todo.status === true ? false : true
                    };
                }
                else {
                    return todo;
                }
            })
        }))
    }
    render() {
        const { item, onClick } = this.props;
        let url = circleImg;
        if (item.status) {
            url = tickImg;
        }
        return (
            <React.Fragment>
                {/* <div className={classNames('section', 'todoItems', {
                    'todoItems-done': item.status
                })}>
                {/* {<img onClick={onClick} src={url} width={50} height={50} />} */}
                {/* <h1>{this.props.item.title}</h1>  */}
                {this.state.todos.map(x => {
                    return (
                        <div className={classNames('todoItems', {
                            'todoItems-done': item.status
                        })} >
                            <div className=" row">
                                <div className="col-md-10">
                                    {<img onClick={onClick} src={url} width={40} height={40} />}
                                    {this.props.item.title}
                                </div>
                                <div className="col-md-1" onClick={() => { this.deleteToDo(x) }}>
                                    <i class="fas fa-trash-alt" aria-hidden="true"></i>
                                </div>
                                <div className="col-md-1" onClick={() => { this.editToDo(x) }}>
                                    <i class="fas fa-edit" aria-hidden="true"></i>
                                </div>
                                <hr />
                            </div>
                            {/* <ul className=" row">
                                <li className="col-md-10">
                                    {<img onClick={onClick} src={url} width={40} height={40} />}
                                    {this.props.item.title}
                                </li>
                                <li className="col-md-1" onClick={() => { this.deleteToDo(x) }}>
                                    <i class="fas fa-trash-alt" aria-hidden="true"></i>
                                </li>
                                <li className="col-md-1" onClick={() => { this.editToDo(x) }}>
                                    <i class="fas fa-edit" aria-hidden="true"></i>
                                </li>
                                <hr />
                            </ul> */}
                        </div>
                    )
                })
                }
                {/* <div className="b">
                    {this.state.todos.map(x => {
                        return (
                            <div>
                                <div onClick={() => { this.deleteToDo(x) }}>
                                    {this.props.item.title}
                                </div>
                            </div>
                        )
                    })}
                </div> */}
            </React.Fragment >
        );

    }
}
export default TodoItems;
