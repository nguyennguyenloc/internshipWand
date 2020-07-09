import React from 'react';
import App from './App';

function Info(props) {
    return (
        <div>
            <App text="gugugu" />
            <p>{props.infoo.name}</p>
            <p>{props.infoo.age}</p>
        </div>
    );
}
export default Info;