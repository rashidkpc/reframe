import React from 'react';
import { connect } from 'react-redux';

const Connection = React.createClass({
  getInitialState() {
    return {beer: 0};
  },
  render() {
    return (
      <div>
        <code>{JSON.stringify(this.props.connection, null, 2)}</code>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    connection: state.connect
  };
}

export default connect(mapStateToProps)(Connection);
