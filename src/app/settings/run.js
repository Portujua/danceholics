angular.module('app').run(($rootScope, PageService, editableOptions, editableThemes, toggleConfig, $timeout, LocationService, FACEBOOK_APP_ID) => {
  // Set IP
  LocationService.init();

  // Facebook init
  // FB.init({
  //   appId: FACEBOOK_APP_ID,
  //   status: false,
  //   cookie: false,
  //   xfbml: true,
  //   version: 'v2.4'
  // });

  // X-Editable settings (theme)
  editableThemes.bs3.inputClass = 'input-sm';
  editableThemes.bs3.buttonsClass = 'btn-sm';
  editableOptions.theme = 'bs3';
  editableOptions.icon_set = 'font-awesome';
  editableOptions.activate = 'select';

  // Toggle Config
  toggleConfig.on = 'Yes';
  toggleConfig.off = 'No';

  // List of maps in the system
  $rootScope.maps = [];

  // Push every map initialized
  $rootScope.$on('mapInitialized', (evt, map) => {
    $rootScope.maps.push(map);
    $rootScope.$broadcast('resizeAllMaps');
  });

  // Resize all maps no visible
  // Will trigger in every tab change
  $rootScope.$on('resizeAllMaps', () => {
    _.each($rootScope.maps, (map) => {
      let center = map.getCenter();
      $timeout(() => {
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
      }, 100);
    });
  });

  // Broadcasted before a route change. At this point the route services starts
  // resolving all of the dependencies needed for the route change to occur.
  // Typically this involves fetching the view template as well as any dependencies defined
  // in resolve route property. Once all of the dependencies are resolved $routeChangeSuccess
  // is fired.
  $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
    // TODO: check if the current route requires Auth and the user is logged in
    // TODO: create a global array for routes that require Auth
  });

  // Broadcasted after a route dependencies are resolved. ngView listens
  // for the directive to instantiate the controller and render the view.
  $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
    // Updating page information
    PageService.get();
  });

  // Broadcasted if any of the resolve promises are rejected.
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {});

  // Fired when a requested state cannot be found using the provided state name during transition. The event is broadcast
  // allowing any handlers a single chance to deal with the error (usually by lazy-loading the unfound state).
  $rootScope.$on('$stateNotFound', (event, unfoundState, fromState, fromParams) => {});

  // Fix for windows height
  $rootScope.$on('$viewContentLoaded', (event) => {
    // $('body, #sb-site').css('height', '1px');
    // $('body, #sb-site').css('height', 'auto');
  });
});
