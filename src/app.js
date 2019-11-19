import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

class App extends Component {
  constructor(props) {
    super(props)
    //TODO: injectables (actions, constants?, reducers, sagas)
    this.store = configureStore(props)
  }
  
  //TODO: init if not hasInit
  //componentDidMount() {
    //this.props.dispatch(initEvent())
  //}

  render() {
    return (
      <Provider store={this.store}>
        <div>SubApp rendered</div>
      </Provider>
    )
  }
}

export default App
