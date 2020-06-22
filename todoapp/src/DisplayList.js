import React from 'react';

export default class DisplayList extends React.Component {
    constructor() {
        super();
        this.state = { done: false };
    }
    handleOnChange() {
        var _done = !this.state.done;
        this.setState({ done: _done });
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((item, i) => {
                        return <li key={item}>
                            {/* <input type="checkbox" style={{ fontSize: 'x-large' }} /> */}
                            <input
                                checked={this.state.done}
                                onChange={this.handleOnChange.bind(this)}
                                type="checkbox"
                                style={{ fontSize: "x-large" }} />
                            {item}
                            <button className="but1" onClick={this.props.handleDelete.bind(null, item)} >
                                Delete
                            </button>
                        </li>
                    })}
                </ul>
                {/* <h1>alololololo</h1> */}
            </div >
        )
    };
}
