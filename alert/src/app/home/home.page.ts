import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private alertMsg: string;

  // 가져 온것을 어떻게 부를 것인지
  // 이게 무엇인지
  // 어디서 가져왔는지
  // 밑에 코드 한줄의 설명입니다.
  constructor(
    private alertCtrl: AlertController
  ) {}

  // async, await를 하지 않으면 작동을 안 합니다.
  async showAlert() {
    // 경고 메세지 만들기
    console.log('버튼이 눌렀습니다.');
    const alert = await this.alertCtrl.create({
      header: '경고 메세지',
      subHeader: '나 불렀음?',
      message: '분필과 성대를 선택해 주세요',
      buttons: [
        {
          text: '분필',
          handler: () => {
            this.alertMsg = '분필';
          }
        },
        {
          text: '성대',
          handler: () => {
            this.alertMsg = '성대';
          }
        }
      ]
    });
    await alert.present();
  }
}
