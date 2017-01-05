var path = require('path');

module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'reframe',
    require: ['kibana', 'elasticsearch', 'timelion'],
    uiExports: {
      app: {
        title: 'Buh-zap!',
        description: 'Weeeeee',
        icon: 'plugins/reframe/icon.svg',
        main: 'plugins/reframe/app',
        injectVars: function (server) {
          var config = server.config();
          return {
            kbnIndex: config.get('kibana.index'),
            esShardTimeout: config.get('elasticsearch.shardTimeout'),
            esApiVersion: config.get('elasticsearch.apiVersion')
          };
        }
      },
      hacks: [
        'plugins/reframe/sources/csv/csv',
        'plugins/reframe/sources/timelion/timelion',

        'plugins/reframe/elements/json/json',
        'plugins/reframe/elements/table/table',
      ],
    },

    config: function (Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init: require('./init')

  });
};
