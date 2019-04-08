import { Injectable } from '@angular/core';
import { of as observableOf ,Observable, BehaviorSubject } from 'rxjs';
import { MonacoData } from '../data/monaco.data';

@Injectable()
export class MonacoService implements MonacoData {
    private content = '';
    private contentSource = new BehaviorSubject<any>(null);    
    public  content$ = this.contentSource.asObservable();

    constructor() { }


    setContentMonaco(content: string):void{
        this.content = content;
        this.contentSource.next(this.content);
    }

    getContentMonaco(): Observable<any> { 
        return this.content$; 
    }
}