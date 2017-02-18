'use strict';

describe('Filter: asistentes', function () {

  // load the filter's module
  beforeEach(module('angularTec1App'));

  // initialize a new instance of the filter before each test
  var asistentes;
  beforeEach(inject(function ($filter) {
    asistentes = $filter('asistentes');
  }));

  it('should return the input prefixed with "asistentes filter:"', function () {
    var text = 'angularjs';
    expect(asistentes(text)).toBe('asistentes filter: ' + text);
  });

});
