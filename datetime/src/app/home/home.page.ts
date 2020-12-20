import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // 버튼이 됬는지 확인하는 변수를 Bollean을 사용 합니다.
  private timeAnalyzedClicked = false;

  private myDT: string;
  private YY;
  private MM;
  private DD;
  private HH;
  private mm;
  private ss;

  constructor() {}

  timeAnalyzed() {
    this.timeAnalyzedClicked = (this.timeAnalyzedClicked) ? false : true;
    const DT = new Date(this.myDT);
    this.YY = DT.getFullYear();
    this.MM = DT.getMonth() + 1;
    this.DD = DT.getDate();
    this.HH = DT.getHours();
    this.mm = DT.getMinutes();
    this.ss = DT.getSeconds();
  }
}
