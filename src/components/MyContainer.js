//import React from "react";
import MyList from "./MyList";
import { useState } from "react";

const MyContainer = () => {
    const [items, setItems] = useState([{id:"1", text:"This is an item", clicked:false}, {id: "2", text:"Also this", clicked:false}])
    const [text, setText] = useState(null);
    const updateItem = (id) => {
        items[Number(id)-1].clicked = true;
    }
    function handleClick(text) {
        items.push({id: JSON.stringify(items.length+1), text: text, clicked: false})
        setItems(items);
    }
    return(
        <>
            <MyList 
                updateItem={updateItem}
                header="Really epic list component" 
                items={items}>
                </MyList>
            <textarea onChange={(e) => setText(e.target.value)}></textarea>
            <button onClick={() => handleClick(text)}>Add new item</button>
        </>

    )
}

export default MyContainer