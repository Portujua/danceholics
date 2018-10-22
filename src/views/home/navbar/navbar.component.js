(() => {
  class NavbarHomeController {
    constructor(HomeService) {
      this.HomeService = HomeService;
    }

    $onInit() {
      this.load();
    }

    load() {
      //
    }

    scrollTo(name) {
      $('html,body').animate(
        {
          scrollTop: parseInt($(name).offset().top)
        },
        1000
      );
    }
  }

  angular.module('app').component('homeNavbar', {
    templateUrl: 'views/home/navbar/navbar.html',
    controller: NavbarHomeController,
    controllerAs: '$ctrl',
    bindings: {}
  });
})();
