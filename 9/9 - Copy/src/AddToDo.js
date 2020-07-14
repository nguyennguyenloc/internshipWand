import React, { Component } from 'react';
// import TodoItems from './Component/TodoItems';
class AddToDo extends Component {
    state = {
        title: '',
        showAdd: false,
        showList: false
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
        })
        this.setState({
            title: ''
        })
    }

    // close = () => {
    //     alert("Cancel: quay lại màn hình, Add: add List")
    // }

    render() {
        return (
            <div className="addtodo">
                <h1>Add List</h1>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input className="w3-input" placeholder="Get some ..." value={this.state.title} onChange={this.handleTitleChange} />
                    </div>
                    <br />
                    <div>
                        <button className="addtodo-button addtodo-add" type="submit">Add</button>
                        <button className="addtodo-button addtodo-cancel" onClick={this.props.closeList}>Cancel</button>
                    </div>
                </form>
                {/* <button className="addtodo-button" type="submit" onClick={this.close}>Notice</button> */}
            </div >
        )
    };
}
export default AddToDo;