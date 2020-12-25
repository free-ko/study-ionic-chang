import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss'],
})
export class PopComponent implements OnInit {

  constructor(
    private popoverCtrl: PopoverController,
  ) { }

  ngOnInit() {}

  pop(msg: string) {
    console.log(msg);
    this.popoverCtrl.dismiss();  // 이렇게 작성하면 클릭시 pop 사라짐
  }
}
