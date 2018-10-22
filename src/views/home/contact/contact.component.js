(() => {
  class ContactHomeController {
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

  angular.module('app').component('contact', {
    templateUrl: 'views/home/contact/contact.html',
    controller: ContactHomeController,
    controllerAs: '$ctrl',
    bindings: {}
  });
})();
