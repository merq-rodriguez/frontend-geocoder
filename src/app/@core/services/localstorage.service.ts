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

    deleteLocalstore(key: string){
        localStorage.removeItem(key);
    }

    getLocalstorage(key: string){
        if(this.isCompatible()){
            return JSON.parse(localStorage.getItem(key));
        }
    }
    
    saveLocalstorage(key: string, object:any){
        if(this.isCompatible()){
            localStorage.setItem(key, JSON.stringify(object));
        }
    }
}