import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalstorageService } from './localstorage.service';



@Injectable()
export class AuthService{

    private user: any;
    private userSource = new BehaviorSubject<any>(null);
    public userObservable$ = this.userSource.asObservable()

    constructor(private localService: LocalstorageService){
        try {
            this.user = this.localService.getLocalstorage('user');
        if(this.user){
            this.setUser(this.user);
        }
        } catch (error) {
            console.error("No existe el usuario en el storage")
        }
    }
    
   logout(){
        this.user = null;
        this.userSource.next(this.user);
        this.localService.deleteLocalstore('user');
   }
    
    setUser(user){
        this.user = user;
        this.userSource.next(this.user);
        this.localService.saveLocalstorage('user', user);
    }
    
}