import { Observable } from 'rxjs';

export interface User{
  id: number;
  username: string;
  names: string;
  lastnames: string;
  email: string;
}

export abstract class UserData {
    abstract getUsers():   Observable<any[]>;
    abstract findUser():   Observable<any>;
    abstract createUser(): Observable<any>;
    abstract updateUser(): Observable<any>;
    abstract deleteUser(): Observable<any>;
  }