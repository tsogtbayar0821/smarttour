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
            });

        // Sentences
        $stateProvider
            .state('hotel.sentences', {
                url: '/sentences',
                template: '<ui-view />',
            })
            .state('hotel.sentences.create', {
                url: '/create?closeOnDone&forcedTypeId',
                controller: 'SentenceEditController',
                controllerAs: 'vm',
                templateUrl: hotelTemplatesDir + 'sentence_form.html',
                resolve: {
                    sentenceInstance: function(Sentence) {
                        return new Sentence({ id: null, type_id: null });
                    },
                    localLanguage: function($translate) {
                        return $translate.use();
                    },
                },
            })
            .state('hotel.sentences.edit', {
                url: '/edit/:id?closeOnDone',
                controller: 'SentenceEditController',
                controllerAs: 'vm',
                templateUrl: hotelTemplatesDir + 'sentence_form.html',
                resolve: {
                    sentenceInstance: function($stateParams, Sentence) {
                        return Sentence.get({ id: $stateParams.id });
                    },
                    localLanguage: function($translate) {
                        return $translate.use();
                    },
                },
            });



        $urlRouterProvider.otherwise('/');
    }

})();
