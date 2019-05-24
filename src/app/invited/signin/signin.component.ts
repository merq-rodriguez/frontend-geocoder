import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/@core/services/user.service';
import { SnackBarService } from 'src/app/@core/services/snackbar.service';

@Component({
  selector: 'signIn',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignIn implements OnInit {

  public username: string = '';
  public password: string = '';

  constructor(
    private snackService: SnackBarService,
    private  userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  validateEmpty(){
    if(this.username.trim() === '' || this.password.trim() === ''){
      return  true;
    }else{
      
      return false;
    }
  }
  
  public login(){
    if(this.validateEmpty){
      console.log("campos vacios");
      /* this.userService.signIn(this.username, this.password).subscribe(res => {
        console.log(res);
      }) */
    }else{
      console.log("Todoo okay!");
      //this.snackService.openSnackBar('Campos vacios', 'Aceptar');
    }
    //this.router.navigate(['/admin/thematic-content/menu-language'])
  }

}
