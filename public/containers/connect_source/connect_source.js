import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

export default React.createClass({
  render() {
    return (
      <div className="reframe--connect-source">
        <code>{JSON.stringify(this.props.source,null,' ')}</code>
        <button
          className="btn btn-warning"
          onClick={this.props.cancel}>
          Cancel
        </button>
      </div>
    );
  }
});
