'use strict';

describe('Controller: NombreCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTec1App'));

  var NombreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NombreCtrl = $controller('NombreCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NombreCtrl.awesomeThings.length).toBe(3);
  });
});
