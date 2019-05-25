import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/@core/services/user.service';
import { IUser } from 'src/app/@core/data/user.data';
import { SnackBarService } from 'src/app/@core/services/snackbar.service';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/@core/services/localstorage.service';

@Component({
  selector: 'signUp',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUp implements OnInit {



  public user: IUser = {
    names: '',
    email: '',
    password: '',
    lastnames: '',
    phone: '',
    username: '',
    idRole: 2
  }


  constructor(
    private userService: UserService,
    private snackService: SnackBarService,
    private router: Router,
    private localstorageService: LocalstorageService
  ) { }

  ngOnInit() { }


  public validate() {
    if (
      this.user.names.trim() === '' ||
      this.user.email.trim() === '' ||
      this.user.password.trim() === '' ||
      this.user.username.trim() === ''
    ) {
      return false;
    }
    return true;

  }

  public validateEmail() {
    let patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (this.user.email.search(patron) == 0) {
      return true;
    } else {

      return false;
    }
  }

  public signUp() {
    if (this.validate()) {
      if (this.validateEmail()) { //Se envia el usuario al backend
        this.userService.createUser(this.user).subscribe(res => {
          if (res.status) {
            if (res.status === 400) {
              this.snackService.openSnackBar('Ohhh Ohhh verifica tu correo o nombre de usuario', 'Aceptar');
            }
          }else{
            this.localstorageService.saveLocalstorage('user', {})
            this.router.navigate(['admin/thematic-content/menu-language'])
          }
        });
      } else {
        this.snackService.openSnackBar('Tu correo no es valido', 'Aceptar');
      }
    } else {
      this.snackService.openSnackBar('Existen campos vacios', 'Aceptar');

    }
  }

}
