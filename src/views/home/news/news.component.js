(() => {
  class NewsHomeController {
    constructor(HomeService) {
      this.HomeService = HomeService;

      this.data = [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          description: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
          image: 'http://dummyimage.com/600x150.png/cc0000/ffffff',
          date: '15/08/2018'
        },
        {
          id: 2,
          title: 'Cras in purus eu magna vulputate luctus.',
          description: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
          image: 'http://dummyimage.com/600x366.bmp/dddddd/000000',
          date: '28/09/2018'
        },
        {
          id: 3,
          title: 'Etiam vel augue.',
          description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          image: 'http://dummyimage.com/600x313.bmp/ff4444/ffffff',
          date: '27/06/2018'
        },
        {
          id: 4,
          title: 'In hac habitasse platea dictumst.',
          description: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
          image: 'http://dummyimage.com/600x384.bmp/ff4444/ffffff',
          date: '29/03/2018'
        },
        {
          id: 5,
          title: 'Donec quis orci eget orci vehicula condimentum.',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
          image: 'http://dummyimage.com/600x272.jpg/ff4444/ffffff',
          date: '22/08/2018'
        },
        {
          id: 6,
          title: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          description: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
          image: 'http://dummyimage.com/600x442.png/cc0000/ffffff',
          date: '03/02/2018'
        },
        {
          id: 7,
          title: 'Proin at turpis a pede posuere nonummy.',
          description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          image: 'http://dummyimage.com/600x380.png/dddddd/000000',
          date: '01/10/2018'
        },
        {
          id: 8,
          title: 'Mauris ullamcorper purus sit amet nulla.',
          description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
          image: 'http://dummyimage.com/600x207.png/5fa2dd/ffffff',
          date: '03/04/2018'
        },
        {
          id: 9,
          title: 'Proin interdum mauris non ligula pellentesque ultrices.',
          description: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
          image: 'http://dummyimage.com/600x209.bmp/dddddd/000000',
          date: '02/10/2018'
        }
      ];

      this.columns = [[], [], []];

      this.fillColumns();
    }

    $onInit() {
      this.load();
    }

    load() {
      //
    }

    fillColumns() {
      let data = angular.copy(this.data);
      let index = 0;

      while (data.length > 0) {
        this.columns[index].push(data.pop());
        index++;

        if (index >= this.columns.length) {
          index = 0;
        }
      }
    }
  }

  angular.module('app').component('news', {
    templateUrl: 'views/home/news/news.html',
    controller: NewsHomeController,
    controllerAs: '$ctrl',
    bindings: {}
  });
})();
