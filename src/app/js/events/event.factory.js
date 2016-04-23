(function() {
    'use strict';

    angular
        .module('tour')
        .factory('EventsSvc', EventsSvc)

    /** @ngInject */
    function EventsSvc($resource) {
       var service = {           
            getEventsList: getEventsList,
            getEventsImg: getEventsImg
        };

        return service;

        function getEventsList(url) {
            return $resource(url);
        }
        function getEventsImg(url) {
            return $resource(url);
        }
    } 
})();
