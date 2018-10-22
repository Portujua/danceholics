(() => {
  class PresentationHomeController {
    constructor(HomeService, $interval) {
      this.HomeService = HomeService;

      this.bgImages = ['images/test.jpg', 'https://donkeywelfaresymposium.com/wp-content/uploads/2018/05/clases-de-baile-de-salon-madrid-223785-escuela-de-danza-madrid-charlie-releve-of-clases-de-baile-de-salon-madrid.jpg', 'https://arsenalsupremo.com/wp-content/uploads/2018/08/baile-salon-379070-clases-de-baile-academia-de-baile-teresa-of-baile-salon.jpg', 'https://arsenalsupremo.com/wp-content/uploads/2018/08/aprender-a-bailar-bailes-de-salon-387299-clases-de-baile-academia-de-baile-teresa-of-aprender-a-bailar-bailes-de-salon.jpg'];

      this.currentBgImage = _.first(this.bgImages);
      this.currentIndex = 0;

      $interval(() => {
        if (this.currentIndex + 1 < this.bgImages.length) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }

        this.currentBgImage = this.bgImages[this.currentIndex];
      }, 5000);
    }

    $onInit() {
      this.load();
    }

    load() {
      //
    }
  }

  angular.module('app').component('presentation', {
    templateUrl: 'views/home/presentation/presentation.html',
    controller: PresentationHomeController,
    controllerAs: '$ctrl',
    bindings: {}
  });
})();
