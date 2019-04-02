import { Component } from '@angular/core';


@Component({
  selector: 'ngx-admin',
  styleUrls: ['admin.component.scss'],
  template: `
  <app-admin-layout></app-admin-layout>
  <router-outlet></router-outlet>`,
})
export class AdminComponent {}
