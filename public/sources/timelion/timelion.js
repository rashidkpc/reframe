import React from 'react';
import sources from 'plugins/reframe/sources/sources';

sources.push({
  id: 'timelion',
  name: 'Timelion',
  help: 'Use timelion to fetch data',
  toDataframe: function (value) {
    const dataframe =   {
      type: 'dataframe',
      header: {
        keys: ['timelion'], // We'll have to fill these from the first row. Nulls will be keys.
        values: []
      },
      rows: []
    };

    return dataframe;
  },
  form: () => (
    <div>Timelion RAWR</div>
  )
});
