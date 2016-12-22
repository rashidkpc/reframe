import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import TypeSelect from 'plugins/reframe/components/type_select';
import ConnectSource from 'plugins/reframe/containers/connect_source/connect_source';
import './connect.less';

export default React.createClass({

  getInitialState() {
    return {connectSource: null};
  },
  selectType(type) {
    return () => this.setState({connectSource: type});
  },
  render() {
    const source = this.state.connectSource;
    const SourceForm = _.get(source, 'form');
    const typeList = _.map(this.props.types, (type, name) => (
      <TypeSelect
        key={type.id}
        type={type}
        onSelectClick={this.selectType(type)}
      >
      </TypeSelect>
    ));

    const connectSourceDialog = (
      <ConnectSource source={source} done={this.selectType(null)}></ConnectSource>
    );

    return (
      <div className="reframe--connect">
        Select one of the connectors below to load data into the frame
        <div>
          {this.state.connectSource ? connectSourceDialog : typeList}
        </div>
      </div>
    );
  }
});
