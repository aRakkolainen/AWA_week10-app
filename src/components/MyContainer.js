//import React from "react";
import { MyList } from "./MyList";
import { useState } from "react";

const MyContainer = () => {
    const [items, setItems] = useState([{id:"1", text:"This is an item"}, {id: "2", text:"Also this"}])
    function handleClick(length) {
        const id=length+1;
        const newItem = {
            id: JSON.stringify(id),
            text: "New item" + JSON.stringify(id)
        }
        items.push(newItem);
    }
    return(
        <>
            <MyList header="Really epic list component" items={items}></MyList>
            <textarea></textarea>
            <button onClick={() => handleClick(items.length)}>Add new item</button>
        </>

    )
}

export default MyContainer