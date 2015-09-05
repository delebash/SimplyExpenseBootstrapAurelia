import {Router} from 'aurelia-router';
import 'bootstrap';
import 'src/css/styles.css!';
import 'src/css/style.css!';

export class App {
  router:Router;

  configureRouter(config, router:Router) {

    config.title = 'Aurelia';
    config.map([
      {route: ['', 'main'], moduleId: './views/main', nav: false},
      { route: 'expenses',  moduleId: './views/expenses', nav: true, title:'First' },
      { route: 'receipts',  moduleId: './views/receipts', nav: true, title:'Second' },
      { route: 'nothing',  moduleId: './views/nothing', nav: true, title:'Third' }
    ]);

    this.router = router;
  }


}
