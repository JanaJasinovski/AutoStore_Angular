import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public isChangePanel: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public signUpBtn() {
    this.isChangePanel = !this.isChangePanel;
  }

  public signInBtn() {
    this.isChangePanel = !this.isChangePanel;
  }

}
