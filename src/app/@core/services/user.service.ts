import { Injectable } from '@angular/core';
import { of as observableOf,  Observable, BehaviorSubject  } from 'rxjs';
import { UserData, IUser, ERole } from '../data/user.data';
import { Api } from './api.service';

@Injectable()
export class UserService  extends UserData{
  private controller: string = "users";
  private userSource = new BehaviorSubject<any>(null);
  public  userAuth$ = this.userSource.asObservable();
  private users: IUser[] = [];
  
  constructor(private apiService: Api){ super() }

  getUser() :Observable<any>{
    return this.userAuth$;
  }

  setUser(user):void{
    this.userSource.next(user);
  }

  getUsers(): Observable<any> {
    return this.apiService.get(this.controller);
  }
  
  findUser(idUser: number): Observable<any> {
    return observableOf(this.users);
  }
  createUser(user: IUser): Observable<any> {
    return this.apiService.post(this.controller, 'createUser', user);
  }
  signUp(user: IUser): Observable<any> {
    return this.apiService.post('auth', 'signup', user);
  }
  
  signIn(username: string, password: string): Observable<any> {
    return this.apiService.post('auth', 'signin', {username, password});
  }

  updateUser(user: IUser): Observable<any> {
    return observableOf(this.users);
  }
  deleteUser(idUser: number): Observable<any> {
    return observableOf(this.users);
  }

  addScoreToUser(idScore: number, points: number): Observable<any> {
    return this.apiService.put(this.controller,'addScore',{idScore, points})
  }
  
}




