import React, { Component } from 'react'
import { connect } from 'react-redux'
import SVG from 'utils/svg'
import styles from 'styles/App.scss'

class App extends Component {
  componentWillMount() {
    this.props.dispatch({ type: 'FETCH_REQUESTED' })
  }

  render() {
    return (
      <div className={styles.App}>
        <header className="App-header">
          <img src={SVG.logo} className="App-logo" alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        <p className="App-intro">{this.props.joke}</p>
        <Text />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    joke: state.joke
  }
}

export default connect(
  mapStateToProps,
  null
)(App)
