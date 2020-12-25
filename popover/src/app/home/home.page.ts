import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {PopComponent} from '../pop/pop.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private popoverCtrl: PopoverController,
  ) {}

  showPop() {
    console.log("show pop");
    this.popoverCtrl.create({
      component:PopComponent
    }).then(data=> {
      data.present();
    }).catch(err => {
      console.log('Error');
    })
  }
}
