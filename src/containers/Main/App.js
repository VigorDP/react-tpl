import React, { Component } from 'react'
import { connect } from 'react-redux'
import SVG from 'utils/svg'
import styles from 'styles/App.scss'
import { loadJokeListAction } from 'store/actions'

class App extends Component {
  componentWillMount() {
    this.props.loadJokeListAction()
  }

  render() {
    const content = this.props.joke.getIn([0, 'content']),
      content2 = this.props.joke.get(0).get('content')
    return (
      <div className={styles.App}>
        <header className="App-header">
          <img src={SVG.logo} className="App-logo" alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        <p className="App-intro">
          {content}
          {content2}
        </p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    loadJokeListAction: () => dispatch(loadJokeListAction())
  }
}

function mapStateToProps(state, props) {
  return {
    joke: state.get('joke')
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
