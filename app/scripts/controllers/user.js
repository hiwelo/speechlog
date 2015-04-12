'use strict';

/**
 * @ngdoc function
 * @name speechlogApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the speechlogApp
 */
angular.module('speechlogApp')
  .controller('UserCtrl', function ($scope, $state, $stateParams, $filter) {
    $scope.user = $filter('filter')($scope.users, {username: $stateParams.username}, true)[0];
    if (!$scope.user)
    	$state.go('users');
  });
