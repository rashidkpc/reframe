import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

export default React.createClass({
  render() {
    const source = this.props.source;
    const Form = _.get(source, 'form');

    return (
      <div className="reframe--connect-source">
        <Form></Form>
        <button
          className="btn btn-warning"
          onClick={this.props.done}>
          Cancel
        </button>
      </div>
    );
  }
});
