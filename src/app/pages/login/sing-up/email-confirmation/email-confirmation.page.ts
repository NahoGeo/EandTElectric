import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.page.html',
  styleUrls: ['./email-confirmation.page.scss'],
})
export class EmailConfirmationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  confirmPassword(_confirmMailsKey) {
    this.router.navigate(['tabs/tab1'])
  }

}
