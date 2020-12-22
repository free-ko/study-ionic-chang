import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 private stockName: string;

  constructor() {
    this.stockName = '아직 고르지 않았습니다.';
  }


  segmentChanged($event) {
    this.stockName = $event.detail.value;
  }
}
