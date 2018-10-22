(() => {
  class CoursesHomeController {
    constructor(HomeService) {
      this.HomeService = HomeService;

      this.courses = ['Salsa Casino', 'Bachata', 'Kizomba', 'Salsa en Línea'];
    }

    $onInit() {
      this.load();
    }

    load() {
      //
    }
  }

  angular.module('app').component('courses', {
    templateUrl: 'views/home/courses/courses.html',
    controller: CoursesHomeController,
    controllerAs: '$ctrl',
    bindings: {}
  });
})();
