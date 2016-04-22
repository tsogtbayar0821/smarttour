(function() {
    'use strict';

    angular
        .module('tour')
        .controller('CampsiteListController', CampsiteListController)
        .controller('CampsiteDetailController', CampsiteDetailController);

    /** @ngInject */
    function CampsiteListController($timeout, $scope, CampsiteSvc, $log, $state, $rootScope) {
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
        $log.log('this is camp')
        vm.goCampDetail = function(index){
            // $state.go('campsite.detail');
            $rootScope.currentCamp = index;
            $log.log('old camp', $rootScope.currentCamp)            
        }
        
    }

    function CampsiteDetailController($timeout, $state, $log, $scope, $rootScope, CampsiteSvc) {
        var vm = this;
        $log.log('this is camp detail')
        $log.log('current campdetail', $rootScope.currentCamp)

        var camImage = 'app/data/campsite/campsite-detail-image.json';
        CampsiteSvc.getCampImg(camImage).get(function(data){
            // $log.log('img content', data.data)
            vm.contentImages = data.data
        })
    }


})();
