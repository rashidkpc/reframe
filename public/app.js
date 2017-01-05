import chrome from 'ui/chrome';
import modules from 'ui/modules';

import 'ui/autoload/all';
import './directives/react';
import './state/store_service';

import rootComponent from './components/app';

require('./main.less');

var app = require('ui/modules').get('apps/reframe', []);

require('ui/routes').enable();
require('ui/routes')
  .when('/', {
    template: require('plugins/reframe/index.html')
  });

app
.controller('reframe', function ($scope, timefilter) {
  timefilter.enabled = true;
  $scope.component = rootComponent;
});
