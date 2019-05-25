import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/@core/services/user.service';
import { SnackBarService } from 'src/app/@core/services/snackbar.service';
import { LocalstorageService } from 'src/app/@core/services/localstorage.service';

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
    private localstorageService: LocalstorageService, 
    private  userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  
  
  public login(){
    if(this.password.trim() === '' || this.username.trim() === ''){
      this.snackService.openSnackBar('Campos vacios', 'Aceptar');
    }else{
      this.userService.signIn(this.username, this.password).subscribe(user => {
        if(user.accessTocken){
          this.userService.setUser(user); //Guardamos el usuario autenticado en el behaviorSubject
          this.localstorageService.saveLocalstorage('user', user); //Guardamos el usuario el localstoraje por si las moscas XD
          this.router.navigate(['/admin/thematic-content/menu-language'])
        }else 
          this.snackService.openSnackBar('Hiugston Tenemos un problema', 'Joder todo el sistema');
      }) 
    }
  }

}
