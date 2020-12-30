import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvhZhsrR0Z8hEHnH7ZDKEAkEHt1Y9YhTk",
  authDomain: "study-ionic-7a504.firebaseapp.com",
  databaseURL: "https://study-ionic-7a504-default-rtdb.firebaseio.com",
  projectId: "study-ionic-7a504",
  storageBucket: "study-ionic-7a504.appspot.com",
  messagingSenderId: "936799581080",
  appId: "1:936799581080:web:aaf0de6f2f18ed7cc9f1ed",
  measurementId: "G-P6KSTX4KEZ"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      firebase.initializeApp(firebaseConfig);
    });
  }
}
