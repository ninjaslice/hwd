'use strict';

angular.module('hwdApp')
  .directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/navbar.html',
      controller: 'NavigationCtrl'
    };
  });
