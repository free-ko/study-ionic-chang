import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'  // import을 한 뒤에 app.module.ts에도 추가해줘야 합니다.

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

  constructor(
    private http:HttpClient
  ) {}

  getBitcoinBtnClicked() {
    this.http.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/all?crypto=BTC&fiat=USD')
    .subscribe((coin: $Bitcoin) => {
      console.log(coin.BTCUSD.timestamp, coin.BTCUSD.bid);
    });
  }
}
