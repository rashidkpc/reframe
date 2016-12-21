import React from 'react';
import _ from 'lodash';
import TypeSelect from 'plugins/reframe/components/type_select';
import './connect.less';

function selectType(type) {
  return () => console.log(type);
}

export default ({types}) => {
  const typeList = types.map((type) => (
    <TypeSelect
      key={type.id}
      type={type}
      onSelectClick={selectType(type)}
    >
    </TypeSelect>
  ));

  return (
    <div className="reframe--connect">
      Select one of the connectors below to load data into the frame
      <div>
        {typeList}
      </div>
    </div>
  );
};
