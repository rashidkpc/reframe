import React from 'react';

export default {
  id: 'csv',
  name: 'CSV',
  help: 'Import a CSV',
  toDataframe: function (value) {
    const dataframe =   {
      type: 'dataframe',
      header: {
        keys: ['csv'], // We'll have to fill these from the first row. Nulls will be keys.
        values: []
      },
      rows: []
    };

    return dataframe;
  },
  form: () => (<div>CSV over here!</div>)
};
