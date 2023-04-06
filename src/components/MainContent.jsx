import Number from "./Number";
import Buttons from "./Buttons";
import { useState } from "react";

function MainContent(){
    const [counter, setCounter] = useState(0);

    return(
        <main className="main-content">
            <Number counter={counter}/>
            <Buttons counter={counter} setCounter={setCounter}/>
        </main>
    )
}

export default MainContent;