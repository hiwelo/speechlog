'use strict';

/**
 * @ngdoc function
 * @name speechlogApp.controller:MarketplaceCtrl
 * @description
 * # MarketplaceCtrl
 * Controller of the speechlogApp
 */
angular.module('speechlogApp')
  .controller('MarketplaceCtrl', function ($scope) {
    $scope.buy = function(story) {
    	if (story) {
    		story.bought = true;
    	}
    };
  });
