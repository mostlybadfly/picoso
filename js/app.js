var picosoApp = angular.module('picosoApp', [])
picosoApp.controller('ChileController', function($scope, $http) {
  $http.get('js/chiles/chiles.json').success(function(data) {
    $scope.chiles = data;

    var flavorInput = [];
    for (chile of data) {
      flavorInput = flavorInput.concat(chile.flavor.split(','));
    };
    $scope.flavors = Array.from(new Set(flavorInput));
  });

  $scope.flavorChoice = {};
  $scope.toggle = function(choice) {
    this.state = !this.state;
    if (this.state == true){
      $scope.flavorChoice[choice] = true;
    } else{
      $scope.flavorChoice[choice] = false;
    };
  };
});
picosoApp.filter("chileFilter", function() {
  return function(input, choices) {
    var output = [];
    var chosen = [];
    // loop through input, if choices are true, push to output
    angular.forEach(choices, function(value,key) {
      if (value == true) {chosen.push(key)};
    });
    chosen = chosen.join();

    angular.forEach(input, function(value, key) {
      if (chosen.includes(value.flavor.split())) {
        output.push(value);
      }
    });
    return output;
  };
});
