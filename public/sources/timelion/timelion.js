import React from 'react';
import Source from 'plugins/reframe/sources/source';
import sources from 'plugins/reframe/sources/sources';

sources.push(new Source('timelion', {
  displayName: 'Timelion',
  help: 'Use timelion to fetch data',
  toDataframe: function (value) {
    const dataframe =   {
      type: 'dataframe',
      columns: [{name: 'foo', type: 'string'}],
      rows: []
    };

    return Promise.resolve(dataframe);
  },
  form: () => (
    <div>Timelion RAWR</div>
  )
}));
