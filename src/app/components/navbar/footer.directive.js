(function() {
    'use strict';

    angular
        .module('tour')
        .directive('tourFooter', tourFooter);

    /** @ngInject */
    function tourFooter() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/footer.html',
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
