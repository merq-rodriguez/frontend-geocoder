import { Injectable } from '@angular/core';
import { of as observableOf ,Observable, of } from 'rxjs';
import { Api } from './api.service';
import { SubthemeData } from '../data/subtheme-data';

@Injectable()
export class SubthemeService extends SubthemeData{

    constructor(
      private api: Api,
    ){
      super()
    }

    private controller: string = "subthemes"  
    themes = [];

    getSubthemes():Observable<any>{
        return this.api.get(this.controller+'/getAll')
    }

    findSubtheme(): Observable<any> {
        return observableOf(this.themes);
    }
    
      createSubtheme(): Observable<any> {
        return observableOf(this.themes);
    }
    
      updateSubtheme(): Observable<any> {
        return observableOf(this.themes);
    }

    deleteSubtheme(): Observable<any> {
        return observableOf(this.themes);
      }
      
    
}

