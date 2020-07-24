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
            ],
            tit: null,
            viewItem: null
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

    // showToDoItem = () => {
    //     const { item, onClick } = this.props;
    //     let url = circleImg;
    //     if (item.status) {
    //         url = tickImg;
    //     }
    //     const li =
    //         this.state.todos.map(x =>

    //             <div className={classNames('todoItems', {
    //                 'todoItems-done': item.status
    //             })} >
    //                 <div className=" row">
    //                     <div className="col-md-10">
    //                         {<img onClick={onClick} src={url} width={40} height={40} />}
    //                         {this.props.item.title}
    //                     </div>
    //                     <div className="col-md-1" onClick={() => { this.deleteToDo(x) }}>
    //                         <i class="fas fa-trash-alt" aria-hidden="true"></i>
    //                     </div>
    //                     <div className="col-md-1" onClick={() => { this.editToDo(x) }}>
    //                         <i class="fas fa-edit" aria-hidden="true"></i>
    //                     </div>
    //                     <hr />
    //                 </div>
    //             </div>
    //         )
    //     return li;
    // }
    getList = () => {
        fetch("http://localhost:4444/api/home")
            .then(res => res.json())
            .then(res => this.setState({ tit: res }))
    }
    getItem = (id) => {
        fetch(`http://localhost:4444/api/home/${id}`)
            .then(res => res.json())
            .then(res => this.setState({ viewItem: res }))
    }

    onChangeContent = e => {
        this.setState({
            viewItem: { ...this.state.viewItem, title: e.target.value }
        });
    }

    onDelete = () => {
        var data = this.state.viewItem;
        fetch(`http://localhost:4444/api/home/${data.id}`, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => res.json()).then(res => {
            console.log(res)
        })
    }
    onSubmitUpdate = () => {
        var data = this.state.viewItem;
        fetch(`http://localhost:4444/api/home/${data.id}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => res.json()).then(res => {
            console.log(res)
        })
    }
    render() {
        // return (
        //     <div>
        //         {this.showToDoItem()}
        //     </div>
        // )

        //  show Item not use function
        const { item, onClick } = this.props;
        let url = circleImg;
        if (item.status) {
            url = tickImg;
        }
        return (
            <React.Fragment>
                {/* {
                    this.state.todos.map(x => {
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
                            </div>
                        )
                    })
                } */}
                <button onClick={() => this.getList()}>aaa</button>
                {
                    this.state.tit && this.state.tit.map(item => {
                        return (
                            <div className={classNames('todoItems', {
                                'todoItems-done': item.status
                            })} >
                                <div className=" row">
                                    <div className="col-md-10">
                                        {<img onClick={onClick} src={url} width={40} height={40} />}
                                        {item.title}
                                    </div>
                                    <div className="col-md-1" onClick={() => this.getItem(item.id)}>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    {
                                        this.state.viewItem && <React.Fragment>
                                            <input defaultValue={this.state.viewItem.title} onChange={this.onChangeContent}></input>
                                            <button onClick={() => this.onSubmitUpdate()}><i class="fas fa-edit" aria-hidden="true"></i></button>
                                            <button onClick={() => this.onDelete()}><i class="fas fa-trash-alt" aria-hidden="true"></i></button>
                                        </React.Fragment>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </React.Fragment >
        );
    }
}
export default TodoItems;
