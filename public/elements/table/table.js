import React from 'react';
import Element from 'plugins/reframe/elements/element';
import _ from 'lodash';
import './table.less';

export default new Element('table', {
  displayName: 'Table',
  template: ({args}) => {
    const dataframe = args.dataframe;
    const header = _.map(dataframe.columns.ordered, (column) => (
      <th className={`reframe--type--${column.type}`} key={column.name}>
        {column.name}
      </th>
    ));

    const rows = _.map(dataframe.toTuples, (row, i) => {
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
      </div>
    );

  }
});
