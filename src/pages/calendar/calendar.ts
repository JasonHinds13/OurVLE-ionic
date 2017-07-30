import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'calendar.html'
})
export class CalendarPage {

  private events: {title: string, code: string, date: string, details: string}[] = [];

  constructor(public navCtrl: NavController) {

    this.events.push({
      title: 'Practice Quiz',
      code: 'COMP 2201',
      date: 'MAY 21, 2017',
      details: 'Practice Quiz on Master Theorem'
    });

    this.events.push({
      title: 'Assignment Extension',
      code: 'COMP 3161',
      date: 'MAY 23, 2017',
      details: 'Due date for Assignment extended'
    });

    this.events.push({
      title: 'Programming Competition',
      code: 'COMP 2201',
      date: 'MAY 24, 2017',
      details: 'Enter and gain extra credit'
    });

  }

}
