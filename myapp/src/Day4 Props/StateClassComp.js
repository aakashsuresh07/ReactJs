import { Component } from "react";

class StateClassComp extends Component
{
    state = {
        color: "Yellow",
        price: 121
    }

    handleChange = () => {this.setState({color: "Red"})}
    handleChange1 = () => {this.setState({price: "115"})}

    render()
    {
        return(
            <div>
                <h1>The color i have selected is {this.state.color} the price is {this.state.price}</h1>
                <button onClick={this.handleChange}>Click</button>
                <button onClick={this.handleChange1}>Click</button>
            </div>
        )
    }
}

export default StateClassComp;