import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'news.html'
})
export class NewsPage {

  private news: {title: string, code: string, date: string, details: string, author: string}[] = [];

  constructor(public navCtrl: NavController) {

    this.news.push({
      title: 'Assignment Due',
      code: 'COMP 3161',
      date: 'May 11, 2017',
      details: 'Assignment Due at Midnight',
      author: 'Kevin Miller'
    });

    this.news.push({
      title: 'No Labs on Thursday',
      code: 'COMP 1127',
      date: 'MAY 12, 2017',
      details: 'No labs will be held coming Thursday',
      author: 'Gunjan Mansingh'
    });

    this.news.push({
      title: 'Labs will be in CLR on Friday',
      code: 'COMP 2130',
      date: 'MAY 23, 2017',
      details: 'Systems labs will be held in CLR',
      author: 'Kevin Miller'
    });

  }

}
