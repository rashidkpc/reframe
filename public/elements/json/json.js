import React from 'react';
import Element from 'plugins/reframe/elements/element';
import elements from 'plugins/reframe/elements/elements';

import _ from 'lodash';

elements.push(new Element('json', {
  displayName: 'JSON',
  template: ({args}) => {
    const dataframe = args.dataframe;
    return (
      <pre>
        {JSON.stringify(dataframe, null, ' ')}
      </pre>
    );
  }
}));
