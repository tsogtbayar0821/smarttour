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
                controller: 'HotelsListController',
                controllerAs: 'hotel',
                templateUrl: hotelTemplatesDir + 'hotel_list.html',
            })
            .state('hotel.detail', {
                url: '/detail/:id',
                controller: 'HotelsDetailController',
                controllerAs: 'vm',
                templateUrl: hotelTemplatesDir + 'hotel_detail.html',
            });
        $stateProvider
            .state('booking', {
                url: '/booking',
                template: '<ui-view />',
            })
            .state('booking.list', {
                url: '/list',
                controller: 'BookingListController',
                controllerAs: 'booking',
                templateUrl: bookingTemplatesDir + 'booking_list.html',
            })
            .state('booking.detail', {
                url: '/detail/:id',
                controller: 'BookingDetailController',
                controllerAs: 'vm',
                templateUrl: bookingTemplatesDir + 'booking_detail.html',
            });
        $stateProvider
            .state('campsite', {
                url: '/campsite',
                template: '<ui-view />',
            })
            .state('campsite.list', {
                url: '/list',
                controller: 'CampsiteListController',
                controllerAs: 'campsite',
                templateUrl: campsiteTemplatesDir + 'campsite_list.html',
            })
            .state('campsite.detail', {
                url: '/detail/:id',
                controller: 'CampsiteDetailController',
                controllerAs: 'vm',
                templateUrl: campsiteTemplatesDir + 'campsite_detail.html',
            });
        $stateProvider
            .state('events', {
                url: '/events',
                template: '<ui-view />',
            })
            .state('events.list', {
                url: '/list',
                controller: 'EventsListController',
                controllerAs: 'events',
                templateUrl: eventsTemplatesDir + 'events_list.html',
            })
            .state('events.detail', {
                url: '/detail/:id',
                controller: 'EventsDetailController',
                controllerAs: 'vm',
                templateUrl: eventsTemplatesDir + 'events_detail.html',
            });
        $stateProvider
            .state('recent_search', {
                url: '/recent_search',
                template: '<ui-view />',
            })
            .state('recent_search.list', {
                url: '/list',
                controller: 'RecentSearchListController',
                controllerAs: 'recent_search',
                templateUrl: recent_searchTemplatesDir + 'recent_search_list.html',
            })
            .state('recent_search.detail', {
                url: '/detail/:id',
                controller: 'RecentSearchDetailController',
                controllerAs: 'vm',
                templateUrl: recent_searchTemplatesDir + 'recent_search_detail.html',
            });
        $stateProvider
            .state('restaurant', {
                url: '/restaurant',
                template: '<ui-view />',
            })
            .state('restaurant.list', {
                url: '/list',
                controller: 'RestaurantListController',
                controllerAs: 'restaurant',
                templateUrl: restaurantTemplatesDir + 'restaurant_list.html',
            })
            .state('restaurant.detail', {
                url: '/detail/:id',
                controller: 'RestaurantDetailController',
                controllerAs: 'vm',
                templateUrl: restaurantTemplatesDir + 'restaurant_detail.html',
            });
        $stateProvider
            .state('review', {
                url: '/review',
                template: '<ui-view />',
            })
            .state('review.list', {
                url: '/list',
                controller: 'ReviewListController',
                controllerAs: 'review',
                templateUrl: reviewTemplatesDir + 'review_list.html',
            })
            .state('review.detail', {
                url: '/detail/:id',
                controller: 'ReviewDetailController',
                controllerAs: 'vm',
                templateUrl: reviewTemplatesDir + 'review_detail.html',
            });
        $stateProvider
            .state('tour', {
                url: '/tour',
                template: '<ui-view />',
            })
            .state('tour.list', {
                url: '/list',
                controller: 'TourListController',
                controllerAs: 'tour',
                templateUrl: tourTemplatesDir + 'tour_list.html',
            })
            .state('tour.detail', {
                url: '/detail/:id',
                controller: 'TourDetailController',
                controllerAs: 'vm',
                templateUrl: tourTemplatesDir + 'tour_detail.html',
            });


        $urlRouterProvider.otherwise('/');
    }

})();
