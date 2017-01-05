import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

export default React.createClass({
  getInitialState() {
    if (_.get(this.props.current.to, 'id') === this.props.source.id) {
      return this.props.current.props;
    } else {
      return this.props.source.defaults || {};
    }
  }, // This could be initialized with the defaults for the form right?
  updateFormState(prop) {
    return (event) => {
      this.setState(_.assign({}, this.state, {[prop]: event.target.value}));
    };
  },
  save() {
    console.log('Ran!');
    this.props.save(this.state);
  },
  render() {
    const {source, done} = this.props;
    const displayName = source.displayName;
    const Form = _.get(source, 'form');

    return (
      <div className="reframe--connect-source">
        <div className="reframe--connect-source--source-name">
          <i className="fa fa-database"></i> {displayName} (<a onClick={done}>Change</a>)
        </div>
        <Form value={this.state} commit={this.updateFormState} run={this.save}></Form>
        <div className="reframe--connect-buttons">
          <button
            className="btn btn-success"
            onClick={this.save}>
            Apply
          </button>
        </div>
      </div>
    );
  }
});
