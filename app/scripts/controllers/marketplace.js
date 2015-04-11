'use strict';

/**
 * @ngdoc function
 * @name speechlogApp.controller:MarketplaceCtrl
 * @description
 * # MarketplaceCtrl
 * Controller of the speechlogApp
 */
angular.module('speechlogApp')
  .controller('MarketplaceCtrl', function ($scope, $filter) {
    $scope.buy = function(url) {
    	var story = $filter('filter')($scope.stories, {'url': url}, true)[0];
    	if (story) {
    		story.bought = true;
    	}
    };
  });
