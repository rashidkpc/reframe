import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootStore from '../state/store';
import App from './app';

export default React.createClass({

  render() {
    return (
      <Provider store={rootStore}>
        <App />
      </Provider>
    );
  }

});
