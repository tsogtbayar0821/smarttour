(function() {
    'use strict';

    angular
        .module('tour')
        .factory('EventSvc', EventSvc)

    /** @ngInject */
    function EventSvc($resource) {
       var service = {           
            getEventList: getEventList
        };

        return service;

        function getEventList(url) {
            return $resource(url);
        }
    } 
})();
