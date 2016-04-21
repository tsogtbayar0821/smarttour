(function() {
    'use strict';

    angular
        .module('tour')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($log) {
        var vm = this;

        // $http.get('app/data/hotel/hotels.json').success(function(response) {
        //     vm.data = response.data;
        // });

        var mainHeight = $('#dash-main').height()
        $('#sidebar-primary').css('height', mainHeight)

    }
})();
