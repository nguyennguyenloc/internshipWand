import React from 'react';
const BoxItem = (props) => {
    return (
        <li>
            {props.propsBox}
        </li>
    )
};
const BoxList = (props) => {
    const boxList = props.boxList;
    return (
        <ul className="box-list">
            {boxList.map((itemBox) => <BoxItem propsBox={itemBox} />)}
        </ul>
    )
};
export default BoxList;