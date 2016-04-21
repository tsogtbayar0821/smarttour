(function() {
    'use strict';

    angular
        .module('tour')
        .factory('RestrauntsSvc', RestrauntsSvc)

    /** @ngInject */
    function RestrauntsSvc($resource) {
       var service = {           
            getRestrauntsList: getRestrauntsList
        };

        return service;

        function getRestrauntsList(url) {
            return $resource(url);
        }
    } 
})();
