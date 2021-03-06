import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import SourceSelect from 'plugins/reframe/components/source_select';
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
    const sourceList = _.map(this.props.sources, (source) => (
      <SourceSelect
        key={source.id}
        type={source}
        onSelectClick={this.selectType(source)}
      >
      </SourceSelect>
    ));

    const sourceListDialog = (
      <div>
        Select one of the connectors below to load data into the frame
        {sourceList}
      </div>
    );

    const connectSourceDialog = (
      <ConnectSource
        source={source}
        current={current}
        save={this.props.save(source)}
        done={this.selectType(null)}>
        Here is also some stuff
      </ConnectSource>
    );

    return (
      <div className="reframe--connect">
          {this.state.connectSource ? connectSourceDialog : sourceListDialog}
      </div>
    );
  }
});
