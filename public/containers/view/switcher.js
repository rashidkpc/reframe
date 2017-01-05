import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Dataframe from 'plugins/reframe/lib/dataframe/dataframe';
import elements from 'plugins/reframe/elements/elements';
import { viewSet } from 'plugins/reframe/state/actions';

const ViewSwitch = React.createClass({
  setType(event) {
    const { dispatch }  = this.props;
    dispatch(viewSet({type: event.target.value}));
  },
  render() {
    const { dispatch, view } = this.props;

    const viewOptions = _.map(elements, (elementType) => (
      <option key={elementType.name} value={elementType.name}>{elementType.displayName}</option>
    ));

    return (
      <form onSubmit={this.setType}>
        <select value={this.props.view.type} onChange={this.setType}>
          {viewOptions}
        </select>
      </form>
    );
  }
});

function mapStateToProps(state) {
  return {
    view: state.view
  };
}

export default connect(mapStateToProps)(ViewSwitch);
