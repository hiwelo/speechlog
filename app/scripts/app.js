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
        url: '/page/:number',
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
        id: 1,
        title: 'Startup Weekend Mulhouse',
        url: 'swmlh',
        image: 'swmlh.jpg',
        description: 'Le meilleur Startup Weekend du Haut Rhin',
        pages: [
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
          ],
        bought: true
      },
      {
        id: 2,
        title: 'Startup Weekend Strasbourg',
        url: 'swsxb',
        image: 'swsxb.png',
        description: 'Le meilleur Startup Weekend du Bas Rhin',
        pages: [
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
          ],
        bought: true
      },
      {
        id: 3,
        title: 'ChargeMap',
        url: 'chargemap',
        image: 'chargemap.png',
        description: 'Trouvez les points de charge pour votre voiture électrique.',
        pages: [{}, {}, {}],
        bought: false,
        price: '0,99'
      },
      {
        id: 4,
        title: 'Judith revient en Alsace',
        url: 'judithenalsace',
        image: 'judith.png',
        description: 'Elle avait presque oublié à quel point c\'est génial ici.',
        pages: [
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
          ],
        bought: false,
        price: '0,99'
      },
      {
        id: 5,
        title: 'NovaBeez rachète Google',
        url: 'novabeez',
        image: 'novabeez.png',
        description: 'L\'incroyable histoire de deux jeunes entrepreneurs alsaciens.',
        pages: [
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
          ],
        bought: false,
        price: '0,99'
      },
    ];

    $rootScope.readings = [
      {
        id: 1,
        story: 'chargemap',
        pages: [],
        date: Date.now()
      },
      {
        id: 2,
      },
      {
        id: 3,
      }
    ];
  });
