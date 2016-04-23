(function() {
    'use strict';

    angular
        .module('tour')
        .controller('EventsListController', EventsListController)
        .controller('EventsDetailController', EventsDetailController);

    /** @ngInject */
    function EventsListController($timeout, $scope, EventsSvc, NgMap) {
        var vm = this;
        var eventsFilter = 'app/data/events/events-filter.json'
        EventsSvc.getEventsList(eventsFilter).get(function(data) {
            // $log.log('filter', data.data)
            vm.filters = data.data
        })

        var eventsContent = 'app/data/events/events-content.json'
        EventsSvc.getEventsList(eventsContent).get(function(data) {
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

    function EventsDetailController($timeout, EventsSvc, $state) {
        var vm = this;

        var eventsImage = 'app/data/events/events-detail-image.json';
        EventsSvc.getEventsImg(eventsImage).get(function(data){
            // $log.log('img content', data.data)
            vm.contentImages = data.data
        })

    }


})();
