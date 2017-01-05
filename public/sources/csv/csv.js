import React from 'react';
import _ from 'lodash';
import './csv.less';
import {parse} from './parse';
import sources from 'plugins/reframe/sources/sources';

sources.push({
  id: 'csv',
  name: 'CSV',
  help: 'Import a CSV',
  toDataframe: function (value) {
    const dataframe =   {
      type: 'dataframe',
      columns: [],
      rows: []
    };

    const parsedArrays = parse(value.csv);

    const keys = parsedArrays.shift();
    dataframe.rows = _.map(parsedArrays, (values) => _.zipObject(keys, values));
    dataframe.columns = _.map(keys, (key) => {
      return {
        name: key,
        type: typeof dataframe.rows[0][key]
      };
    });

    return dataframe;
  },
  defaults: {
    csv:  '"model","segment","price"\n' +
          '"crosstrek","SUV",21000\n' +
          '"impreza","sedan",16000\n' +
          '"outback","SUV",25000\n'
  },
  // You can write JSX here.
  // If you need more state you should create a component to handle it.
  // Make sure to call commit('someProperty') to tell reframe you have a saveable change.
  // Simply use onChange={commit('someProperty')} as your default. Think of it as ng-model, sort of.
  // The data will go "up" using commit, and come back down on the value attribute.
  form: ({values, commit}) => (
    <div className="reframe--csv">
      <div className="reframe--csv--character-count">Length: {_.get(values, 'csv.length')}</div>
      <textarea className="form-control" rows="10" onChange={commit('csv')} value={values.csv}></textarea>
    </div>
  )
});
