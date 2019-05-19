import { Observable } from 'rxjs';

export interface IUser{
  idUser?: number;
  username: string;
  password?: string;
  names: string;
  lastnames: string;
  email: string;
  nick?: string;
  phone?: string;
  idRole: ERole;
}

export enum ELevel{
  NOOB = 1,
  MASTER = 2,
  LEGEND = 3
}

export enum ERole{
  ADMIN = 1,
  STUDENT = 2,
  TEACHER = 3
}

export abstract class UserData {
    abstract getUsers():   Observable<any[]>;
    abstract findUser(idUser: number):   Observable<any>;
    abstract createUser(user: IUser): Observable<any>;
    abstract updateUser(user: IUser): Observable<any>;
    abstract deleteUser(idUser: number): Observable<any>;
  }