angular.module('picosoApp', [])
  .controller('FlavorController', function() {
    var flavorGroup = this;
    flavorGroup.flavors = [];

    flavorGroup.pickFlavor = function(flavor) {
      flavorGroup.flavors.push(flavor);
    };
  });
