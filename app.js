'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
    .module('movieApp', ['ui.router','satellizer'])
    .config(function($stateProvider, $urlRouterProvider,$authProvider) {
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/views/login.html',
                controller: 'loginCtrl'
            })
            .state('home', {
                url: '/home',
                templateUrl: '/views/main.html',
                controller: 'mainCtrl'
            })
        .state('browse', {
            url: '/browse',
            templateUrl: '/views/browse.html',
            controller: 'browseCtrl'
        });
// $locationProvider.html5Mode({
//     enabled:true,
//     requireBase:true,
//     rewriteLinks:false
// })
 $authProvider.facebook({
      clientId: '178406755986466'
    });


    });

  
    angular.module('movieApp').run(function($rootScope, $location, $state, LoginService) {
    $rootScope.$on('$stateChangeStart', 
      function(event, toState, toParams, fromState, fromParams){ 
          console.log('Changed state to: ' + toState);
      });
    
      if(!LoginService.isAuthenticated()) {
        $state.transitionTo('login');
      }
  });
  



  

  

