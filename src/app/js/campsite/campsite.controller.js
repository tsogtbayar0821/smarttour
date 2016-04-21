(function() {
    'use strict';

    angular
        .module('tour')
        .controller('CampsiteListController', CampsiteListController)
        .controller('CampsiteDetailController', CampsiteDetailController);

    /** @ngInject */
    function CampsiteListController($timeout, $scope, CampsiteSvc, $log) {
        var vm = this;
        var camFilter = 'app/data/campsite/campsite-filter.json'
        CampsiteSvc.getCampList(camFilter).get(function(data){
            // $log.log('filter', data.data)
            vm.filters = data.data
        })

        var camContent = 'app/data/campsite/campsite-content.json'
        CampsiteSvc.getCampList(camContent).get(function(data){
            // $log.log('content', data.data)
            vm.contents = data.data
        })

        
    }

    function CampsiteDetailController($timeout, webDevTec, toastr) {
        var vm = this;

        
    }


})();
