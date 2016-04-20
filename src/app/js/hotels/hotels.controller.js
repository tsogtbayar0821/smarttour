(function() {
    'use strict';

    angular
        .module('tour')
        .controller('HotelsListController', HotelsListController)
        .controller('HotelsDetailController', HotelsDetailController);

    /** @ngInject */
    function HotelsListController($timeout, $http, webDevTec, toastr) {
        var vm = this;
        var vmdata = null;

        vm.data = null;

        $http.get('app/data/hotels.json').success(function(response){
            vm.data = response.data;
        });
        // $http({method: 'GET', url: 'app/data/hotels.json'}).success(function(response){
        //     vm.data = response.data;
        // });
        vm.classAnimation = '';
        vm.creationDate = 1461062986089;
        vm.showToastr = showToastr;

        activate();

        function activate() {
            getWebDevTec();
            $timeout(function() {
                vm.classAnimation = 'rubberBand';
            }, 4000);
        }

        function showToastr() {
            toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
            vm.classAnimation = '';
        }

        function getWebDevTec() {
            vm.awesomeThings = webDevTec.getTec();

            angular.forEach(vm.awesomeThings, function(awesomeThing) {
                awesomeThing.rank = Math.random();
            });
        }
    }

    function HotelsDetailController($timeout, webDevTec, toastr) {
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1461062986089;
        vm.showToastr = showToastr;

        activate();

        function activate() {
            getWebDevTec();
            $timeout(function() {
                vm.classAnimation = 'rubberBand';
            }, 4000);
        }

        function showToastr() {
            toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
            vm.classAnimation = '';
        }

        function getWebDevTec() {
            vm.awesomeThings = webDevTec.getTec();

            angular.forEach(vm.awesomeThings, function(awesomeThing) {
                awesomeThing.rank = Math.random();
            });
        }
    }


})();
