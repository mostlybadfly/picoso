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

  $scope.selected = false;

  $scope.flavorChoice = {};
  $scope.toggle = function(choice) {
    this.selected = !this.selected
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
    var chosen = [];
    for(var choice in choices) { chosen.push(choices[choice])};
    if (chosen.every(isFalse)){return input};

    return input.filter(function (chile) {
      var flavor = chile.flavor;
      var flavors = flavor.split(',');
      var flavorMatched = flavors.reduce(function (found, nextFlavor) {
        return found || choices[nextFlavor];
      }, false);

      return flavorMatched;
    });
  };
});

function isFalse(element, index, array) {
  return element === false;
};
