export default (connection) => {
  return {
    type: 'SHOW_CONNECT',
    to: connection
  };
};
