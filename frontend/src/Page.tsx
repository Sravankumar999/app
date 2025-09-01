import { useState } from "react";
import ListModels from "./pages/ListModels";


enum CURRENT_TAB {
    LIST = "list",
    ADD = "add",
    DELETE = "delete"
}

function Page() {
    const [currentTab, setCurrentTab] = useState<CURRENT_TAB | null>(CURRENT_TAB.LIST);
    return <>
        <div>
            <div className="navbar">
                <button onClick={() => { setCurrentTab(CURRENT_TAB.LIST) }}>List</button>
                <button onClick={(c) => { setCurrentTab(CURRENT_TAB.ADD) }}>Add</button>
                <button onClick={() => { setCurrentTab(CURRENT_TAB.DELETE) }}>Delete</button>
            </div>
            <div>
                { currentTab == CURRENT_TAB.LIST && <ListModels/> }
                { currentTab == CURRENT_TAB.ADD && "ADD" }
                { currentTab == CURRENT_TAB.DELETE && "DEL" }
            </div>
        </div>

    </>;
}


export default Page;