import React from 'react';

export default ({type, onSelectClick}) => (
  <div className="reframe-type" id={type.id}>
    <a onClick={onSelectClick}>{type.name}</a>: {type.help}
  </div>
);
