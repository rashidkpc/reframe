import 'ui/chrome';
import 'ui/autoload/all';
import './directives/react';
import App from './components/app'

var app = require('ui/modules').get('apps/reframe', []);

require('ui/routes').enable();
require('ui/routes')
  .when('/', {
    template: require('plugins/reframe/index.html')
  });

app
.controller('reframe', function ($scope, timefilter) {
  timefilter.enabled = true;
  $scope.component = App;
});
