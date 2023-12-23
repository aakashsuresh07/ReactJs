import {useState} from "react";

function StateFunction()
{
    const[carName, setCarName] = useState("Alfa Romeo");
    const changeCarName = () => setCarName("Abarth")

    const[count, setCount] = useState(0)
    const changeCount = () => setCount(count + 1)

    const decrCount = () => setCount(count - 1)

    return(
        <div>
            <h1>My car name is {carName}</h1>
            <button onClick={() => setCarName("Abarth")}>ChangeCar</button>
            
            <h1>Count {count}</h1>
            <button onClick = {changeCount}>increment</button>
            <button onClick = {decrCount}>decrement</button>
        </div>
    )
}

export default StateFunction;