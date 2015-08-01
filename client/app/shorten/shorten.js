var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

var isValidUrl = function(url) {
  return url.match(rValidUrl);
}

angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  
  if(!Auth.isAuth()) {
    $location.path('/signin').replace();
  }

  $scope.link = {
    url: ''
  };
  $scope.message = 'Please input a valid URL';

  $scope.addLink = function(){
    if(isValidUrl($scope.link.url)){
      Links.addLink($scope.link);
      $location.path('/links').replace();
    } else {
      $scope.message = "Url is not Valid";
    }
  };

  return $scope;
});

