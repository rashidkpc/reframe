import _ from 'lodash';

export default class Dataframe {
  /*
    Data format:
    {
      columns: [
        {name: 'model', type: 'string' },
        {name: 'segment', type: 'string' },
        {name: 'price', type: 'number' },
      ],
      rows: [
        {model: 'crosstrek', segment: 'SUV', price: 21000},
        {model: 'impreza', segment: 'sedan', price: 16000},
        {model: 'outback', segment: 'SUV', price: 25000}
      ]
    }
  */
  constructor(data) {
    // Consider using immutable.js in this class
    this.columns = data.columns;
    this.rows = data.rows;
  }

  get toTuples() {
    const columns = _.map(this.columns, column => _.map(this.rows, column.name));
    return _.zip.apply(this, columns);
  }
}
