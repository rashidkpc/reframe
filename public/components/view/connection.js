import React from 'react';
export default React.createClass({
  render() {
    return (
      <code>{JSON.stringify(this.props.connection, null, 2)}</code>
    );
  }
});
