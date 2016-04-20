(function() {
    'use strict';

    angular
        .module('tour')
        .directive('tourMenu', tourMenu);

    /** @ngInject */
    function tourMenu() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/menu.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController(moment) {
            var vm = this;

            // "vm.creationDate" is available by directive option "bindToController: true"
            vm.relativeDate = moment(vm.creationDate).fromNow();
        }
    }

})();
