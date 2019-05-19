import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signIn',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignIn implements OnInit {

  public username: string = "";
  public password: string = "";

  constructor() { }

  ngOnInit() {
  }

}
