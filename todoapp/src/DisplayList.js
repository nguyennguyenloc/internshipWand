import React from 'react';

export default class DisplayList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((item, i) => {
                        return <li key={item}>
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
