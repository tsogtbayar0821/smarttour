(function() {
  'use strict';

  angular
    .module('tour')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($timeout) {
    var vm = this;

    // $('#')
    vm.topCs = [
    	{
    		image: './assets/home/topC/topC1.jpg',
    		title: 'Khövsgöl Nuur National Park',
    		txt: 'Naadam Festival'
    	},{
    		image: './assets/home/topC/topC2.jpg',
    		title: 'Mongolia',
    		txt: 'Staying in a Ger'
    	},{
    		image: './assets/home/topC/topC3.jpg',
    		title: 'Mongolia',
    		txt: 'Horse Riding'
    	},{
    		image: './assets/home/topC/topC4.jpg',
    		title: 'Mongolia',
    		txt: 'Gobi Desert'
    	},{
    		image: './assets/home/topC/topC5.jpg',
    		title: 'Mongolia',
    		txt: 'Wildlife Watching'
    	},{
    		image: './assets/home/topC/topC6.jpg',
    		title: 'Mongolia',
    		txt: 'Mongolian Hospitality'
    	},{
    		image: './assets/home/topC/topC7.jpg',
    		title: 'Terelj Area',
    		txt: 'Hiking'
    	},
    ]
    vm.mainCs = [
        {
            image: '',
            txt: ''
        },{
            image: '',
            txt: ''
        },{
            image: '',
            txt: ''
        },{
            image: '',
            txt: ''
        },
    ]
  }
})();
