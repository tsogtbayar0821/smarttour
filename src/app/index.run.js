(function() {
    'use strict';

    angular
        .module('tour')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, $rootScope, $state) {

        $log.debug('runBlock end');

        $rootScope.isState = function(state){
        	if($state.current.name == state){
        		return true
        	}else{
        		return false
        	}
        };

        $rootScope.currentCamp;


    }

})();
