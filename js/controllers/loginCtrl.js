'use strict';


angular.module('movieApp')
.controller('loginCtrl', function($scope, $state, LoginService,$auth) {
    console.log(LoginService);
    $scope.formSubmit = function() {
      if(LoginService.login($scope.username, $scope.password)) {
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('home');
      } else {
        $scope.error = "Incorrect username/password !";
      }   
    };
     $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
    

    
  });


  