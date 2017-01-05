import _ from 'lodash';
import React from 'react';
import modules from 'ui/modules';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import initialState from './initial_state';

const app = modules.get('apps/reframe');

app.service('$store', (kbnVersion, basePath) => {

  // Set the defaults from Kibana plugin
  initialState.app.kbnVersion = kbnVersion;
  initialState.app.basePath = basePath;

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );

  return store;
});
