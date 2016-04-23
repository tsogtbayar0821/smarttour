(function() {
    'use strict';

    angular
        .module('tour')
        .controller('RestaurantListController', RestaurantListController)
        .controller('RestaurantDetailController', RestaurantDetailController);

    /** @ngInject */
    function RestaurantListController($scope, RestaurantsSvc, NgMap, $log) {
        var vm = this;
        var restaurantsFilter = 'app/data/restaurants/restaurants-filter.json'
        RestaurantsSvc.getRestaurantsSvcList(restaurantsFilter).get(function(data) {
            // $log.log('filter', data.data)
            vm.filters = data.data
        })

        var restaurantsContent = 'app/data/restaurants/restaurants-content.json'
        RestaurantsSvc.getRestaurantsSvcList(restaurantsContent).get(function(data) {
            $log.log('content', data.data)
            vm.contents = data.data
        })
       
        // map
        NgMap.getMap().then(function(map) {
            vm.map = map;
            // console.log(map.getCenter());
            // console.log('markers', map.markers);
            // console.log('shapes', map.shapes);
        });
        vm.gorestaurantsDetail = function(){

        }
    }

    function RestaurantDetailController($scope, $state, RestaurantsSvc) {
        var vm = this;
        var restaurantsImage = 'app/data/restaurants/restaurants-detail-image.json';
        RestaurantsSvc.getRestaurantsImg(restaurantsImage).get(function(data){
            // $log.log('img content', data.data)
            vm.contentImages = data.data
        })
        
    }


})();
