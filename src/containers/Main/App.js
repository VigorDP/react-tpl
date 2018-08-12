import React, { Component } from 'react'
import Text from 'containers/Text'
import logo from 'assets/svgs/logo.svg'
import styles from 'styles/App.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
