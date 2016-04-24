(function() {
  'use strict';

  angular
    .module('tour')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($timeout) {
    var vm = this;
  }
})();
