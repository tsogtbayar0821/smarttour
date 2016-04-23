(function() {
    'use strict';

    angular
        .module('tour')
        .controller('CarListController', CarListController)
        .controller('CarDetailController', CarDetailController);

    /** @ngInject */
    function CarListController($timeout, CarSvc, $scope, $log, NgMap) {
        var vm = this;
        var carFilter = 'app/data/car/car-filter.json'
        CarSvc.getCarList(carFilter).get(function(data) {
            // $log.log('filter', data.data)
            vm.filters = data.data
        })

        var carContent = 'app/data/car/car-content.json'
        CarSvc.getCarList(carContent).get(function(data) {
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

    function CarDetailController($timeout, CarSvc, $scope, $state) {
        var vm = this;

        var carImage = 'app/data/car/car-detail-image.json';
        CarSvc.getCarImg(carImage).get(function(data){
            // $log.log('img content', data.data)
            vm.contentImages = data.data
        })

    }


})();
