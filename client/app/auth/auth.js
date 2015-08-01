// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.message = '';
  $scope.signin = function () {
    if(!!$scope.user.username && !!$scope.user.password){
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
          $scope.message = "Please input a valid username and password";
        });
    } else {
      $scope.message = "Please input a valid username and password";
    }
  };

  $scope.signup = function () {
    if(!!$scope.user.username && !!$scope.user.password){
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
          $scope.message = "Please input a valid username and password";
        });
    } else {
      $scope.message = "Please input a valid username and password";
    }
  };
});
