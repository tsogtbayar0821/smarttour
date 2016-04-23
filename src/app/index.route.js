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
                templateUrl: TEMPLATES_DIR +  'home/home.html',
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
                templateUrl: TEMPLATES_DIR + '/hotels/hotels.home.html',
            })
            .state('hotel.detail', {
                url: '/detail/:id',
                controller: 'HotelsDetailController',
                controllerAs: 'vm',
                templateUrl: 'hotel_detail.html',
            });
        $stateProvider
            .state('secure', {
                url: '/secure',
                template: '<ui-view />',
            });
        $stateProvider
            .state('secure.home', {
                url: '/home',
                templateUrl: TEMPLATES_DIR + 'account/account.home.html'
            });
        $stateProvider
            .state('secure.home.dashboard', {
                url: '/dashboard',
                templateUrl: TEMPLATES_DIR + 'dashboard/dashboard.home.html',
                controller: 'DashboardController',
                controllerAs: 'dashboard'
            });
        $stateProvider
            .state('secure.home.booking', {
                url: '/booking',
                template: '<ui-view />',
            })
            .state('secure.home.booking.list', {
                url: '/list',
                controller: 'BookingListController',
                controllerAs: 'booking',
                templateUrl: TEMPLATES_DIR + 'booking/booking.home.html',
            })
            .state('secure.home.booking.detail', {
                url: '/detail/:id',
                controller: 'BookingDetailController',
                controllerAs: 'booking',
                templateUrl: 'booking_detail.html',
            });
        $stateProvider
            .state('secure.home.review', {
                url: '/review',
                template: '<ui-view />',
            })
            .state('secure.home.review.list', {
                url: '/list',
                controller: 'ReviewListController',
                controllerAs: 'review',
                templateUrl: TEMPLATES_DIR + 'review/review.home.html',
            })
            .state('secure.home.review.detail', {
                url: '/detail/:id',
                controller: 'ReviewDetailController',
                controllerAs: 'review',
                templateUrl: 'review_detail.html',
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
                templateUrl: TEMPLATES_DIR + 'campsite/campsite.home.html',
            })
            .state('campsite.detail', {
                url: '/detail/:id',
                controller: 'CampsiteDetailController',
                controllerAs: 'campsitedetail',
                templateUrl: TEMPLATES_DIR + 'campsite/campsite.detail.html',
            });
        $stateProvider
            .state('events', {
                url: '/events',
                template: '<ui-view />',
            })
            .state('events.list', {
                url: '/list',
                controller: 'EventsListController',
                controllerAs: 'event',
                templateUrl: TEMPLATES_DIR + 'events/events.home.html',
            })
            .state('events.detail', {
                url: '/detail/:id',
                controller: 'EventsDetailController',
                controllerAs: 'eventsdeatail',
                templateUrl: TEMPLATES_DIR + 'events/events.detail.html',
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
                templateUrl: TEMPLATES_DIR + 'recentsearch/recentsearch.home.html',
            })
            .state('recent_search.detail', {
                url: '/detail/:id',
                controller: 'RecentSearchDetailController',
                controllerAs: 'vm',
                templateUrl: 'recent_search_detail.html',
            });
        $stateProvider
            .state('restaurants', {
                url: '/restaurant',
                template: '<ui-view />',
            })
            .state('restaurants.list', {
                url: '/list',
                controller: 'RestaurantListController',
                controllerAs: 'restaurants',
                templateUrl: TEMPLATES_DIR + 'restaurants/restaurants.home.html',
            })
            .state('restaurants.detail', {
                url: '/detail/:id',
                controller: 'RestaurantDetailController',
                controllerAs: 'restaurantsdetail',
                templateUrl: TEMPLATES_DIR + 'restaurants/restaurants.detail.html',
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
                templateUrl: TEMPLATES_DIR + 'tours/tours.home.html',
            })
            .state('tour.detail', {
                url: '/detail/:id',
                controller: 'TourDetailController',
                controllerAs: 'tourdetail',
                templateUrl: TEMPLATES_DIR + 'tours/tours.detail.html',
            });
        $stateProvider
            .state('car', {
                url: '/car',
                template: '<ui-view />',
            })
            .state('car.list', {
                url: '/list',
                controller: 'CarListController',
                controllerAs: 'car',
                templateUrl: TEMPLATES_DIR + 'car/car.home.html',
            })
            .state('car.detail', {
                url: '/detail/:id',
                controller: 'CarDetailController',
                controllerAs: 'cardetail',
                templateUrl: TEMPLATES_DIR + 'car/car.detail.html',
            });


        $urlRouterProvider.otherwise('/');
    }

})();
