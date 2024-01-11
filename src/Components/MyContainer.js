import React from "react";
import { MyList } from "./MyList";

export function MyContainer() {
    return(
        <MyList header="Really epic list component" items={[{id:"1", text:"This is an item"}, {id: "2", text:"Also this"}]}></MyList>
    )
}