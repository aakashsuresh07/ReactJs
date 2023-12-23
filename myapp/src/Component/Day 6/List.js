// export default function List()
// {
//     const students = ["Aakash", "Suresh", "Raj", "Ram"]
//     const result = students.map((stu, index) => <li key = {index}>{index}=>{stu}</li>)

//     return (
//         <div>
//             <ul>
//                 {result}
//             </ul>
//         </div>
//     )
// }


import React from 'react'

export default function List() {

    const college = [{id: 1, stuName: "Aakash", age: 19},
                     {id: 2, stuName: "Suresh", age: 36},
                     {id: 3, stuName: "Ram", age: 22},]

    const display = college.map((col)=> <li key = {col.id} > {col.stuName} {col.age}</li>)
  return (
    <div>
      <h1>List of Students: </h1>
      {display}
    </div>
  )
}
