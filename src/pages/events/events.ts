import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  private events: {title: string, code: string, date: string, details: string}[] = [];

  constructor(public navCtrl: NavController) {

    this.events.push({
      title: 'Practice Quiz',
      code: 'COMP 2201',
      date: 'MAY 21, 2017',
      details: 'Practice Quiz on Master Theorem'
    });

    this.events.push({
      title: 'Assignment',
      code: 'COMP 2201',
      date: 'MAY 23, 2017',
      details: 'Assignment Drop'
    });

    this.events.push({
      title: 'Programming',
      code: 'COMP 2201',
      date: 'MAY 24, 2017',
      details: 'Tutorial on Wednessday'
    });

  }

}
