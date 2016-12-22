import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

export default React.createClass({
  render() {
    const source = this.props.source;

    return (
      <div className="reframe--connect-source">
        {this.props.children}
        <button
          className="btn btn-warning"
          onClick={this.props.done}>
          Cancel
        </button>
      </div>
    );
  }
});
