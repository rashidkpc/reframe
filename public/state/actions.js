import { createAction } from 'redux-actions';

// CONNECT payload: {to: someSource, props: sourceParameters}
// export const sourceConnect = createAction('SOURCE_CONNECT');

const fetchStart = createAction('FETCH_START');
const fetchEnd = createAction('FETCH_END');
const fetchFail = createAction('FETCH_FAIL');

export const viewSet = createAction('VIEW_SET');
export const sourceConnectStart = createAction('SOURCE_CONNECT_START');
export const sourceConnectEnd = createAction('SOURCE_CONNECT_END');

export function sourceConnect(payload) {
  const {to, props} = payload;

  return (dispatch, getState) => {
    const appData = getState().app;

    dispatch(sourceConnectStart(payload));
    dispatch(fetchStart());
    return Promise
      .resolve(to.toDataframe(props, appData))
      .then(result => {
        dispatch(fetchEnd());
        dispatch(sourceConnectEnd(result));
      })
      .catch(e => {
        dispatch(fetchFail(e));
      });
  };
};
