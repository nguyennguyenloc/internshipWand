import React from 'react';
// import ReactDOM from 'react-dom';

export default class DisplayList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((item, i) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
                {/* <h1>alololololo</h1> */}
            </div>
        )
    };
}
// ReactDOM.render(<DisplayList />, document.getElementById('root'));