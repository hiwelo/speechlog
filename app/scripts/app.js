'use strict';

/**
 * @ngdoc overview
 * @name speechlogApp
 * @description
 * # speechlogApp
 *
 * Main module of the application.
 */
angular
  .module('speechlogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'chart.js'
  ])
  .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .state('user', {
        url: '/user/:username',
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .state('user.dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('user.stories', {
        url: '/stories',
        templateUrl: 'views/stories.html',
        controller: 'StoriesCtrl'
      })
      .state('user.stories.story', {
        url: '/:url',
        templateUrl: 'views/story.html',
        controller: 'StoryCtrl'
      })
      .state('user.stories.story.page', {
        url: '/page/:numero',
        templateUrl: 'views/page.html',
        controller: 'PageCtrl'
      })
      .state('user.stories.story.end', {
        url: '/end',
        templateUrl: 'views/end.html',
        controller: 'EndCtrl'
      })
      .state('user.stats', {
        url: '/stats',
        templateUrl: 'views/stats.html',
        controller: 'StatsCtrl'
      })
      .state('user.states.reading', {
        url: '/reading/:id',
        templateUrl: 'views/reading.html',
        controller: 'ReadingCtrl'
      })
      .state('user.marketplace', {
        url: '/marketplace',
        templateUrl: 'views/marketplace.html',
        controller: 'MarketplaceCtrl'
      });
  })
  .run(function ($rootScope) {
    $rootScope.users = [
      {
        name: 'David',
        username: 'david',
        image: 'david.png',
        age: '3 ans'
      },
      {
        name: 'Sam',
        username: 'sam',
        image: 'sam.png',
        age: '4 ans'
      },
      {
        name: 'Judith',
        username: 'judith',
        image: 'judith.png',
        age: '5 ans'
      }
    ];

    $rootScope.stories = [
      {
        title: 'ChargeMap',
        url: 'chargemap',
        pages: [{}, {}, {}],
        bought: false
      },
      {
        title: 'Startup Weekend Mulhouse',
        url: 'swmlh',
        pages: ['les chaussettes de l\'archiduchesse', 'sont elles sèches', 'archi sèches'],
        bought: true
      },
      {
        title: 'Startup Weekend Strasbourg',
        url: 'swsxb',
        pages: [{}, {}, {}],
        bought: true
      }
    ];

    $rootScope.readings = [
      {
        id: 1,
        story: 'chargemap',

        date: ''
      },
      {
        id: 2,
      },
      {
        id: 3,
      }
    ];
  });
