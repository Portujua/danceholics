(() => {
  class HeadquartersHomeController {
    constructor(HomeService) {
      this.HomeService = HomeService;

      this.danceHolicsMarker = {
        url: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/40252602_287930568466958_8992671218624626688_n.jpg?_nc_cat=104&_nc_ht=scontent-mia3-2.xx&oh=a05d9c2f843d83acf7dbaf3abf6ee9b9&oe=5C41C3FF',
        scaledSize: [40, 40]
      };
    }

    $onInit() {
      this.load();
    }

    load() {
      //
    }
  }

  angular.module('app').component('headquarters', {
    templateUrl: 'views/home/headquarters/headquarters.html',
    controller: HeadquartersHomeController,
    controllerAs: '$ctrl',
    bindings: {}
  });
})();
