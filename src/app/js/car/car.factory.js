(function() {
    'use strict';

    angular
        .module('tour')
        .factory('CarSvc', CarSvc)

    /** @ngInject */
    function CarSvc($resource) {
       var service = {           
            getCarList: getCarList,
            getCarImg: getCarImg
        };

        return service;

        function getCarList(url) {
            return $resource(url);
        }
        function getCarImg(url) {
            return $resource(url);
        }
    } 
})();
