(function() {
    'use strict';

    angular
        .module('tour')
        .controller('TourListController', TourListController)
        .controller('TourDetailController', TourDetailController);

    /** @ngInject */
    function TourListController($scope, ToursSvc, NgMap) {
        var vm = this;
        var toursFilter = 'app/data/tours/tours-filter.json'
        ToursSvc.getToursList(toursFilter).get(function(data) {
            // $log.log('filter', data.data)
            vm.filters = data.data
        })

        var toursContent = 'app/data/tours/tours-content.json'
        ToursSvc.getToursList(toursContent).get(function(data) {
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

    function TourDetailController($scope, ToursSvc, $state) {
        var vm = this;
        var tourImage = 'app/data/tours/tours-detail-image.json';
        ToursSvc.getTourImg(tourImage).get(function(data){
            // $log.log('img content', data.data)
            vm.contentImages = data.data
        })
        
    }


})();
