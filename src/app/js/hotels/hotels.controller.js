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
        vm.starList = [{"id": 1, "name": "2 Stars"}, 
                       {"id": 2, "name": "3 Stars"}, 
                       {"id": 3, "name": "4 Stars"}, 
                       {"id": 4, "name": "5 Stars"}, 
                       {"id": 5, "name": "Unrated"}];

        $http.get('app/data/hotels.json').success(function(response) {
            vm.data = response.data;
        });
        $http.get('app/data/facility.json').success(function(response) {
            vm.facilities = response.data;
        });
        $http.get('app/data/propertyTypes.json').success(function(response) {
            vm.propertyTypes = response.data;
        });
        $http.get('app/data/roomFacilities.json').success(function(response) {
            vm.roomFacilities = response.data;
        });

    }

    function HotelsDetailController($timeout) {
        var vm = this;

    }

})();
