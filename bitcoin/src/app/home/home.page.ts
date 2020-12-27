import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'  // import을 한 뒤에 app.module.ts에도 추가해줘야 합니다.
import { Chart } from 'chart.js';


export interface $Bitcoin {
  BTCUSD: {
    ask: number;
    averages: any;
    bid: number;
    last: number;
    timestamp: number;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('myChart', {static: true}) myChart: ElementRef

  private isLoding = false;

  constructor(
    private http:HttpClient
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
      this.http.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/all?crypto=BTC&fiat=USD')
      .subscribe((coin: $Bitcoin) => {
        console.log(coin.BTCUSD.timestamp, coin.BTCUSD.bid);
        this.isLoding = false;
    });
  }

  // chart.js를 통해 차트를 구현하는 함수 입니다.
  showChart() {
    return new Chart(this.myChart.nativeElement, {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
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
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }
}
