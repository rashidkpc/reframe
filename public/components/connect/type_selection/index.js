import React from 'react';
import _ from 'lodash';
export default React.createClass({

  selectType(type) {
    return () => console.log(type);
  },

  render() {
    const type = this.props.type;
    return (
      <div className="reframe-type" id={type.id}>
        <a onClick={this.selectType(type)}>{type.name}</a>: {type.help}
      </div>
    );
  }

});
