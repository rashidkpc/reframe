import { combineReducers } from 'redux';

function rootReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_START':
      return Object.assign({}, state, {
        inProgress: state.inProgress + 1
      });

    case 'FETCH_FAIL':
    case 'FETCH_END':
      return Object.assign({}, state, {
        inProgress: state.inProgress - 1
      });

    case 'SOURCE_CONNECT_START':
      return Object.assign({}, state, {
        connect: {
          to: action.payload.to,
          props: action.payload.props
        }
      });

    case 'SOURCE_CONNECT_END':
      return Object.assign({}, state, {
        data: action.payload
      });

    case 'VIEW_SET':
      return Object.assign({}, state, {
        view: {
          type: action.payload.type,
          args: {}
        }
      });

    default:
      return state;
  }
}

export default rootReducer;
