import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import TypeSelect from 'plugins/reframe/components/type_select';
import showConnect from 'plugins/reframe/state/actions/show_connect';
import './connect.less';

function mapStateToProps(state) {
  return {
    showConnectDialog: state.dialogs.connect
  };
}

let Connect = ({types, showConnectDialog, dispatch}) => {

  function selectType(type) {
    return () => dispatch(showConnect(type));
  }

  const typeList = types.map((type) => (
    <TypeSelect
      key={type.id}
      type={type}
      onSelectClick={selectType(type)}
    >
    </TypeSelect>
  ));

  const connectDialog = (
    <button
      className="btn btn-warning"
      onClick={selectType(null)}>
      Cancel
    </button>
  );

  return (
    <div className="reframe--connect">
      Select one of the connectors below to load data into the frame
      <div>
        {showConnectDialog ? connectDialog : typeList}
      </div>
    </div>
  );
};

Connect = connect(mapStateToProps)(Connect);

export default Connect;
