'use strict';

describe('Controller: Destino1Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularTec1App'));

  var Destino1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Destino1Ctrl = $controller('Destino1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Destino1Ctrl.awesomeThings.length).toBe(3);
  });
});
