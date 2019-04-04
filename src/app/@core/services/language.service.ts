import { Injectable } from '@angular/core';
import { LanguageData } from '../data/language.data';
import { of as observableOf ,Observable } from 'rxjs';

@Injectable()
export class LanguageService extends LanguageData{

    private languages = []
      

    getLanguages():Observable<any>{
        return observableOf(this.languages);
    }

    findLanguage(): Observable<any> {
        return observableOf(this.languages);
      }
    createLanguage(): Observable<any> {
        return observableOf(this.languages);
      }
    updateLanguage(): Observable<any> {
        return observableOf(this.languages);
      }
    deleteLanguage(): Observable<any> {
        return observableOf(this.languages);
      }
      
    
}

