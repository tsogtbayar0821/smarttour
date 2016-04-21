(function() {
    'use strict';

    angular
        .module('tour')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($log) {
        var vm = this;

        var mainHeight = $('#dash-main').height()
        $('#sidebar-primary').css('height', mainHeight)
    }
})();
