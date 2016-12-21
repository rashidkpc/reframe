import React from 'react';
import _ from 'lodash';
import TypeSelect from './type_selection';
import './connect.less';

export default React.createClass({

  render() {
    // Make this a component later
    const typeList = this.props.types.map((type) => (<TypeSelect key={type.id} type={type}></TypeSelect>));

    return (
      <div className="reframe--connect">
        Select one of the connectors below to load data into the frame
        <div>
          {typeList}
        </div>
      </div>
    );
  }

});
