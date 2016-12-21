export default (connection) => {
  return {
    type: 'CONNECT',
    to: connection
  };
};
