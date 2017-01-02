import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { sourceConnect } from 'plugins/reframe/state/actions';
import ConnectForm from './connect_form';

const Connect = React.createClass({
  save(source) {
    const { dispatch } = this.props;
    return (formData) => {
      return () => {
        // Now in theory we can dispatch a promise here.
        // But the right way todo it is to have the CONNECT action create the promise,
        // then dispatch *that*
        dispatch(sourceConnect({to: source, props: formData}));
      };
    };
  },
  render() {
    return (
      <ConnectForm save={this.save} types={this.props.types}></ConnectForm>
    );
  }
});

export default connect()(Connect);
