import React from 'react';
import { connect } from 'react-redux';
import Dataframe from 'plugins/reframe/lib/dataframe';

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
    connection: new Dataframe(state.data)
  };
}

export default connect(mapStateToProps)(Connection);
