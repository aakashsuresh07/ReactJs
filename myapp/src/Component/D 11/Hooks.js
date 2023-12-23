import React, { useState, useEffect } from "react";

function Hooks() {
    const[count, setCount] = useState(0);
    useEffect(() => {
        document.title = 'You clicked it ${count} times'
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick = {() => setCount(count + 1)}>ClickMe</button>
        </div>
    )
}

export default Hooks;