import { Component } from '@angular/core';
import { AuthService } from '../@core/services/auth.service';


@Component({
  selector: 'ngx-admin',
  styleUrls: ['admin.component.scss'],
  templateUrl: './admin.component.html',
})
export class AdminComponent {

  public user:any;

  constructor(private authService: AuthService){
    this.authService.userObservable$.subscribe(res => {
      this.user = res;
      console.log(res);
    })
  }

}


