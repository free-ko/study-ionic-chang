import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private yearSelected: any;

  private years: any = [];

  constructor() {
    for (let year = 1900; year < 2020; year++) {
      this.years.push(year);
    }

    this.yearSelected = '아직은 선택되지 않았습니다.';
    // this.years.push(1990);
    // this.years.push(1991);
    // this.years.push(1992);
  }

  selected($event) {
    this.yearSelected = $event.detail.value;
  }
}
