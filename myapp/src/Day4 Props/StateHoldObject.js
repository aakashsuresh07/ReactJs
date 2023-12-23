import React, { useState } from "react";

export default function StateHold()
{
    const[college, setCollege] = useState({cid: 1, cname: "SKCT", year: 2023})

    const changeID = () => {
        setCollege((prevState) => {return{...prevState, cid: 2}})
    }

    const changeCollege = () => {
        setCollege((prevState) => {return{...prevState, cname: "SKCET"}})
    }

    const changeYear = () => {
        setCollege((prevState) => {return{...prevState, year: 2024}})
    }

    return(
        <div>
            <h1>College ID is {college.cid}</h1>
            <h1>College name is {college.cname}</h1>
            <h1>Year {college.year}</h1>

            <button onClick = {changeID}>ChangeID</button>
            <button onClick={changeCollege}>ChangeClg</button>
            <button onClick = {changeYear}>ChangeYear</button>
        </div>
    )
}