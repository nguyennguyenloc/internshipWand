import React, { Component } from 'react';
class AddToDo extends Component {
    state = {
        title: ''
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({
            title: this.state.title
        })
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <div className="addtodo">
                <h3>Add List</h3>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Title: <input placeholder="Get some ..." value={this.state.title} onChange={this.handleTitleChange} />
                        <button className="addtodo-butto" type="submit">Add</button>
                    </div>
                    <br />
                    {/* <button className="addtodo-button" type="submit">Add</button> */}
                </form>
            </div >
        )
    };
}
export default AddToDo;