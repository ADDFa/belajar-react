import React from "react"
import TestComponent from "./TestComponent"

class StateComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Adha Dont Differatama",
            componentLain: <TestComponent />
        }
    }

    render() {
        const userName = `Hallo, Nama Saya ${this.state.name}`

        return (
            <div>
                <h1>{userName}</h1>
                {this.state.componentLain}
            </div>
        )
    }
}

export default StateComponent