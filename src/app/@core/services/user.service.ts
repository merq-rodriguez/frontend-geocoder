import { Injectable } from '@angular/core';
import { of as observableOf,  Observable  } from 'rxjs';
import { UserData, IUser, ERole } from '../data/user.data';
import { Api } from './api.service';

@Injectable()
export class UserService  extends UserData{
  private controller: string = "/users";
  private users: IUser[] = [
    {idUser: 1, username: 'Pepa', email: 'judro@gmail.com', names: 'xx', lastnames: 'yyy', idRole: ERole.STUDENT},
    {idUser: 2, username: 'Luisa', email: 'judro@gmail.com', names: 'xx', lastnames: 'yyy', idRole: ERole.STUDENT},
    {idUser: 3, username: 'Jonh', email: 'judro@gmail.com', names: 'x', lastnames: 'yyy', idRole: ERole.ADMIN},
    {idUser: 4, username: 'Arya', email: 'judro@gmail.com', names: 'x', lastnames: 'yy', idRole: ERole.STUDENT}
  ];
  
  constructor(private apiService: Api){ super() }

  getUsers(): Observable<any> {
    return this.apiService.get(this.controller);
  }
  
  findUser(idUser: number): Observable<any> {
    return observableOf(this.users);
  }
  createUser(user: IUser): Observable<any> {
    return observableOf(this.users);
  }
  updateUser(user: IUser): Observable<any> {
    return observableOf(this.users);
  }
  deleteUser(idUser: number): Observable<any> {
    return observableOf(this.users);
  }
  
}




