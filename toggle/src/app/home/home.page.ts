import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private realEstate = false;
  private gold = false;
  private usTock = false;
  private g = 0;
  private u = 0;
  private re = 0;

  constructor() {}

  goldChanged() {
    console.log(`금이 변경되었습니다. (${this.g++}번째)`);
  }

  usTockFocused() {
    console.log(`USTOCK이 포커스 되었습니다. (${this.u++}번째)`);
  }

  reBlurred() {
    console.log(`부동산이 변경되었습니다. (${this.re}번째)`);
  }
}
