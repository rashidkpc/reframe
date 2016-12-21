import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from '../state/store';
import App from './app';

let rootStore = createStore(store);

export default React.createClass({

  render() {
    return (
      <Provider store={rootStore}>
        <App />
      </Provider>
    );
  }

});
