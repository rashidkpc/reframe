import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Dataframe from 'plugins/reframe/lib/dataframe/dataframe';
import elements from 'plugins/reframe/elements/index';

const Connection = React.createClass({
  getInitialState() {
    return {beer: 0};
  },
  render() {
    const { view, dataframe, connect } = this.props;
    const Element = elements[view.type].template;
    const args = {dataframe: dataframe};
    return (
      <div>
      <Element args={args}></Element>
      <pre>{JSON.stringify(connect, null, ' ')}</pre>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    dataframe: new Dataframe(state.data),
    connect: state.connect,
    view: state.view
  };
}

export default connect(mapStateToProps)(Connection);
