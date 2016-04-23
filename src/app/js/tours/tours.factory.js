(function() {
    'use strict';

    angular
        .module('tour')
        .factory('ToursSvc', ToursSvc)

    /** @ngInject */
    function ToursSvc($resource) {
       var service = {           
            getToursList: getToursList,
            getTourImg: getTourImg
        };

        return service;

        function getToursList(url) {
            return $resource(url);
        }
        function getTourImg(url) {
            return $resource(url);
        }
    } 
})();
