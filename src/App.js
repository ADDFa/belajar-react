import logo from './logo.svg'
import './App.css'
import TestComponent from './TestComponent'
import StateComponent from './StatefulComponent'
import StatefulChange from './StatefulChange'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TestComponent properti={`"Ini Default Yang Dikirimkan"`} />
      <StateComponent />
      <StatefulChange />
    </div>
  )
}

export default App
