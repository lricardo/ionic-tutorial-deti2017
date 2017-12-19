import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNewPage } from '../add-new/add-new';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private notes: Object[];
  constructor(public navCtrl: NavController) {
    this.notes = [
      {
        "title" : "Coldplay",
        "content": "Fix you"
      },
      {
        "title": "Overgrown",
        "content": "James Blake"
      },
      {
        "title": "Cashmere",
        "content": "BADBADNOTGOOD"
      }
    ];
  }

  addNewNote () {
    this.navCtrl.push(AddNewPage);
  }

}
