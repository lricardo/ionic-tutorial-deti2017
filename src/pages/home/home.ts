import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNewPage } from '../add-new/add-new';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private notes: Object[];
  constructor(public navCtrl: NavController, private storage: Storage) {
    
  }

  ionViewWillEnter () {
    console.log("Will enter ...");
    this.storage.get('todoList').then((notes) => {
      this.notes = notes;
    });
  }

  addNewNote () {
    this.navCtrl.push(AddNewPage);
  }

}
