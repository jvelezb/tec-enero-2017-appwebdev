'use strict';

describe('Service: PasaDatos', function () {

  // load the service's module
  beforeEach(module('angularTec1App'));

  // instantiate service
  var PasaDatos;
  beforeEach(inject(function (_PasaDatos_) {
    PasaDatos = _PasaDatos_;
  }));

  it('should do something', function () {
    expect(!!PasaDatos).toBe(true);
  });

});
