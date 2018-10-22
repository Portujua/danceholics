(() => {
  class FooterHomeController {
    constructor(HomeService) {
      this.HomeService = HomeService;
    }

    $onInit() {
      this.load();
    }

    load() {
      //
    }
  }

  angular.module('app').component('footer', {
    templateUrl: 'views/home/footer/footer.html',
    controller: FooterHomeController,
    controllerAs: '$ctrl',
    bindings: {}
  });
})();
