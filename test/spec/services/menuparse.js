'use strict';

describe('Service: menuParse', function () {

  // load the service's module
  beforeEach(module('drangularangApp'));

  // instantiate service
  var menuParse;
  beforeEach(inject(function (_menuParse_) {
    menuParse = _menuParse_;
  }));

  it('should do something', function () {
    expect(!!menuParse).toBe(true);
  });

});
