import React from 'react';
import { connect } from 'react-redux';

import Connection from 'plugins/reframe/components/view/connection';

const ConnectionWrap = React.createClass({
  render() {
    return (
      <Connection connection={this.props.connection}></Connection>
    );
  }
});

function mapStateToProps(state) {
  return {
    connection: state.connect
  };
}

export default connect(mapStateToProps)(ConnectionWrap);
