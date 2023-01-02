import React from "react"
import PropTypes from "prop-types"
import HelloWorld from "./HelloWorld"
import "./coba.css"

class TestComponent extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="coba">
                <h2>Ini Adalah Testing Component</h2>
                <p>Dengan Default Properti {this.props.properti}</p>
                <p>dan</p>
                <p>Dengan Tipe Properti</p>

                <HelloWorld />
                <HelloWorld nama="User" />
            </div>
        )
    }
}

TestComponent.defaultProps = {
    properti: "default"
}

TestComponent.propTypes = {
    properti: PropTypes.string
}

export default TestComponent