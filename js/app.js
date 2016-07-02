var picosoApp = angular.module('picosoApp', [])
  picosoApp.controller('FlavorController', function() {
    var flavorGroup = this;
    flavorGroup.flavors = [];

    flavorGroup.pickFlavor = function(flavor) {
      flavorGroup.flavors.push(flavor);
    };
  });

  picosoApp.controller('ChileController', function($scope, $http) {
    $http.get('js/chiles/chiles.json').success(function(data) {
      $scope.chiles = data;
    });
  });
