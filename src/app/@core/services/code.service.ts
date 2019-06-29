import { Injectable } from '@angular/core';
import { of as observableOf ,Observable, of } from 'rxjs';
import { Api } from './api.service';
import { CodeData, ICode } from '../data/code.data';

@Injectable()
export class CodeService extends CodeData{

    constructor( private readonly api: Api){
      super();
    }

    private controller: string = "codes"  

    getCodes(idUser: number):Observable<any>{
        return this.api.get(this.controller+'/getAll', idUser);
    }

    
    findCode(idCode: number): Observable<any> {
        return this.api.get(this.controller+'/findCode', idCode);
    }
    
  
    createCode(code: ICode): Observable<any> {
      return this.api.post(this.controller, 'createCode', code);
    }


    updateCode(code: ICode): Observable<any> {
      return this.api.put(this.controller, 'updateCode', code);
    }
    

    deleteCode(idCode: number): Observable<any> {
        return this.api.delete(this.controller, 'deleteCode', idCode);
    }
      
    
}

