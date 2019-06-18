import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalstorageService } from './localstorage.service';



@Injectable()
export class AuthService{

    user: any;
    private userSource = new BehaviorSubject<any>(null);
    public userObservable = this.userSource.asObservable()

    constructor(private localService: LocalstorageService){
        try {
            let user = this.localService.getLocalstorage('user');
        if(user){
            this.setUser(user);
        }
        } catch (error) {
            console.error("No existe el usuario en el storage")
        }
    }
    
   
    
    setUser(user){
        this.user = user;
        this.userSource.next(this.user);
    }
    
}