import React from 'react';

const ListItem = (props) => {
    return (
        <li>
            <h2>{props.propsItem.title}</h2>
            <div>
                {props.propsItem.info}
            </div>
        </li>
    )
};
const ItemList = (props) => {
    const propsList = props.itemList;

    return (
        <ul className="item-list">
            {propsList.map((item) => <ListItem propsItem={item} />)}
        </ul>
    )
};

export default ItemList;