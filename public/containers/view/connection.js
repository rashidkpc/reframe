import React from 'react';
import { connect } from 'react-redux';

const ConnectionWrap = React.createClass({
  render() {
    return (
      <code>{JSON.stringify(this.props.connection, null, 2)}</code>
    );
  }
});

function mapStateToProps(state) {
  return {
    connection: state.connect
  };
}

export default connect(mapStateToProps)(ConnectionWrap);
