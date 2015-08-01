angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here

  if(!Auth.isAuth()) {
    $location.path('/signin').replace();
  }

  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(links){
        $scope.data.links = links;
      });
  };

  $scope.getLinks();

  return $scope;
});