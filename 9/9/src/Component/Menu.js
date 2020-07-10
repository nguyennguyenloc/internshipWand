import React, { Component } from 'react';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusButton: true,
            statusList: true
        }
    }
    showButton = () => {
        if (this.state.statusButton) {
            return <button onClick={(e) => this.props.formToggle(e)}>Add List</button>
        }
    }
    statusList = () => {
        if (this.state.statusList) {
            return <button onClick={(e) => this.props.formToggle(e)}>Show List</button>
        }
    }
    render() {
        return (
            <div className="Menu ">
                <div>{this.showButton()}</div>
                <button>List</button>
                <div>{this.statusList()}</div>
            </div>
        )
    };
}
export default Menu;