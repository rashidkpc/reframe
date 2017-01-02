import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers';

const initialState = {
  isFetching: false,
  dialogs: {
    connect: null
  },
  connect: {
    to: null,
    props: {}
  },
  data: {
    header: {},
    rows: []
  },
  view: {
    type: 'table',
    properties: {}
  }
};

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(promiseMiddleware)
);
