import React from 'react';
import Connect from 'plugins/reframe/containers/connect/connect';
import Connection from 'plugins/reframe/containers/view/connection';
import connectionSources from 'plugins/reframe/sources';

export default React.createClass({
  render() {
    const sources = connectionSources;

    return (
      <div className="reframe--content">
        <div>
          <h4>Connect to data</h4>
          <Connect types={sources}></Connect>
        </div>

        <div>
          <h4>Current Connection</h4>
          <Connection></Connection>
        </div>
      </div>
    );
  }
});
