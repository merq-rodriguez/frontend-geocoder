import { Component } from '@angular/core';


@Component({
  selector: 'ngx-admin',
  styleUrls: ['admin.component.scss'],
  template: `
  <div class="main">
    <header>
      <app-navbar></app-navbar>
    </header>
    <div id='main'>
      <article>
        <router-outlet></router-outlet>
      </article>
      <nav>
        <app-sidebar></app-sidebar>
      </nav>
      <!--  <aside>
        <app-aside></app-aside>
      </aside> -->
    </div>
    <footer>footer</footer>
  </div>
  `,
})
export class AdminComponent {}
