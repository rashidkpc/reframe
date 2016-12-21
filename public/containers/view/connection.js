import React from 'react';
import { connect } from 'react-redux';

const ConnectionWrap = React.createClass({
  getInitialState() {
    return {beer: 0};
  },
  render() {
    return (
      <div>
        <code>{JSON.stringify(this.props.connection, null, 2)}</code>

        Beer: {this.state.beer}
        <button onClick={() => this.setState({beer: this.state.beer + 1})}>More beer!</button>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    connection: state.connect
  };
}

export default connect(mapStateToProps)(ConnectionWrap);
