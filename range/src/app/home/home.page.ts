import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private range: number;

  constructor() {}

  showResult() {
    console.log(this.range);
  }

}
