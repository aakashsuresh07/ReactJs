import React from 'react'

export default function TryCatch({fruit}) {
    try {
        if(fruit === "Onion") {
            throw new Error(" Not a fruit")
        }
    }

    catch (error) {
        console.log
    }
  return (
    <div>
      TryCatch
    </div>
  )
}
