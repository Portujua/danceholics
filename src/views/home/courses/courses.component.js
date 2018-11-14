(() => {
  class CoursesHomeController {
    constructor(HomeService) {
      this.HomeService = HomeService;

      this.courses = [
        {
          name: 'Salsa Casino',
          description: `Es un estilo de baile nacido en cuba a mediados del siglo XX (1956 aproximadamente) y su origen musical está íntimamente ligado al ritmo del Son y su nombre se debe al Club Casino Deportivo de Cuba.<br><br>
          Apareció como forma de diversión y es caracterizado por estimular la creatividad a partir de la libertad de los movimientos. Su dinamismo y elegancia hicieron que muy pronto se propagara por todo el país, lo que dio lugar a la aparición de toda una serie de aportes, por parte de los bailadores, que fueron complicando su coreografía con la que se ponía a prueba la destreza de los participantes.`
        },
        {
          name: 'Bachata',
          description: `La bachata es un género musical bailable originario de la República Dominicana, dentro de lo que se denomina folclore urbano. Está considerado como un derivado del bolero rítmico, influenciado por otros estilos como el son cubano y el merengue.<br><br>
          La bachata surgió en la marginalidad urbana de los bares y burdeles de Santo Domingo, durante los años 1960 y principios de los años 1970, desdeñada como música de las clases pobres, fue conocida como “música de amargue” por el estado de melancolía provocado por el desamor, siempre reflejado en la temática de sus composiciones. Su difusión por esos años, estuvo limitada a escasas emisoras, ya que era considerada como una música vulgar. El interés masivo por el ritmo surgió a partir de los años ochenta, con la importancia que alcanzó el ritmo en los medios de comunicación gracias a artistas como Luis Segura y Juan Luis Guerra.`
        },
        {
          name: 'Kizomba',
          description: `Kizomba es un género de música y baile procedente de Angola, el término significa "fiesta" y la expresión proviene de la lengua kimbundu.<br><br>
          Surge en Angola, entre la década de los 60 y 70, en su comienzo, prácticamente sólo se extendió por los países luso parlantes de África, pero posteriormente (favorecido por la inmigración) llegó a Europa, donde cada vez hay más países con grandes comunidades de kizomberos (apasionados de este género musical y de su baile), entre los que cabe destacar por orden de importancia: Portugal, Francia, España, Inglaterra y Polonia. Se dice que es una fusión de la “semba” (ritmo angoleño precursor de la samba) con otros ritmos africanos como el zouk, aunque sobre el origen de la Kizomba hay mucha polémica ya que los angoleños se atribuyen su autoría, pero muchos caboverdianos han llegado a declarar que la Kizomba no existe como tal, sino que es zouk cantado en portugués.`
        },
        {
          name: 'Salsa en Línea',
          description: `La salsa en línea fue creada en Estados Unidos por los inmigrantes cubanos y portorriqueños.<br><br>
          Su denominación "en línea" se debe a que las figuras se desarrollan a lo largo de una recta imaginaria. Con el tiempo, esta forma de bailar la salsa ira tomando su forma definitiva, y dará lugar a los diferentes estilos de salsa en línea (LA, New York, Mambo, Cabaret, entre otros) que hoy existen en función de la ciudad y del origen de los bailarines.`
        }
      ];
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
