(function() {
    'use strict';

    angular
        .module('tour')
        .factory('CampsiteSvc', CampsiteSvc)

    /** @ngInject */
    function CampsiteSvc($resource) {
       var service = {           
            getCampList: getCampList,
            getCampImg: getCampImg
        };

        return service;

        function getCampList(url) {
            return $resource(url);
        }
        function getCampImg(url) {
            return $resource(url);
        }
    } 
})();
