import { Component } from '@angular/core';

@Component({
  selector: 'ngx-test',
  template: `
  <app-monaco-code></app-monaco-code>
    <router-outlet> </router-outlet>
  `,
})
export class TestComponent {

}
