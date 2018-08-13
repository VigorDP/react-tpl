import React, { Component } from 'react'
import { connect } from 'react-redux'
import SVG from 'utils/svg'
import styles from 'styles/App.scss'
import { loadJokeList } from 'api'

class App extends Component {
  componentWillMount() {
    this.props.loadJokeList()
  }

  render() {
    return (
      <div className={styles.App}>
        <header className="App-header">
          <img src={SVG.logo} className="App-logo" alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.joke[0] && this.props.joke[0].content}
        </p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    loadJokeList: () => dispatch(loadJokeList())
  }
}

function mapStateToProps(state, props) {
  return {
    joke: state.joke
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
