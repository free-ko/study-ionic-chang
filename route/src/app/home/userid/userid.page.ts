import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userid',
  templateUrl: './userid.page.html',
  styleUrls: ['./userid.page.scss'],
})
export class UseridPage implements OnInit {

  private id: string;

  constructor(
    private activateRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params.get('userid')
  }
}
