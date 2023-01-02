import PropTypes from "prop-types"

const HelloWorld = ({ nama }) => {
    return (
        <div>
            <h1>Hallo Dunia</h1>
            <h2>Hallo {nama}</h2>
        </div>
    )
}

HelloWorld.defaultProps = {
    nama: "Adha Dont Differatama"
}

HelloWorld.typeProps = {
    nama: PropTypes.string
}

export default HelloWorld