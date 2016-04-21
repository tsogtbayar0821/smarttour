(function() {
    'use strict';

    angular
        .module('tour')
        .factory('CarSvc', CarSvc)

    /** @ngInject */
    function CarSvc($resource) {
       var service = {           
            getCarList: getCarList
        };

        return service;

        function getCarList(url) {
            return $resource(url);
        }
    } 
})();
