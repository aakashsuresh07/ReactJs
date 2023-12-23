import axios from 'axios';
import React, { useState } from 'react'

export default function DeleteAxios() {
    
    const [id, setId] = useState('');
    const handleId = (event) => {setId (event.target.value)}

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.delete (`http://localhost:3001/user/${id}`)
        
        .then (res => {
            console.log(res.data)
        })

        .catch(error => {console.log ("Error occured " + error)})
    }

    return (
        <div>
            <h1>Axios Delete</h1>
            <form onSubmit={handleSubmit}>
                <input type = 'text' value = {id} onChange = {handleId}></input>
                <button type = 'Submit'>delete</button>
            </form>
        </div>
    )
}