// 여기서는 API key를 초기화 하며
// API key를 반환 할 수 있는 함수를 만들어서
// 홈페이지와 같은 기타 기능 TS는 비공개로 전환됩니다.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApikeyService {

  private _apikey = '8E697A32-DC96-4999-9782-353FFCDB02AE';

  constructor() { }

  // 다른 함수에서도 사용 할 수 있도록 public으로 지정합니다.
  public get apikey() {
    return this._apikey;
  }
}
