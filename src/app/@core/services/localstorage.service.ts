import { Injectable } from '@angular/core';



@Injectable()
export class LocalstorageService {

    isCompatible(){
        if (typeof(Storage) !== "undefined") {
            return true;
        } else {
            return false;
        }
        
    }

    getLocalstorage(key: string){
        if(this.isCompatible()){
            JSON.parse(localStorage.getItem(key));
        }
    }
    
    saveLocalstorage(key: string, object:any){
        if(this.isCompatible()){
            localStorage.setItem(key, JSON.stringify(object));
        }
    }
}