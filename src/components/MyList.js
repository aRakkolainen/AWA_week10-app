import React from "react";

const MyList = (props) => {
    const items = props.items;
    console.log(items) 
    const listItems = items.map((item) => {
        if (item.clicked) {
            return <li key={items.id} onClick={() => props.updateItem(item.id)} textDecoration="line-through">{item.text}</li>
        } else {
            return <li key={items.id} onClick={() => props.updateItem(item.id)}>{item.text}</li>
        }
    } )
    return (
        <>
            <h1>{props.header}</h1>
            <ul>{listItems}</ul>
        </>
    )
}

export default MyList