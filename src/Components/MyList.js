import React from "react";


export default function MyList(props) {
    const items = props.items; 
    console.log(items)
    const listItems = items.map((item) => 
    <li key={items.id}>{item.text}</li>)
    return (
        <>
            <h1>{props.header}</h1>
            <ul>{listItems}</ul>
        </>
    )
}