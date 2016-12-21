import React from 'react';
import Connect from './connect/index';
import Connection from 'plugins/reframe/containers/view/connection';
export default React.createClass({

  render() {
    const types = [
      { id: 'csv', name: 'CSV', help: 'Upload a CSV file' },
      { id: 'timelion', name: 'Timelion', help: 'Connect using a timelion expression'},
      { id: 'es_queries', name: 'Elasticsearch Query List', help: 'Use a list of Elasticsearch Lucene queries'},
    ];

    return (
      <div className="reframe--content">
        <div>
          <h4>Connect to data</h4>
          <Connect types={types}></Connect>
        </div>

        <div>
          <h4>Current Connection</h4>
          <Connection></Connection>
        </div>
      </div>
    );
  }

});
