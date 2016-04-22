(function() {
    'use strict';

    angular
        .module('tour')
        .controller('BookingListController', BookingListController)
        .controller('BookingDetailController', BookingDetailController);

    /** @ngInject */
    function BookingListController($timeout, $http, $log) {
        var vm = this;
        $http.get('app/data/booking/booking.json').success(function(response) {
            vm.data = response.data;
        });
        var mainHeight = $('#bookings').height()
        $log.log(mainHeight)
            // $('#sidebar-primary').css('height', mainHeight)
        vm.convertToDate = function(stringDate) {
            var dateOut = new Date(stringDate);
            dateOut.setDate(dateOut.getDate() + 1);
            // $log.log(dateOut)
            return dateOut;
        };
    }

    function BookingDetailController($timeout, webDevTec, toastr) {
        var vm = this;
    }


})();
