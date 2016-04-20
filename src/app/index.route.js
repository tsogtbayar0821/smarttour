(function() {
    'use strict';

    angular
        .module('tour')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider, TEMPLATES_DIR) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/templates/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            });
        // --- Hotel ---
        var hotelTemplatesDir = TEMPLATES_DIR + 'hotel/';
        
        $stateProvider
            .state('hotel', {
                url: '/hotel',
                template: '<ui-view />',
            })
            .state('hotel.list', {
                url: '/list',
                controller: 'HotelListController',
                controllerAs: 'hotel',
                templateUrl: hotelTemplatesDir + 'hotel_list.html',
            })
            .state('hotel.detail', {
                url: '/detail/:id',
                controller: 'HotelDetailController',
                controllerAs: 'vm',
                templateUrl: hotelTemplatesDir + 'hotel_detail.html',
            });



        $urlRouterProvider.otherwise('/');
    }

})();
