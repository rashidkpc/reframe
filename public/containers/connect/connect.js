import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { sourceConnect } from 'plugins/reframe/state/actions';
import ConnectForm from './connect_form';

const Connect = React.createClass({
  save(source) {
    const { dispatch } = this.props;
    return (formData) => {
      // Now in theory we can dispatch a promise here.
      // But the right way todo it is to have the CONNECT action create the promise,
      // then dispatch *that*
      dispatch(sourceConnect({to: source, props: formData}));
    };
  },
  render() {
    return (
      <ConnectForm save={this.save} connection={this.props.connection} types={this.props.types}></ConnectForm>
    );
  }
});

function mapStateToProps(state) {
  return {
    connection: state.connect
  };
}

export default connect(mapStateToProps)(Connect);
