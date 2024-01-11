import React from "react";


const MyList = (props) => {
    const items = props.items; 
    const listItems = items.map((item) => 
    <li key={items.id} onClick={() => props.updateItem(item.id)}>{item.text}</li>)
    return (
        <>
            <h1>{props.header}</h1>
            <ul>{listItems}</ul>
        </>
    )
}

export default MyList