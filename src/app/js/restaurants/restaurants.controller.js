(function() {
    'use strict';

    angular
        .module('tour')
        .controller('RestaurantListController', RestaurantListController)
        .controller('RestaurantDetailController', RestaurantDetailController);

    /** @ngInject */
    function RestaurantListController($scope, RestrauntsSvc, NgMap, $log) {
        var vm = this;
        var restrauntsFilter = 'app/data/restraunts/restraunts-filter.json'
        RestrauntsSvc.getRestrauntsList(restrauntsFilter).get(function(data) {
            // $log.log('filter', data.data)
            vm.filters = data.data
        })

        var restrauntsContent = 'app/data/restraunts/restraunts-content.json'
        RestrauntsSvc.getRestrauntsList(restrauntsContent).get(function(data) {
            // $log.log('content', data.data)
            vm.contents = data.data
        })
       
        // map
        NgMap.getMap().then(function(map) {
            vm.map = map;
            // console.log(map.getCenter());
            // console.log('markers', map.markers);
            // console.log('shapes', map.shapes);
        });
        
    }

    function RestaurantDetailController() {
        var vm = this;

        
    }


})();
