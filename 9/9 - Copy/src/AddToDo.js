import React, { Component } from 'react';

class AddToDo extends Component {
    state = {
        title: '',
        status: false,
        showAdd: false,
        showList: false,
        tit: null,
        viewItem: null
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({
            title: this.state.title,
            status: false,
        })
        this.setState({
            title: '',
            status: false
        })
    }

    // close = () => {
    //     alert("Cancel: quay lại màn hình, Add: add List")
    // }
    // componentDidMount() {
    //     this.fetchApi();
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
            // viewItem: { ...this.state.viewItem, title: e.target.value }
            title: e.target.value
        });
    }
    onAdd = () => {
        var data = this.state.viewItem;
        fetch(`http://localhost:4444/api/home`, {
            method: 'POST', // or 'PUT'
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
        return (
            <div className="addtodo">
                {/* <ToDoList ok={this.handleSubmit}></ToDoList> */}
                <h1>Add List</h1>
                <br />
                <form onSubmit={this.onAdd}>
                    {/* <form onSubmit={this.handleSubmit}> */}
                    {/* <form onSubmit={this.onSubmitUpdate}> */}
                    <div>
                        {/* <input className="w3-input" placeholder="Get some ..." value={this.state.title} onChange={this.handleTitleChange} /> */}
                        <input className="w3-input" placeholder="Get some ..." value={this.state.title} onChange={this.onChangeContent} />
                    </div>
                    <br />
                    <div>
                        {/* <button className="addtodo-button addtodo-add" onClick={this.props.openList} type="submit">Add</button> */}
                        <button className="addtodo-button addtodo-add" onClick={this.props.openList} type="submit">Add</button>
                        <button className="addtodo-button addtodo-cancel" onClick={this.props.closeAdd}>Cancel</button>
                    </div>
                </form>
            </div >
        )
    };
}
export default AddToDo;