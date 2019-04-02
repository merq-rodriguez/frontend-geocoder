import { Injectable } from '@angular/core';
import { of as observableOf,  Observable  } from 'rxjs';
import { UserData } from '../entities/user-data';

@Injectable()
export class UserService  extends UserData{

  private users = {
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };
  

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }
  
  findUser(): Observable<any> {
    return observableOf(this.users);
  }
  createUser(): Observable<any> {
    return observableOf(this.users);
  }
  updateUser(): Observable<any> {
    return observableOf(this.users);
  }
  deleteUser(): Observable<any> {
    return observableOf(this.users);
  }
  
}




