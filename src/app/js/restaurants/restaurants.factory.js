(function() {
    'use strict';

    angular
        .module('tour')
        .factory('RestaurantsSvc', RestaurantsSvc)

    /** @ngInject */
    function RestaurantsSvc($resource) {
       var service = {           
            getRestaurantsSvcList: getRestaurantsSvcList,
            getRestaurantsImg: getRestaurantsImg
        };

        return service;

        function getRestaurantsSvcList(url) {
            return $resource(url);
        }
        function getRestaurantsImg(url) {
            return $resource(url);
        }

    } 
})();
