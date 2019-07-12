import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/@core/services/user.service';
import { SnackBarService } from 'src/app/@core/services/snackbar.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'signUp',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignIn implements OnInit {

  public logo = environment.api.geoprogram+"uploads/images/logo.png"
  

  public username: string = '';
  public password: string = '';
  public qrdata: string = null;

  constructor(
    private snackService: SnackBarService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() { 
    this.qrdata = 'Initial QR code data string';
  }

  changeValue(newValue: string): void {
    this.qrdata = newValue;
  }

  public signIn() {
    if(this.username.trim() === '' || this.password.trim() === ''){
      this.snackService.openSnackBar('Campos vacios', 'Aceptar');
    }else{
      this.userService.signIn(this.username, this.password).subscribe(user => {
        console.log("Respuesta del backend")
        console.log(user)
        if (user) {
          if(user.role !== 'Student'){
            this.userService.setUser(user); //Guardamos el usuario autenticado en el behaviorSubject
            this.authService.setUser(user);//Guardamos el usuario el localstoraje 
            this.router.navigate(['/admin/thematic-content/menu-language']); //Redireccionar a menu-language
          }else if(user.response){
            this.snackService.openSnackBar(user.response.message, 'Aceptar');
            
          }else if (user.role === 'Student'){
            this.userService.setUser(user); //Guardamos el usuario autenticado en el behaviorSubject
            this.authService.setUser(user);//Guardamos el usuario el localstoraje 
            this.router.navigate(['/admin/answer-exercises/exercise-favorite']); 
          }
          
        } else
          this.snackService.openSnackBar('Hiugston Tenemos un problema', 'Joder todo el sistema');
      })
    }
  }

}
