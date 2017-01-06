import React from 'react';

export default ({expression, onChange}) => (
  <input className="form-control" onChange={onChange} value={expression}></input>
);
