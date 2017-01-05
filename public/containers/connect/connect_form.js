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
    const current = this.props.connection;
    const typeList = _.map(this.props.sources, (source) => (
      <TypeSelect
        key={source.id}
        type={source}
        onSelectClick={this.selectType(source)}
      >
      </TypeSelect>
    ));

    const connectSourceDialog = (
      <ConnectSource
        source={source}
        current={current}
        save={this.props.save(source)}
        done={this.selectType(null)}>
      </ConnectSource>
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
