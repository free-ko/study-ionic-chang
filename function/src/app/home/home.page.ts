import { Component } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
     public actionSheetCtrl : ActionSheetController 
    ) {}

  async actionSheetClicked() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '배고프다, 10시가 넘었네',
      buttons: [
        {
          text: '치킨을 먹을까??',
          handler: () => {
            console.log('다이어트는?');
          }
        },
        {
          text: '맛있게 먹으면 0칼로리 라는데?',
          handler: () => {
            console.log('그래도 연예해야지');
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
