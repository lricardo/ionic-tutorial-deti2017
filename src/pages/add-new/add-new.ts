import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewPage');
  }

  isButtonDisabled() {
    let titleNotReady = this.title == "" || this.title == undefined;
    let contentNotReady = this.content == "" || this.content == undefined;

    return titleNotReady || contentNotReady;
  }

  saveNote () {

    this.storage.get('todoList').then((notes) => {
      let currentNote = {"title": this.title, "content": this.content};
      
      if (notes == null ) {
        console.log("Notes are null, initializing...");
        this.storage.set('todoList', [currentNote]);
      }
      else {
        notes.push(currentNote);
        this.storage.set('todoList', notes);
      }
    });

    this.navCtrl.popToRoot();
    
  }
}
