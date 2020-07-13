import React, { Component } from 'react';
// import TodoItems from './Component/TodoItems';
class AddToDo extends Component {
    // state = {
    //     todos: [
    //         { title: '' }
    //     ],
    //     showAdd: false,
    //     showList: false
    // }

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
            title: this.state.title
        })
        this.setState({
            title: ''
        })
    }
    close = () => {
        // this.props.closeList();
        alert("Sao ADD không ẩn")
    }
    close1 = () => {
        this.props.closeListt({
            showAdd: false,
            showList: false
        });
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

                <button className="addtodo-butto" type="submit" onClick={this.props.closeListt}>Cancel</button>
                <button className="addtodo-butto" type="submit" onClick={this.close1}>Cancel3</button>
                <button className="addtodo-butto" type="submit" onClick={this.close}>Cancel1</button>
            </div >
        )
    };
    // }
}
export default AddToDo;