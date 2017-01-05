import React from 'react';

export default ({type, onSelectClick}) => (
  <div className="reframe-type" id={type.id}>
    <a onClick={onSelectClick}>{type.displayName}</a>: {type.help}
  </div>
);
