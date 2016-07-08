var picosoApp = angular.module('picosoApp', [])
  picosoApp.controller('ChileController', function($scope, $http) {
    $http.get('js/chiles/chiles.json').success(function(data) {
      $scope.chiles = data;

      var flavorInput = [];
      for (chile of data) {
        flavorInput = flavorInput.concat(chile.flavor.split(','));
      };
      $scope.flavors = Array.from(new Set(flavorInput));

      $scope.toggle = function(choice) {
        this.state = !this.state;
        if (this.state == true){
          $scope.chileChoice = choice
        };
      };
    });
  });
