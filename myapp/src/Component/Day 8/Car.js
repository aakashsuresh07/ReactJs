import React, {Component} from 'react';

function Car({carName})
{
    if(carName === "Suzuki") {
        throw new Error("Suzuki is not a bike.")
    }
    return (
        <div>
            {carName}
        </div>
    )
}