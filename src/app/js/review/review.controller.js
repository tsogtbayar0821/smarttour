(function() {
    'use strict';

    angular
        .module('tour')
        .controller('ReviewListController', ReviewListController)
        .controller('ReviewDetailController', ReviewDetailController);

    /** @ngInject */
    function ReviewListController($timeout, $http) {
        var vm = this;
        $http.get('app/data/review/review.json').success(function(response) {
            vm.data = response.data;
        });
    }

    function ReviewDetailController($timeout) {
        var vm = this;
    }


})();
