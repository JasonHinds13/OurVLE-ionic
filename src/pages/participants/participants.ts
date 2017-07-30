import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-participants',
  templateUrl: 'participants.html'
})
export class ParticipantsPage {

  private participants: {name: string}[] = [];

  constructor(public navCtrl: NavController) {

    this.participants.push({
      name: 'Frank Ocean'
    });

    this.participants.push({
      name: 'Jason Williams'
    });

    this.participants.push({
      name: 'Lamar White'
    });

  }

}
