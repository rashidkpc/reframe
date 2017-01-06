import React from 'react';
import _ from 'lodash';
import fetch from 'isomorphic-fetch';
import Source from 'plugins/reframe/sources/source';
import sources from 'plugins/reframe/sources/sources';
import TimelionExpression from './components/timelion_expression';
import './timelion.less';
import moment from 'moment';

sources.push(new Source('timelion', {
  displayName: 'Timelion',
  help: 'Use timelion to fetch data',
  defaults: {
    expression: '.static(5:10:2:10:23:11:12:13:14).mvavg(10)',
    interval: '1m'
  },
  form: ({value, commit, run}) => {
    const {expression, interval} = value;
    return (
      <form className="reframe--timelion form-inline" onSubmit={run}>
        <TimelionExpression onChange={commit('expression')} expression={expression}></TimelionExpression>
        <button className="btn" type="submit"><i className="fa fa-play"></i></button>
      </form>
    );
  },
  toDataframe: function (value, app) {
    const dataframe =   {
      type: 'dataframe',
      columns: [{name: 'foo', type: 'string'}],
      rows: []
    };

    const body = {
      sheet: [value.expression],
      time: {
        from: 'now-2y',
        to: 'now',
        interval: 'auto',
        timezone: 'America/Phoenix'
      }
    };

    const timelionResp =  fetch('../api/timelion/run', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'kbn-xsrf': 'turdSandwich',
      },
      body: JSON.stringify(body)
    })
    .then(resp => resp.json());

    return timelionResp.then(resp => {
      const seriesList = resp.sheet[0];

      const columns = [
        {name: 'label', type: 'string'},
        {name: 'timestamp', type: 'string'},
        {name: 'value', type: 'number'}
      ];

      const rows = [].concat.apply([], _.map(seriesList.list, series =>
        _.map(series.data, point => {
          return {
            label: series.label,
            timestamp: moment(point[0]).format(),
            value: point[1]
          };
        })
      ));

      return {columns: columns, rows: rows};
    });

  }
}));
