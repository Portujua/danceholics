(() => {
  angular.module('app').directive('footerrr', ($timeout) => ({
    templateUrl: 'app/directives/footer/footer.html',
    restrict: 'E',
    replace: true,
    controller: 'FooterController',
    controllerAs: '$ctrl',
    link: ($scope, element, attrs, api) => {},
    scope: true
  }));
})();
