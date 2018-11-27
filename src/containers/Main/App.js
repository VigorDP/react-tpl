import React, { Component } from 'react';
import { connect } from 'react-redux';
import SVG from 'utils/svg';
import styles from 'styles/App.scss';
import { loadJokeListAction } from 'store/actions';
import { is, Map } from 'immutable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1
    };
  }

  componentWillMount() {
    this.props.loadJokeListAction();
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        a: 1
      });
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('props', this.state === nextState, is(this.state, nextState));
    return (
      !(this.props === nextProps || is(this.props, nextProps)) ||
      !(this.state === nextState || is(Map(this.state), Map(nextState)))
    );
  }

  render() {
    const content = this.props.joke.getIn([0, 'content']);
    // const content = this.props.joke[0].content;
    //

    // const content2 = this.props.joke.get(0).get("content");
    console.log('render');
    return <div className={styles.App}>1</div>;
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    loadJokeListAction: () => dispatch(loadJokeListAction())
  };
}

function mapStateToProps(state, props) {
  console.log('mapStateToProps', props);

  return {
    joke: state.get('joke')
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
