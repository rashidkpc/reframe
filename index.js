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
      hacks: [],
      modules: {
        REflotCategories$: {
          path: path.resolve(__dirname, 'bower_components/Flot/jquery.flot.categories'),
          imports: 'flot'
        },
        REflot$: {
          path: path.resolve(__dirname, 'bower_components/Flot/jquery.flot'),
          imports: 'jquery'
        },
        REflotTime$: {
          path: path.resolve(__dirname, 'bower_components/Flot/jquery.flot.time'),
          imports: 'flot'
        },
        REflotSymbol$: {
          path: path.resolve(__dirname, 'bower_components/Flot/jquery.flot.symbol'),
          imports: 'flot'
        },
        REflotPie$: {
          path: path.resolve(__dirname, 'bower_components/Flot/jquery.flot.pie'),
          imports: 'flot'
        },
        REflotCrosshair$: {
          path: path.resolve(__dirname, 'bower_components/Flot/jquery.flot.crosshair'),
          imports: 'flot'
        },
        REflotSelection$: {
          path: path.resolve(__dirname, 'bower_components/Flot/jquery.flot.selection'),
          imports: 'flot'
        },
        REflotStack$: {
          path: path.resolve(__dirname, 'bower_components/Flot/jquery.flot.stack'),
          imports: 'flot'
        },
      }
    },

    config: function (Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init: require('./init')

  });
};
