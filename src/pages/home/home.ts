import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNewPage } from '../add-new/add-new';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private notes: Object[];
  constructor(public navCtrl: NavController, private http: Http) {
    this.http.get("../../assets/data/notes.json").subscribe((res: Response) => {
      this.notes = res.json();
    });
  }

  addNewNote () {
    this.navCtrl.push(AddNewPage);
  }

}
