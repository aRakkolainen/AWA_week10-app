//import React from "react";


function MyList(props) {
    //console.log(props.header)
    //console.log(props.items);
    const items = props.items; 
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