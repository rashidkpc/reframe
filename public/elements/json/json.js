import React from 'react';
import Element from 'plugins/reframe/elements/element';
import _ from 'lodash';

export default new Element('json', {
  displayName: 'JSON',
  template: ({args}) => {
    const dataframe = args.dataframe;
    return (
      <pre>
        {JSON.stringify(dataframe, null, ' ')}
      </pre>
    );

  }
});
