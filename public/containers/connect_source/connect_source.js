import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

export default React.createClass({
  getInitialState() {
    return this.props.source.defaults || {};
  }, // This could be initialized with the defaults for the form right?
  updateFormState(prop) {
    return (event) => {
      this.setState(_.assign({}, this.state, {[prop]: event.target.value}));
    };
  },
  save() {
    this.props.save(this.state);
    this.props.done();
  },
  render() {
    const source = this.props.source;
    const Form = _.get(source, 'form');

    return (
      <div className="reframe--connect-source">
        <Form values={this.state} commit={this.updateFormState}></Form>
        <div className="reframe--connect-buttons">
          <button
            className="btn btn-success"
            onClick={this.save}>
            Save
          </button>
          <button
            className="btn btn-warning"
            onClick={this.props.done}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
});
