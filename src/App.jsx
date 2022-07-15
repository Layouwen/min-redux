import './App.css'
import { Component } from 'react'
import store from './store'
import './demo/compose.js'

class App extends Component {
  componentDidMount () {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  onAdd = () => {
    store.dispatch({ type: 'ADD' })
  }

  onSub = () => {
    store.dispatch({ type: 'SUB' })
  }

  render () {
    return (
      <div className="App">
        <div>
          <div>value: {store.getState()}</div>
          <button onClick={this.onAdd}>add</button>
          <button onClick={this.onSub}>sub</button>
        </div>
      </div>
    )
  }
}

export default App
