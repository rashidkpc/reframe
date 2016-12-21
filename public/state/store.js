const initialState = {
  connect: {
    type: 'null',
    value: ''
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

const store = (state = initialState, action) => {
  switch (action.type) {
    case 'CONNECT':
      return Object.assign({}, state, {
        connect: action.to
      });
    default:
      return state;
  }
};

export default store;
