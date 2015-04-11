'use strict';

/**
 * @ngdoc function
 * @name speechlogApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the speechlogApp
 */
angular.module('speechlogApp')
  .controller('LoginCtrl', function ($scope, $state) {
    $scope.login = function() {
    	$state.go('users');
    };
  });
