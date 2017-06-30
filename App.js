import React from 'react';
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import AppWithNavigationState from './lib/Navigators'
import reducers from './lib/reducers'
import appEpic from './lib/epics'

const epicMiddleware = createEpicMiddleware(appEpic);

const store = createStore(reducers, applyMiddleware(epicMiddleware));

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState/>      
      </Provider>
    );
  }
}