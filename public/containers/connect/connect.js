import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import TypeSelect from 'plugins/reframe/components/type_select';
import './connect.less';

export default React.createClass({

  getInitialState() {
    return {connectDialog: null};
  },
  selectType(type) {
    return () => this.setState({connectDialog: type});
  },
  render() {
    const typeList = this.props.types.map((type) => (
      <TypeSelect
        key={type.id}
        type={type}
        onSelectClick={this.selectType(type)}
      >
      </TypeSelect>
    ));

    const connectDialog = (
      <button
        className="btn btn-warning"
        onClick={this.selectType(null)}>
        Cancel
      </button>
    );

    return (
      <div className="reframe--connect">
        Select one of the connectors below to load data into the frame
        <div>
          {this.state.connectDialog ? connectDialog : typeList}
        </div>
      </div>
    );
  }


});
