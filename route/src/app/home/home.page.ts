import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
  ) {}

  moveToPage(pagename: string) {
    if(pagename == 'second') {
      this.router.navigate([pagename]);
      return;
    }
    if(pagename == 'third') {
      this.router.navigate(['home', pagename]);
      return;
    }
    this.router.navigate(['home', pagename]);
  }
}
