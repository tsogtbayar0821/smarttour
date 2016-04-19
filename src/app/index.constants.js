/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('tour')
    .constant('malarkey', malarkey)
    .constant('TEMPLATES_DIR', 'templates/')
    .constant('moment', moment);

})();
