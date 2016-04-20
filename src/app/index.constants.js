/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('tour')
    .constant('malarkey', malarkey)
    .constant('TEMPLATES_DIR', './app/templates/')
    .constant('moment', moment);

})();
