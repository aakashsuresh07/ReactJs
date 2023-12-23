import React, {useState} from 'react'

export default function DynamicRendering() {
    const[x, setX] = useState(12)
    return (
        x > 10 ? <p>x is greater than 10</p> : <p>x is less than 10</p>
    )
}