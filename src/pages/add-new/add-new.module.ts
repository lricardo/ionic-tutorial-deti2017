import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewPage } from './add-new';

@NgModule({
  declarations: [
    AddNewPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewPage),
  ],
})
export class AddNewPageModule {}
