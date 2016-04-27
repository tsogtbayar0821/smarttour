/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('tour')
    .directive('quicksearch', function() {
        return {
            templateUrl: './app/components/quicksearch/quicksearch.html',
            restrict: 'E',
            replace: true
        }
    });
// $.livequery.htcPath = './assets/vendor/js/jquery.livequery.htc';
$('#arrival-and-departure2').livequery(function() {
    datepickerinit();
}, function() {
    return false;
});

function datepickerinit() {
    jQuery(document).ready(function($) {
        BRE.ArrivalDeparturePopup2.init('#arrival-and-departure2', '#checkin', '#checkout', function(start, stop) {
            var dt1 = moment(start).format("M/D/YYYY");
            var dt2 = moment(stop).format('M/D/YYYY');
            $('#checkin').val(dt1);
            $('#checkout').val(dt2);
            $('#arrival-and-departure2').val(dt1 + ' - ' + dt2);

        });

    });
}
