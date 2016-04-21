(function() {
    'use strict';

    angular
        .module('tour')
        .factory('CampsiteSvc', CampsiteSvc)

    /** @ngInject */
    function CampsiteSvc($resource) {
       var service = {           
            getCampList: getCampList
        };

        return service;

        function getCampList(url) {
            return $resource(url);
        }
    } 
})();
