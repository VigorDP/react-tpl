import React, { Component } from 'react'
import { connect } from 'react-redux'
import Text from 'containers/Text'
import SVG from 'utils/svg'
import styles from 'styles/App.scss'
import { getMobileAction } from 'store/actions'

class App extends Component {
  componentWillMount() {
    this.props.getMobileAction()
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

function mapDispatchToProps(dispatch, props) {
  return {
    getMobileAction: () => dispatch(getMobileAction())
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
