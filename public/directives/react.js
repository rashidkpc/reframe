import _ from 'lodash';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import modules from 'ui/modules';

const app = modules.get('apps/reframe');

app.directive('react', () => {
  return {
    restrict: 'E',
    scope: {
      component: '='
    },
    link: ($scope, $el) => {
      const Component = $scope.component;
      render(
        <Component/>
      , $el[0]);
      $scope.$on('$destroy', () => {
        unmountComponentAtNode($el[0]);
      });
    }
  };
});
