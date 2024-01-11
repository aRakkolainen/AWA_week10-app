//import React from "react";


function MyList(props) {
    const items = props.items; 
    console.log(items)
    const listItems = items.map((item) => 
    <li>{item.text}</li>)
    return (
        <>
            <h1>{props.header}</h1>
            <ul>{listItems}</ul>
        </>
    )
}

export default MyList;