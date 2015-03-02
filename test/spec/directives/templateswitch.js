'use strict';

describe('Directive: templateSwitch', function () {

  // load the directive's module
  beforeEach(module('drangularangApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<template-switch></template-switch>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the templateSwitch directive');
  }));
});
