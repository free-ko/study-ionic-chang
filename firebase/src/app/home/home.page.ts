import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public email: string;
  public password: string;

  constructor() {}

  async ngOnInit() {
  }

  async createUser() {
    const result = await firebase.auth().signInWithEamilAndPassword(this.email, this.password);
  }

  async login() {
    const result = await firebase.auth().signInWithEamilAndPassword(this.email, this.password);
  }

}
