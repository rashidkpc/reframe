import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Dataframe from 'plugins/reframe/lib/dataframe/dataframe';

import './table.less';

const Connection = React.createClass({
  getInitialState() {
    return {beer: 0};
  },
  render() {
    const header = _.map(this.props.dataframe.columns.ordered, (column) => (
      <th className={`reframe--type--${column.type}`} key={column.name}>
        {column.name}
      </th>
    ));

    const rows = _.map(this.props.dataframe.toTuples, (row, i) => {
      const fields = _.map(row, field => (
        <td className={`reframe--type--${field.column.type}`} key={field.column.name}>
          {field.value}
        </td>)
      );

      return (<tr key={i}>{fields}</tr>);
    });
    return (
      <div>
        <table className="table">
          <thead><tr>{header}</tr></thead>
          <tbody>{rows}</tbody>
        </table>
        <pre>{JSON.stringify(this.props.dataframe, null, ' ')}</pre>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    dataframe: new Dataframe(state.data)
  };
}

export default connect(mapStateToProps)(Connection);
