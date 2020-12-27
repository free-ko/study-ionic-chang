import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'  // import을 한 뒤에 app.module.ts에도 추가해줘야 합니다.
import { Chart } from 'chart.js';
import { ApikeyService } from '../apikey.service';

export interface Bitcoin {
  symbol_id : string;
  time_exchange: string;
  time_coinapi: string;
  ask_size: number; 
  bid_price: number;
  bid_size: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private url = 'https://rest.coinapi.io/v1/quotes/COINBASE_SPOT_BCH_USD/latest?apikey=';

  private x: string[] = [];
  private y: number[] = [];

  @ViewChild('myChart', {static: true}) myChart: ElementRef

  private isLoding = false;

  constructor(
    private http:HttpClient,
    private api: ApikeyService,
  ) {}

  getBitcoinBtnClicked() {
    // 밑에 코드를 통해서 API를 불러오는 동안에 혹여나 함수가 또 실행 되었을 경우를 대비해
    // 작성한 코드 입니다.
    if (this.isLoding) {
        this.isLoding = true;
        this.getBitcoin();
      }
    }

    getBitcoin() {
      const URL = this.url + this.api.apikey
      this.http.get(URL)
      .subscribe((data: Bitcoin[]) => {
        console.log(data);
        data.forEach(eachCoin => {
          this.y.push(eachCoin.bid_price);
          const time = this.timeMake(eachCoin.time_exchange);
          this.x.push(time);
        });
        this.y.reverse();
        this.x.reverse();
        this.isLoding = false;
    });
  }

  timeMake(timeStr: string): string {
    const timeDate = new Date(timeStr);
    const minute = timeDate.getMinutes();
    const seconds = timeDate.getSeconds();
    return `${minute}-` + seconds;
  }

  // chart.js를 통해 차트를 구현하는 함수 입니다.
  showChart() {
    return new Chart(this.myChart.nativeElement, {
      type: 'line',
      data: {
          labels: this.x,
          datasets: [{
              label: 'Bitcoin bit pirce',
              data: this.y,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
  });
  }
}
