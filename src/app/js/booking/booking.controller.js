(function() {
    'use strict';

    angular
        .module('tour')
        .controller('BookingListController', BookingListController)
        .controller('BookingDetailController', BookingDetailController);

    /** @ngInject */
    function BookingListController($timeout, webDevTec, toastr) {
        var vm = this;
    }

    function BookingDetailController($timeout, webDevTec, toastr) {
        var vm = this;
    }


})();
