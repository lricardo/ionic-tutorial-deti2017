import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new',
  templateUrl: 'add-new.html',
})
export class AddNewPage {
  title: string;
  content: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewPage');
  }

  isButtonDisabled() {
    let titleNotReady = this.title == "" || this.title == undefined;
    let contentNotReady = this.content == "" || this.content == undefined;

    return titleNotReady || contentNotReady;
  }

}
