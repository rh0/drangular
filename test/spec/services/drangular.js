'use strict';

describe('Service: drangular', function () {

  // load the service's module
  beforeEach(module('drangularangApp'));

  // instantiate service
  var drangular;
  beforeEach(inject(function (_drangular_) {
    drangular = _drangular_;
  }));

  it('should do something', function () {
    expect(!!drangular).toBe(true);
  });

});
