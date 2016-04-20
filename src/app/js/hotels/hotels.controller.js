(function() {
    'use strict';

    angular
        .module('tour')
        .controller('HotelsListController', HotelsListController)
        .controller('HotelsDetailController', HotelsDetailController);

    /** @ngInject */
    function HotelsListController($timeout, $http) {
        var vm = this;
        vm.data = null;

        $http.get('app/data/hotels.json').success(function(response){
            vm.data = response.data;
        });
    }

    function HotelsDetailController($timeout) {
        var vm = this;

    }


})();
