import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNewPage } from '../add-new/add-new';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addNewNote () {
    this.navCtrl.push(AddNewPage);
  }

}
