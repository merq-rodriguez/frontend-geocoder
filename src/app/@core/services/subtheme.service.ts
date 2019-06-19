import { Injectable } from '@angular/core';
import { of as observableOf ,Observable, of } from 'rxjs';
import { Api } from './api.service';
import { SubthemeData, ISubtheme } from '../data/subtheme-data';

@Injectable()
export class SubthemeService extends SubthemeData{

    constructor( private readonly api: Api){
      super();
    }

    private controller: string = "subthemes"  

    getSubthemes(idTheme: number):Observable<any>{
        return this.api.get(this.controller+'/getAll', idTheme);
    }

    
    findSubtheme(idSubtheme: number): Observable<any> {
        return this.api.get(this.controller+'/getAll', idSubtheme);
    }
    
  
    createSubtheme(subtheme: ISubtheme, idTheme: number): Observable<any> {
      const form = new FormData();
      if(subtheme.image)
          form.append('image', subtheme.image, subtheme.image.name);
      
      if(subtheme.contentCode)
          form.append('contentCode', subtheme.contentCode)   

      form.append('name', subtheme.name);
      form.append('description', subtheme.description);
      form.append('content', subtheme.contentEditor);
      form.append('idTheme', String(idTheme));
      return this.api.post(this.controller, 'createSubtheme', form);
    }


    updateSubtheme(subtheme: ISubtheme, idTheme: number): Observable<any> {
      const form = new FormData();
      if(subtheme.image)
          form.append('image', subtheme.image, subtheme.image.name);
      
      if(subtheme.contentCode)
          form.append('contentCode', subtheme.contentCode)   

      form.append('idSubtheme', subtheme.id);
      form.append('name', subtheme.name);
      form.append('description', subtheme.description);
      form.append('content', subtheme.contentEditor);
      return this.api.put(this.controller, 'updateSubtheme', form);
    }
    

    deleteSubtheme(idSubtheme: number): Observable<any> {
        return this.api.delete(this.controller, 'deleteSubtheme', idSubtheme);
    }
      
    
}

