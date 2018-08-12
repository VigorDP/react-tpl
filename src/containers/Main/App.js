import React, { Component } from 'react'
import Text from 'containers/Text'
import SVG from 'utils/svg'
import styles from 'styles/App.scss'
import { loadJokeList, getMobile } from 'api'
class App extends Component {
  componentWillMount() {
    loadJokeList()
  }

  render() {
    return (
      <div className={styles.App}>
        <header className="App-header">
          <img src={SVG.logo} className="App-logo" alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Text />
      </div>
    )
  }
}

export default App
