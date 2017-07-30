import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CTabsPage } from '../ctabs/ctabs';

@Component({
  selector: 'page-home',
  templateUrl: 'courses.html'
})
export class CoursesPage {

  private courses: {code: string, title: string}[] = [];

  constructor(public navCtrl: NavController) {

    this.courses.push({
      code: 'COMP 2130',
      title: 'Systems Programming'
    });

    this.courses.push({
      code: 'COMP 2170',
      title: 'Object Technology'
    });

    this.courses.push({
      code: 'COMP 2190',
      title: 'Net Centric Computing'
    });

  }

  goToCourse(){
    this.navCtrl.push(CTabsPage);
  }

}
