import React from "react"

class StatefulChange extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Adha Dont Differatama",
            visibility: true
        }

        this.testClick = this.testClick.bind(this)
        this.changeVisibility = this.changeVisibility.bind(this)
    }

    testClick() {
        // this.setState({ name: "ADDFa" })
        // atau
        this.setState(state => {
            const isName = state.name === "ADDFa"
            const newName = isName ? "Adha Dont Differatama" : "ADDFa"
            return { name: newName }
        })
    }

    changeVisibility() {
        this.setState((state, props) => ({
            visibility: !state.visibility
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.testClick}>Click Me</button>
                <button onClick={this.changeVisibility}>Change Visibility</button>
                <h1>{this.state.name}</h1>
                <h1>{this.state.visibility.toString()}</h1>
            </div>
        )
    }
}

export default StatefulChange