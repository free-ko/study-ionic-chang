import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private buttonMsg: string;

  constructor() {}

  btnMsgCopy(val: number) {
    this.buttonMsg = (val==0) ? 'Facebook' : (val == 1) ? 'Twitter' : 'Youtube';
  }
}
