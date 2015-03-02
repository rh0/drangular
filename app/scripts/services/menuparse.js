'use strict';

/**
 * @ngdoc service
 * @name drangularangApp.menuParse
 * @description
 * # menuParse
 * Factory in the drangularangApp.
 */
angular.module('drangularangApp')
  .factory('menuParse', function ($location) {
    console.log($location.path());
    var menuProcessed = {
      template: '',
      tree: []
    };

    function pathScrub(path) {
      switch(path) {
        case '<front>':
          return '/';
        default :
          return path.replace('drangular', '');
      }
    }

    function activeCheck(viewLocation) {
      if(viewLocation === $location.path()) {
        return 'active';
      }
      return '';
    }

    function menuCleanup(dirtyMenuTree) {
      for(var menuItem in dirtyMenuTree) {
        //console.log('RawHref: ' + menuItem.link.href);
        menuProcessed.tree.push({
          name: dirtyMenuTree[menuItem].link.title,
          path: pathScrub(dirtyMenuTree[menuItem].link.href),
          weight: dirtyMenuTree[menuItem].link.weight,
          classes: activeCheck(pathScrub(dirtyMenuTree[menuItem].link.href))
        });
      }
    }

    // Public API here
    return {
      process: function(drupalMenu) {
        menuCleanup(drupalMenu.tree);
        console.log(menuProcessed);
        return menuProcessed;
      }
    };
  });
