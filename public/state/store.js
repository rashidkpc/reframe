import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
  inProgress: 0,
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
    args: {}
  }
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;
