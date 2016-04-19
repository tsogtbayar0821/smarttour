(function() {
  'use strict';

  angular
    .module('tour')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
