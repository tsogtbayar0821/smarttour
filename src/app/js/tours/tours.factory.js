(function() {
    'use strict';

    angular
        .module('tour')
        .factory('ToursSvc', ToursSvc)

    /** @ngInject */
    function ToursSvc($resource) {
       var service = {           
            getToursList: getToursList
        };

        return service;

        function getToursList(url) {
            return $resource(url);
        }
    } 
})();
