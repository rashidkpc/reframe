import { combineReducers } from 'redux';

function rootReducer(state = {}, action) {
  switch (action.type) {
    case 'CONNECT':
      console.log(action);
      return Object.assign({}, state, {
        connect: {
          to: action.payload.to,
          props: action.payload.props
        }
      });
    default:
      return state;
  }
}

export default rootReducer;
