import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signUp',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUp implements OnInit {

  public names:string = "";
  public email:string = "";
  public password:string = "";

  constructor() {}
  ngOnInit() {}

  
  public validate() {
    if(this.names.trim() === '' || this.email.trim() === '' || this.password.trim() === ''){
      return false;
    }
    return true;
    
  }

  public validateEmail(){
    let patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(this.email.search(patron) == 0){
      console.log("Si es un correo");
      return true;
    }else{
      console.log("No es un correo");
      return false;
    }
  }

  signUp(){
    if(this.validate()){
      console.log("Enviado usuario al backend");
    }else{
      console.log("Campos vacios");
      
    }
  }

}
